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
  const files = fs.readdirSync("./blog-posts");
  const paths = files.map((fileName) => ({
    params: {
      post: fileName.replace(".md", ""),
    },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { post } }) {
  const fileName = fs.readFileSync(`./blog-posts/${post}.md`, "utf-8");
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
        <h1>{frontmatter.title}</h1>
        <p>{frontmatter.publish_date}</p>
        <div dangerouslySetInnerHTML={{ __html: md.render(content) }} />
      </div>
    </>
  );
}
