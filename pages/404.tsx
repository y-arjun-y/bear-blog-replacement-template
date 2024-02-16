import Link from "next/link";

export default function Custom404() {
  return (
    <>
      <h3>404 - Sorry, but this page does not exist.</h3>
      <h5></h5>
      <h6>
        Click <Link href="/">here</Link> to return back home.
      </h6>
    </>
  );
}
