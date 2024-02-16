import fs from "fs";
import matter from "gray-matter";
import Head from "next/head";
import hljs from "highlight.js";
import markdownit from "markdown-it";
import markdownitfootnote from "markdown-it-footnote";

const md = markdownit({
  html: true,

  highlight: function (str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      return (
        '<pre class="hljs"><code>' +
        hljs.highlight(str, { language: lang, ignoreIllegals: true }).value +
        "</code></pre>"
      );
    }

    return (
      '<pre class="hljs"><code>' + md.utils.escapeHtml(str) + "</code></pre>"
    );
  },
}).use(markdownitfootnote);

export async function getStaticPaths() {
  const files = fs.readdirSync("./pages-md");
  const paths = files.map((fileName) => ({
    params: {
      page: fileName.replace(".md", ""),
    },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { page } }) {
  const fileName = fs.readFileSync(`./pages-md/${page}.md`, "utf-8");
  const { data: frontmatter, content } = matter(fileName);
  return {
    props: {
      frontmatter,
      content,
    },
  };
}

export default function Post({ frontmatter, content }) {
  return (
    <>
      <Head>
        <meta property="og:title" content={frontmatter.meta_description} />
        <meta property="og:image" content={frontmatter.meta_image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={frontmatter.meta_description} />
        <title>{frontmatter.title}</title>
      </Head>
      <div>
        <div dangerouslySetInnerHTML={{ __html: md.render(content) }} />
      </div>
    </>
  );
}
