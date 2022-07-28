import { SectionProps } from "~/types/components";
import clsx from "~lib/clsx";

export default function Section({ children, className, id, title }: SectionProps) {
  return (
    <section className={clsx("pb-12", className)} id={id}>
      <h2 className="pb-6 text-2xl font-bold">{title}</h2>
      {children}
    </section>
  );
}
