import Link from "next/link";
import { useRouter } from "next/router";
import useTranslation from "~/lib/useTranslation";
import clsx from "~lib/clsx";

export default function Header() {
  const { locale, setLang } = useTranslation();

  const router = useRouter();

  const navLinks = [
    { path: "/", label: locale["header.home"] },
    { path: "/about", label: locale["header.about"] },
    { path: "/blog", label: "Blog" },
    { path: "/project", label: locale["header.project"] },
    { path: "/dashboard", label: "Dashboard" },
  ];

  const localeClassName = (lang: string) => (locale.lang === lang ? "text-white" : "text-gray");

  return (
    <header className="z-20 w-full pt-4 pb-10 md:pb-20">
      <div className="mx-5 flex flex-col items-center justify-between gap-1 py-3 md:mx-auto md:max-w-[728px] md:flex-row">
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
        <div className="text-sm">
          <button className={clsx("hover:underline", localeClassName("en"))} onClick={() => setLang("en")}>
            EN
          </button>
          <span className="px-2">|</span>
          <button className={clsx("hover:underline", localeClassName("id"))} onClick={() => setLang("id")}>
            ID
          </button>
        </div>
      </div>
    </header>
  );
}
