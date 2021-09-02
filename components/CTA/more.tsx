import Link from 'next/link'
import M from './etc.module.css'
import { IoIosArrowDropright } from "react-icons/io";

interface props {
  name: string;
}

const More = ({name}: props) => {
  return (
    <div className={M.view_more}>
      <Link href="/blog"><a>Lihat semua {name}</a></Link>
    </div>
  )
}

export default More
