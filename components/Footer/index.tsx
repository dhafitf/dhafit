import { socmedList } from "~lib/_data/socmedList";

interface Props {
  href: string;
  icon: string;
}

export default function Footer() {
  return (
    <footer className="item-center flex flex-col items-center justify-center gap-3 border-y-2 border-y-[#323538] py-6">
      <ul className="flex gap-4">
        {socmedList.map((socmed: Props) => {
          return (
            <li key={socmed.href}>
              <a href={socmed.href} target="_blank" rel="noopener noreferrer" className="text-lg text-white hover:text-cyan">
                {socmed.icon}
              </a>
            </li>
          );
        })}
      </ul>
      <div className="text-sm text-slate-500">
        © 2021{" - "}
        <a className="text-slate-500 hover:text-cyan" href="https://github.com/dhafitf/">
          Dhafit Farenza
        </a>
      </div>
    </footer>
  );
}
