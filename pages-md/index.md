---
title: Bear Blog Replacement Template
meta_description: Welcome to the demo for the  Bear Blog Replacement Template!
---

## Welcome!

This is a demo of the [Bear Blog Replacement Template](https://github.com/y-arjun-y/bear-blog-replacement-template). It's a [Markdown](https://www.markdownguide.org/) blog in [Next.js](https://nextjs.org/) that allows you to write blog posts and create pages using the awesomeness that is Markdown.

This template comes _most_ of the features that [Bear Blog](https://bearblog.dev) comes with as well as:

- [LaTeX support with KaTeX](/blog/markdown-latex-demo).
- Greater customizability with meta tags/SEO.
- [Code highlighting](/blog/markdown-latex-demo).
- ...and the general flexibility that comes with Next.js!

Remember, **this is a template**. It's _your code_, _your words_ and _your data_. Period.

### How to get started

1. Clone [this repository](https://github.com/y-arjun-y/bear-blog-replacement-template) with:

```
git clone https://github.com/y-arjun-y/bear-blog-replacement-template
```

2. Write your blog posts in `blog-posts` and set-up your home page by editing the `index.md` file. The available front matter options are `title`, `publish_date`, `meta_description` and `meta_image`.

3. Optionally, you can create pages by adding Markdown files in `pages-md`. Be sure to update `components/Navbar.js`!

4. Style your website with a [classless CSS](https://css-tricks.com/no-class-css-frameworks/) link in `_document.js` under `rel="stylesheet"`. You can also change the code highlighting by going to `_app.js` and changing `import "highlight.js/styles/monokai-sublime.css";` to [whatever you like](https://highlightjs.org/static/demo/)!

5. Note that some components/pages are not linked to a Markdown file, these are the custom `404.js` page, `blog.js`, `_document.js`, `_app.js`, `[post].js`, `[page].js` and `components/Navbar.js`. You'll have to change the code of these files if you want to customize them or add meta tags.

6. Deploy your beautiful new website, perhaps with [Vercel](https://vercel.com/) or [Netlify](https://netlify.com).

Remember, if you're unhappy with anything, **change the code!**
