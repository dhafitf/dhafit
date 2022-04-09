import { socmedList } from "~lib/_data/socmedList";

interface Props {
  href: string;
  icon: string;
}

export default function Footer() {
  return (
    <footer className="item-center flex flex-col items-center justify-center gap-3 border-2 border-cont py-6">
      <ul className="flex gap-4">
        {socmedList.map((socmed: Props) => {
          return (
            <li key={socmed.href}>
              <a href={socmed.href} className="text-lg text-white">
                {socmed.icon}
              </a>
            </li>
          );
        })}
      </ul>
      <div className="text-sm text-slate-500">© 2021 - Dhafit Farenza</div>
    </footer>
  );
}
