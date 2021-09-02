import P from './project.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function FProject() {
  return (
    <div className={P.item}>
      <Link href="/about"><a>
      <div className={P.top}>
        <Image src="/thumb.jpg" width={750} height={421} layout='responsive' alt="Yorushika" />
        <div className={P.tags}>
          <ul>
            <li>Terjemahan</li>
            <li>Jepang</li>
            <li>Indonesia</li>
          </ul>
        </div>
      </div>
      <div className={P.bottom}>
        <div className={P.title}>
        Yorushika - Plagiarism (OFFICIAL VIDEO) Subtitle Indonesia
        </div>
      </div>
      </a></Link>
    </div>
  )
}
