import Head from "next/head";
import Navbar from "/components/Navbar";
{
  /* Change "highlight.js/styles/monokai-sublime.css" to any highlight.js theme you want! */
}
import "highlight.js/styles/monokai-sublime.css";

function BearBlogReplacementTemplate({ Component, pageProps }) {
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
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

export default BearBlogReplacementTemplate;
