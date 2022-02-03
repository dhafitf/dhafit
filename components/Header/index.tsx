import Link from "next/link";
import headerStyle from "~/styles/header.module.css";

export default function Header() {
  return (
    <header className={headerStyle.header}>
      <div className={headerStyle.display}>
        <span>
          <Link href="/">
            <a>DhafitF</a>
          </Link>
        </span>
        <nav>
          <ul className={headerStyle.list}>
            <li className={headerStyle.item}>
              <Link href="/about">
                <a>Tentang</a>
              </Link>
            </li>
            <li className={headerStyle.item}>
              <Link href="/blog">
                <a>Blog</a>
              </Link>
            </li>
            <li className={headerStyle.item}>
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
