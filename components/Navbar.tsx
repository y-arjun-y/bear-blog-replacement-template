import Link from "next/link";

export default function Navbar() {
  return (
    <header>
      <Link href="/">
        <h1>Bear Blog Replacement Template</h1>
      </Link>
      <nav>
        <p>
          <Link href="/">Home</Link>
          <Link href="/blog/">Blog</Link>
          <Link href="/the-grizzly-bear-chill-zone/">
            The Grizzly Bear Chill Zone
          </Link>
        </p>
      </nav>
    </header>
  );
}
