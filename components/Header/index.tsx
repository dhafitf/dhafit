import Link from "next/link";
import navLinks from "~lib/_data/navLinks.json";
import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();
  return (
    <header className="fixed z-20 w-full bg-[#27292ceb] backdrop-blur">
      <div className="mx-5 flex flex-col items-center justify-between py-3 md:flex-row  lg:mx-auto lg:max-w-[984px]">
        <Link href="/">
          <a className="pb-1 font-bold text-white">Dhafit Farenza</a>
        </Link>
        <nav>
          <ul className="flex items-center justify-center gap-4">
            {navLinks.map((link) => {
              return (
                <li key={link.path} className="text-sm">
                  <Link href={link.path}>
                    <a className={router.pathname === `${link.path}` ? "text-main" : "text-white hover:text-main"}>{link.label}</a>
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
