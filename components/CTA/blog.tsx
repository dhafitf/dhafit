import M from './etc.module.css'
import Link from 'next/link'

export default function BlogItem() {
  return (
    <div className={M.itemCont}>
      <div className={M.timestamp}>
        29 Agustus 2021
      </div>
      <div className={M.item}>
        <Link href="/about"><a>
        <h1 className={M.title}>How I find my daily music playlist. And damn</h1>
        <p className={M.desc}>Red Velvet&apos;s Summer Mini Album &quot;The Red Summer&quot; has been released. </p>
        </a></Link>
      </div>
    </div>
  )
}
