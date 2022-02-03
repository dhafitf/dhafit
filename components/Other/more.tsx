import Link from "next/link";
import moreStyle from "~/styles/etc.module.css";
import { LoadMoreProps } from "~/types/components";

const More = ({ name, href }: LoadMoreProps) => {
  return (
    <div className={moreStyle.view_more}>
      <Link href={href}>
        <a>Lihat semua {name}</a>
      </Link>
    </div>
  );
};

export default More;
