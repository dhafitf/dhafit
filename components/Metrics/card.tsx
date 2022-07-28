import { MetricCardProps } from "~/types/components";
import { BiLinkExternal } from "react-icons/bi";

export default function MetricCard({ href, title, value }: MetricCardProps) {
  return (
    <div className="rounded-md border border-gray p-4">
      <a target="_blank" rel="noopener noreferrer" href={href} className="inline-flex items-center gap-1 text-white hover:underline">
        {title}
        <BiLinkExternal />
      </a>
      <p className="spacing-sm mt-2 text-2xl font-bold">{value > 0 ? value.toLocaleString() : "-"}</p>
    </div>
  );
}
