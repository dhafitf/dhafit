import Link from "next/link";
import { LoadMoreProps } from "~/types/components";

const MoreButton = ({ name, href }: LoadMoreProps) => {
  return (
    <div className="text-center font-medium">
      <Link href={href}>
        <a>Lihat semua {name}</a>
      </Link>
    </div>
  );
};

export default MoreButton;
