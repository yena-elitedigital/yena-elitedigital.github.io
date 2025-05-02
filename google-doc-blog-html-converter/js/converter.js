function copyToClipboard(copyBtnId) {
  const copyBtn = document.getElementById(copyBtnId);

  if (copyBtn?.nextElementSibling) {
    const code = copyBtn.nextElementSibling.textContent;

    if (!code) {
      alert ("No text to copy.");
    } else {
      navigator.clipboard.writeText(code);
      alert("Copied the HTML code to the clipboard.");
    }
  } else {
    alert("Failed to copy the HTML code to the clipboard.");
  }
}

function cleanGoogleRedirect(url) {
  try {
    const parsed = new URL(url);
    if (parsed.hostname === 'www.google.com' && parsed.pathname === '/url') {
      const real = parsed.searchParams.get('q');
      return real || url;
    }
  } catch (e) {
    return url;
  }
  return url;
}

window.onload = function () {
  document.getElementById('convert').addEventListener('click', async (event) => {
    const selectedType = document.getElementById('type').value;
    const internalDomain = document.getElementById('domain').value.trim();

    const htmlStyleMap = typeHtmlStyleMap ? typeHtmlStyleMap[selectedType] || typeHtmlStyleMap.default : '';
    const blockDividerMap = typeBlockDividerMap[selectedType] || typeBlockDividerMap.default;
    const wrapperMap = typeWrapperMap[selectedType] || typeWrapperMap.default;
    const classMap = typeClassMap[selectedType] || typeClassMap.default;
    const styleMap = typeStyleMap[selectedType] || typeStyleMap.default;

    const fileInput = document.getElementById('upload');

    if (!fileInput || !fileInput.files || fileInput.files.length === 0) {
      alert('Please upload a file.');
      return;
    }

    const file = fileInput.files[0];

    if (!file) return;

    let boldClassSet = new Set();

    function extractBoldClasses(styleText) {
      const regex = /\.([a-zA-Z0-9_-]+)\s*\{[^}]*font-weight\s*:\s*700[^}]*\}/g;
      let match;
      while ((match = regex.exec(styleText)) !== null) {
        boldClassSet.add(match[1]);
      }
    }

    const text = await file.text();

    const styleMatch = text.match(/<style[^>]*>([\s\S]*?)<\/style>/);
    if (styleMatch && styleMatch[1]) {
      extractBoldClasses(styleMatch[1]);
    }

    const parser = new DOMParser();
    const doc = parser.parseFromString(text, 'text/html');

    // Remove comments and their containers
    removeCommentContainers(doc.body);

    const allElements = Array.from(doc.body.querySelectorAll('h1, h2, h3, h4, p, ul, ol, img'));
    const startIndex = allElements.findIndex(el => el.textContent.trim().match(/^\[h1\]/i));

    if (startIndex === -1) return;

    const h1El = allElements[startIndex];
    const blogTitle = h1El ? h1El.textContent.trim().replace(/^\[h1\]\s*/i, '') : '';

    const afterTitle = allElements.slice(startIndex + 2);
    const blocks = [];

    let currentBlock = [h1El];
    let imageCount = 1;

    for (let i = 0; i < afterTitle.length; i++) {
      const node = afterTitle[i];
      if (node.tagName && blockDividerMap && node.tagName.toLowerCase() === blockDividerMap) {
        blocks.push([...currentBlock]);
        currentBlock = [node];
        const altTag = afterTitle[i + 1];
        if (altTag && altTag.tagName.toLowerCase() === 'p' && altTag.textContent.includes('Alt-Tag:')) {
          currentBlock.push(altTag);
          i++;
        }
      } else {
        currentBlock.push(node);
      }
    }
    if (currentBlock.length) blocks.push(currentBlock);

    document.getElementById('output').innerHTML = `
      <div class="block">
        <div class="block-title">Blog Title</div>
        <div>${blogTitle}</div>
      </div>`;

    blocks.forEach((block, index) => {
      let code = '';
      block.forEach(el => {
        if (!el.tagName) return;

        const tag = el.tagName.toLowerCase();

        if (tag === 'img') {
          let altText = '';

          const altTagEl = block.find(e => e !== el && e.tagName && e.tagName.toLowerCase() === 'p' && e.textContent.includes('Alt-Tag:'));

          if (altTagEl) {
            altText = altTagEl.textContent.split('Alt-Tag:')[1].trim();
          }

          const typeClass = classMap.img ? ` class="${classMap.img}"` : '';
          const typeStyle = styleMap.img ? ` style="${styleMap.img}"` : '';

          code += `<img src="IMG_${imageCount++}" alt="${altText}"${typeClass}${typeStyle} />\n`;
        } else if (tag === 'h2') {
          const cleaned = cleanText(el).replace(/^\[h2\]\s*/i, '');

          const typeClass = classMap.h2 ? ` class="${classMap.h2}"` : '';
          const typeStyle = styleMap.h2 ? ` style="${styleMap.h2}"` : '';

          code += `<h2${typeClass}${typeStyle}>${cleaned}</h2>\n`;
        } else if (tag === 'h3') {
          const cleaned = cleanText(el).replace(/^\[h3\]\s*/i, '');

          const typeClass = classMap.h3 ? ` class="${classMap.h3}"` : '';
          const typeStyle = styleMap.h3 ? ` style="${styleMap.h3}"` : '';

          code += `<h3${typeClass}${typeStyle}>${cleaned}</h3>\n`;
        } else if (tag === 'h4') {
          const cleaned = cleanText(el).replace(/^\[h4\]\s*/i, '');

          const typeClass = classMap.h4 ? ` class="${classMap.h4}"` : '';
          const typeStyle = styleMap.h4 ? ` style="${styleMap.h4}"` : '';

          code += `<h4${typeClass}${typeStyle}>${cleaned}</h4>\n`;
        } else if (["ul", "ol"].includes(tag)) {
          let additionalTab = '';

          if (wrapperMap[tag]) {
            code += wrapperMap[tag][0] + '\n';
            additionalTab = '  ';
          }

          let typeClass = classMap[tag] ? ` class="${classMap[tag]}"` : '';
          let typeStyle = styleMap[tag] ? ` style="${styleMap[tag]}"` : '';

          code += additionalTab + `<${tag}${typeClass}${typeStyle}>\n`;

          typeClass = classMap.li ? ` class="${classMap.li}"` : '';
          typeStyle = styleMap.li ? ` style="${styleMap.li}"` : '';

          el.querySelectorAll('li').forEach(li => {
            code += additionalTab + `  <li${typeClass}${typeStyle}>${cleanText(li)}</li>\n`;
          });

          code += additionalTab + `</${tag}>\n`;

          if (wrapperMap[tag]) {
            code += wrapperMap[tag][1] + '\n';
          }
        } else if (tag === 'p') {
          const cleaned = cleanText(el).replace(/^\[(Body|h2|h3|h4)\]\s*/i, '');

          const typeClass = classMap.p ? ` class="${classMap.p}"` : '';
          const typeStyle = styleMap.p ? ` style="${styleMap.p}"` : '';

          if (cleaned && !cleaned.toLowerCase().startsWith('alt-tag:')) {
            code += `<p${typeClass}${typeStyle}>${cleaned}</p>\n`;
          }
        }
      });

      const blockDiv = document.createElement('div');
      blockDiv.className = 'block';
      blockDiv.innerHTML = `
        <div class="block-title">Block ${index + 1}</div>
        <button id="copy-btn-${index + 1}" class="copy-btn" onclick="copyToClipboard('copy-btn-${index + 1}')">Copy</button>
        <pre>${escapeHTML(code.trim())}</pre>
      `;

      const outputDiv = document.getElementById('output');
      if (outputDiv) {
        outputDiv.appendChild(blockDiv);
      }
    });

    if (htmlStyleMap) {
      const blockDiv = document.createElement('div');
      blockDiv.className = 'block';
      blockDiv.innerHTML = `
        <div class="block-title">Block ${blocks.length + 1} (style block on each post)</div>
        <button id="copy-btn-${blocks.length + 1}" class="copy-btn" onclick="copyToClipboard('copy-btn-${blocks.length + 1}')">Copy</button>
        <pre>${escapeHTML(htmlStyleMap.trim())}</pre>
      `;

      const outputDiv = document.getElementById('output');
      if (outputDiv) {
        outputDiv.appendChild(blockDiv);
      }
    }

    const outputTitle = document.getElementById('output-title');
    if (outputTitle) {
      outputTitle.classList.remove('hidden');
    }

    function cleanText(el) {
      function recurse(node) {
        if (node.nodeType === Node.TEXT_NODE) {
          return cleanLabel(node.textContent);
        }

        if (node.nodeType !== Node.ELEMENT_NODE || node.outerHTML.includes('#cmnt_')) {
          return '';
        }

        const tag = node.tagName;

        if (tag === 'P' && node.textContent.trim().toLowerCase().startsWith('alt-tag:')) {
          return '';
        }

        if (tag === 'A' && !node.href.includes('#cmnt_')) {
          const href = cleanGoogleRedirect(node.href);
          const inner = [...node.childNodes].map(recurse).join('');

          if (!inner.trim()) return '';

          const typeClass = classMap.a ? ` class="${classMap.a}"` : '';
          const typeStyle = styleMap.a ? ` style="${styleMap.a}"` : '';

          try {
            const parsed = new URL(href);
            const linkHost = parsed.hostname.replace(/^www\./, '');
            const isInternal = linkHost.endsWith(internalDomain);

            const targetRel = isInternal ? '' : ' target="_blank" rel="noreferrer"';
            return `<a href="${href}"${targetRel}${typeClass}${typeStyle}>${inner}</a>`;
          } catch (e) {
            return `<a href="${href}"${typeClass}${typeStyle}>${inner}</a>`; // fallback for malformed URLs
          }
        }

        if (tag === 'I' || tag === 'EM') {
          const inner = [...node.childNodes].map(recurse).join('');
          return inner.trim() ? `<i>${inner}</i>` : '';
        }

        if (tag === 'B' || tag === 'STRONG') {
          const inner = [...node.childNodes].map(recurse).join('');
          return inner.trim() ? `<strong>${inner}</strong>` : '';
        }

        if (tag === 'SPAN' && node.classList.length) {
          const isBold = [...node.classList].some(cls => boldClassSet.has(cls));
          const inner = [...node.childNodes].map(recurse).join('');
          return isBold && inner.trim() ? `<strong>${inner}</strong>` : inner;
        }

        return [...node.childNodes].map(recurse).join('');
      }

      return recurse(el).replace(/\s+/g, ' ').trim();
    }

    function cleanLabel(text) {
      return text.replace(/^\[(Body|H1|H2|H3|H4|h1|h2|h3|h4)\]\s*/i, '');
    }

    function escapeHTML(str) {
      return str.replace(/&/g, '&amp;')
                .replace(/</g, '&lt;')
                .replace(/>/g, '&gt;');
    }

    function removeCommentContainers(root) {
      const nodesWithComments = Array.from(root.querySelectorAll('a[href*="#cmnt_"]'));
      const commentContainers = new Set();

      nodesWithComments.forEach(anchor => {
        let parent = anchor.parentElement;
        while (parent && parent !== root) {
          if (!commentContainers.has(parent)) {
            commentContainers.add(parent);
          }
          parent = parent.parentElement;
        }
      });

      // Remove only the deepest containers
      Array.from(commentContainers).forEach(container => {
        if (![...commentContainers].some(other => other !== container && other.contains(container))) {
          container.remove();
        }
      });
    }

    removeCommentContainers(doc.body);
  });
};
