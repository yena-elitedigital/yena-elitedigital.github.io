const typeHtmlStyleMap = {
  default: '',
  type1: type1HtmlStyle,
  type2: '',
  type3: type3HtmlStyle,
};

const typeBlockDividerMap = {
  default: '',
  type1: 'img',
  type2: '',
  type3: '',
};

// Defines if external links should be opened in a new tab
const typeAnchorTagMap = {
  default: true,
  type1: false,
};

const typeWrapperMap = {
  default: {
    img: '',
    h2: '',
    h3: '',
    h4: '',
    ul: '',
    ol: '',
    li: '',
    p: ''
  },
  type1: {
    img: '',
    h2: '',
    h3: '',
    h4: '',
    ul: ['<div style="margin-bottom:10px;margin-left:20px;margin-top:10px;">', '</div>'],
    ol: ['<div style="margin-bottom:10px;margin-left:20px;margin-top:10px;">', '</div>'],
    li: '',
    p: ''
  },
};

const typeClassMap = {
  default: {
    img: '',
    h2: '',
    h3: '',
    h4: '',
    ul: '',
    ol: '',
    li: '',
    p: '',
    a: '',
  },
  type1: {
    img: '',
    h2: 'sect-ttl mar-b1',
    h3: 'sect-ttl headthree',
    h4: '',
    ul: '',
    ol: '',
    li: '',
    p: '',
    a: '',
  },
  type2: {
    img: '',
    h2: '',
    h3: '',
    h4: '',
    ul: '',
    ol: '',
    li: '',
    p: '',
    a: '',
  },
  type3: {
    img: 'aligncenter wp-image-2343',
    h2: '',
    h3: '',
    h4: '',
    ul: '',
    ol: '',
    li: '',
    p: '',
    a: '',
  },
  type4: {
    img: 'aligncenter wp-image-9367 size-large',
    h2: '',
    h3: '',
    h4: '',
    ul: '',
    ol: '',
    li: '',
    p: '',
    a: '',
  },
};

const typeStyleMap = {
  default: {
    img: '',
    h2: '',
    h3: '',
    h4: '',
    ul: '',
    ol: '',
    li: '',
    p: '',
    a: '',
  },
  type1: {
    img: '',
    h2: '',
    h3: '',
    h4: '',
    ul: '',
    ol: '',
    li: 'margin-bottom: 10px',
    p: '',
    a: '',
  },
  type2: {
    img: 'margin: 20px auto',
    h2: 'margin: 30px 0px auto; font-size: 30px',
    h3: 'margin: 30px 0px auto; display: block; font-size: 22px',
    h4: '',
    ul: 'font-size: 24px; font-weight: 300; list-style: disc; margin-left: 26px',
    ol: 'font-size: 24px; font-weight: 300; list-style: decimal; margin-left: 26px',
    li: 'margin-bottom: 10px;',
    p: '',
    a: '',
  },
  type3: {
    img: '',
    h2: 'margin-top: 35px',
    h3: '',
    h4: '',
    ul: '',
    ol: '',
    li: '',
    p: '',
    a: 'color: -webkit-link',
  },
  type5: {
    img: 'width: 75%;',
    h2: 'text-align: left',
    h3: '',
    h4: '',
    ul: 'margin: 16px 0 0',
    ol: '',
    li: 'list-style: unset; color: #232323;',
    p: '',
    a: '',
  },
};

const typeNewlineTopMap = {
  default: {
    img: 0,
    h2: 0,
    h3: 0,
    h4: 0,
    ul: 0,
    ol: 0,
    li: 0,
    p: 0
  },
  type1: {
    img: 0,
    h2: 0,
    h3: 0,
    h4: 0,
    ul: 0,
    ol: 0,
    li: 0,
    p: 0
  },
  type2: {
    img: 0,
    h2: 0,
    h3: 0,
    h4: 0,
    ul: 0,
    ol: 0,
    li: 0,
    p: 0
  },
};
