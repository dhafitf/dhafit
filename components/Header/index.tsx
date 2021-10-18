import Link from "next/link";
import H from "./header.module.css";

export default function Header() {
  return (
    <header className={H.header}>
      <div className={H.display}>
        <span>
          <Link href="/">
            <a>DhafitF</a>
          </Link>
        </span>
        <nav>
          <ul className={H.list}>
            <li className={H.item}>
              <Link href="/about">
                <a>Tentang</a>
              </Link>
            </li>
            <li className={H.item}>
              <Link href="/blog">
                <a>Blog</a>
              </Link>
            </li>
            <li className={H.item}>
              <Link href="/project">
                <a>Projects</a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
