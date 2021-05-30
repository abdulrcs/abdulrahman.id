const composePlugins = require('next-compose-plugins')
const mdxEnhanced = require('next-mdx-enhanced')
const mdxPrism = require('mdx-prism')

module.exports = composePlugins([
  mdxEnhanced({
    layoutPath: './templates',
    remarkPlugins: [
      require('remark-autolink-headings'),
      require('remark-slug'),
      require('remark-code-titles'),
    ],
    rehypePlugins: [mdxPrism],
  }),
])
