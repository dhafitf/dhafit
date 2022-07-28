import Link from "next/link";
import navLinks from "~lib/_data/navLinks.json";
import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();
  return (
    <header className="z-20 w-full pt-4 pb-10 md:pb-20">
      <div className="mx-5 flex flex-col items-center justify-between gap-1 py-3 md:mx-auto md:max-w-3xl md:flex-row">
        <nav>
          <ul className="flex items-center justify-center gap-4">
            {navLinks.map((link) => {
              return (
                <li key={link.path}>
                  <Link href={link.path}>
                    <a className={router.pathname === `${link.path}` ? "font-semibold text-white" : "text-gray hover:text-white"}>{link.label}</a>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
