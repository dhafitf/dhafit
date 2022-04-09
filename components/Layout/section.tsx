import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  title: string;
}

export default function Section({ children, className, id, title }: SectionProps) {
  return (
    <section className={className} id={id}>
      <h2 className="text-xl font-semibold md:text-2xl">{title}</h2>
      <div className="mt-2 mb-6 h-[2px] rounded bg-gray-700">
        <div className="h-full w-28 bg-main"></div>
      </div>
      {children}
    </section>
  );
}
