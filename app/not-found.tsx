import Link from "next/link";

export default function NotFound() {
  return (
    <main className="not-found">
      <div className="wrap">
        <div className="inspector not-found__panel">
          <div className="inspector__bar">
            <span className="inspector__method">GET</span>
            <span className="inspector__path">this page</span>
            <span className="inspector__status is-error">404 Not Found</span>
          </div>
          <div className="inspector__panel">
            <p>There is nothing at this address. The link may be old or mistyped.</p>
          </div>
        </div>
        <Link className="btn btn--solid" href="/">
          Go to the homepage
        </Link>
      </div>
    </main>
  );
}
