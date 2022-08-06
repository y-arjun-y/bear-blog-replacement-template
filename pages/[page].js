import fs from "fs";
import matter from "gray-matter";
import Head from "next/head";
const md = require("markdown-it")({
  html: true,
}).use(require("markdown-it-footnote"));

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
