import Link from "next/link";

export default function NotFound() {
  return <main className="not-found container"><p className="eyebrow">404 / OFF THE MAP</p><h1>A little off course.</h1><p>This page doesn’t exist. Let’s get you back to the work.</p><Link href="/" className="button button-primary">Back to the portfolio</Link></main>;
}
