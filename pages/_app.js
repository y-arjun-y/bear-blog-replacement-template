import matter from "gray-matter";
import Head from "next/head";
import Navbar from "./components/Navbar";

function BearBlogReplacementTemplate({ Component, pageProps, pages }) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:locale" content="en" />
        <meta
          name="robots"
          content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />
        <meta
          property="og:url"
          content="https://bear-blog-replacement-template-demo.vercel.app"
        />
        <meta
          property="og:site_name"
          content="Bear Blog Replacement Template Demo"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script type="module">
          import renderMathInElement from
          "https://cdn.jsdelivr.net/npm/katex@0.16.0/dist/contrib/auto-render.mjs";
          renderMathInElement(document.body);
        </script>
      </Head>
      <Navbar pages={pages} />
      <Component {...pageProps} />
    </>
  );
}

export async function getStaticProps() {
  // const files = fs.readdirSync("./blog-posts");

  // const pages = files.map((fileName) => {
  //   const slug = fileName.replace(".md", "");
  //   const readFile = fs.readFileSync(`./blog-posts/${fileName}`, "utf-8");
  //   const { data: frontmatter } = matter(readFile);

  //   return {
  //     slug,
  //     frontmatter,
  //   };
  // });

  // return {
  //   props: {
  //     pages,
  //   },
  // };
  const pages = "Hello, world!";

  return {
    props: {
      pages,
    },
  };
}

export default BearBlogReplacementTemplate;
