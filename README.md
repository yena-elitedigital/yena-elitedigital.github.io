# yena-elitedigital.github.io

## Installation

### Install Jekyll

If Jekyll is not installed on the local environment, follow the [installation documentation](https://jekyllrb.com/docs/installation/).

### Serve the Website

Jekyll uses [Bundler](https://bundler.io/) to run the project ([Using Jekyll with Bundler](https://jekyllrb.com/tutorials/using-jekyll-with-bundler/)).

Install the dependencies specified in the Gemfile. This creates `Gemfile.lock`.
- If Gemfile.lock already exists, only the gem will be updated.
- If the dependency of new version of the gem is conflicted with any other gem, the current gem won’t be updated.

```console
$ bundle
# or `bundle install`
```

Run the exact jekyll server version that is specified in your `Gemfile` or `Gemfile.lock`.

```console
$ bundle exec jekyll serve
```

## Project Structure

```
.
├── jekyll-hello-world    # Practice jekyll
├── personal-page         # Jekyll version of the website
│   ├── _coffee           # .md files for coffee information
│   ├── _data_
│   ├── _includes
│   ├── _layouts
│   ├── _sass             # Global .scss files
│   ├── assets
│   │   ├── css           # .css and .scss files
│   │   ├── js            # JavaScript files
│   │   └── react         # React components
│   ├── _config.yml
│   ├── .babelrc
│   ├── Gemfile
│   ├── index.html
│   └── package.json
└── personal-page-static  # Static version of the website
```
