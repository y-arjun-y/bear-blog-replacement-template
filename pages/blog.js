import fs from "fs";
import matter from "gray-matter";
import Head from "next/head";

export async function getStaticProps() {
  let files = fs.readdirSync("./blog-posts");

  files = files.filter(function (item) {
    return item !== "drafts";
  });

  const posts = files.map((fileName) => {
    const slug = fileName.replace(".md", "");
    const readFile = fs.readFileSync(`./blog-posts/${fileName}`, "utf-8");
    const { data: frontmatter } = matter(readFile);

    return {
      slug,
      frontmatter,
    };
  });

  return {
    props: {
      posts,
    },
  };
}

export default function Blog({ posts }) {
  posts.sort((a, b) => {
    return (
      new Date(b.frontmatter.publish_date) -
      new Date(a.frontmatter.publish_date)
    );
  });

  return (
    <>
      <Head>
        <meta property="og:title" content="Welcome to an organizational wiki of Owen Dobson's life." />
        <meta
          property="og:image"
          content="https://lh3.google.com/u/0/d/10qRLt5785FRn6IBo-LaDxcz3dhfjYtaK=w2880-h1528-iv1"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Welcome to an organizational wiki of Owen Dobson's life." />
        <title>Blog</title>
      </Head>
      <ul>
        {posts.map(({ slug, frontmatter }) => (
          <li key={slug}>
            <span style={{ display: "inline" }}>
              {frontmatter.publish_date && frontmatter.publish_date.substring(0, 12)}
              <a href={`/blog/${slug}`}>{frontmatter.title}</a>
            </span>
          </li>
        ))}
      </ul>
    </>
  );
}
