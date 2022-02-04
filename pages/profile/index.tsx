import Layout from "@components/Layout";
import Image from "next/image";
import profileStyle from "~/styles/link.module.css";
import { FaInstagram, FaTwitter, FaFacebookF, FaBloggerB, FaYoutube, FaGithub } from "react-icons/fa";
import { LinktreeItem } from "@components/Other";

export default function profile() {
  return (
    <Layout title="Profile | DhafitF" metaDesc="Linktree dari Dhafit Farenza">
      <div className={profileStyle.container}>
        <div className={profileStyle.top}>
          <div className="pp">
            <Image src="/profile.png" width={120} height={120} alt="Dhafit" />
          </div>
          <div className={profileStyle.nama}>Dhafit Farenza</div>
          <p>Translator & Frontend web developer</p>
        </div>
        <div className={profileStyle.project}>
          <div className={profileStyle.item}>
            <div className={profileStyle.jumlah}>3+</div>
            <div className={profileStyle.desc}>Running project</div>
          </div>
          <div className={profileStyle.item}>
            <div className={profileStyle.jumlah}>100+</div>
            <div className={profileStyle.desc}>Finished project</div>
          </div>
          <div className={profileStyle.item}>
            <div className={profileStyle.jumlah}>110+</div>
            <div className={profileStyle.desc}>Total project</div>
          </div>
        </div>
        <div className={profileStyle.list}>
          <LinktreeItem href="https://twitter.com/DhafitF" text="Twitter" icon={<FaTwitter />} />
          <LinktreeItem
            href="https://trakteer.id/dhafid"
            text="Trakteer"
            icon={<Image src="/assets/icon/lines-trakteer-icon.png" alt="Trakteer logo" width="100%" height="100%" />}
          />
          <LinktreeItem href="https://www.instagram.com/dhafitf" text="Instagram" icon={<FaInstagram />} />
          <LinktreeItem href="https://www.nogisub.com/" text="Fansub" icon={<FaBloggerB />} />
          <LinktreeItem href="https://www.facebook.com/dhafid.farenza" text="Facebook" icon={<FaFacebookF />} />
          <LinktreeItem href="https://github.com/dhafitf" text="Github" icon={<FaGithub />} />
          <LinktreeItem href="https://www.youtube.com/c/dhafitfarenza" text="Youtube" icon={<FaYoutube />} />
        </div>
      </div>
    </Layout>
  );
}
