import Link from "next/link";

export function Navigation(): JSX.Element {
  return (
    <nav className="my-4">
      <ul className="flex flex-row justify-center space-x-4">
        <li>
          <Link href="/">
            <a href="/" className="font-bold">
              Home
            </a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a href="/about" className="font-bold">
              About
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
