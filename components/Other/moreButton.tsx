import Link from "next/link";
import { LoadMoreProps } from "~/types/components";
import clsx from "~/lib/clsx";
import { FaLongArrowAltRight } from "react-icons/fa";

const MoreButton = ({ name, href, className }: LoadMoreProps) => {
  return (
    <div className={clsx("font-medium ", className)}>
      <Link href={href}>
        <a className="inline-flex items-center gap-2 text-gray transition-colors hover:text-cyan">
          Lihat semua {name} <FaLongArrowAltRight className="text-lg" />
        </a>
      </Link>
    </div>
  );
};

export default MoreButton;
