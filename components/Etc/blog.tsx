import M from "./etc.module.css";
import Link from "next/link";

export default function BlogItem() {
  return (
    <div className={M.itemCont}>
      <div className={M.item}>
        <div>
          <div className={M.timestamp}>10 Oktober 2021</div>
          <Link href="/blog/21-10-10-playlist-oktober-2021">
            <a>
              <h1 className={M.title}>Playlist musik bulan Oktober 2021</h1>
              <p className={M.desc}>
                Playlist musik terbaru saya di bulan Oktober.
              </p>
            </a>
          </Link>
        </div>
        <div>
          <div className={M.timestamp}>07 September 2021</div>
          <Link href="/blog/21-09-07-new-blog">
            <a>
              <h1 className={M.title}>
                Introducing my new blog with portfolio
              </h1>
              <p className={M.desc}>
                Hai. Mau ngenalin blog sekaligus portfolio baru saya.
              </p>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
