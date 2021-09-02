import Layout from "../../components/Layout"
import A from './about.module.css'
import Link from 'next/link'

export default function about() {
    return (
    <Layout title="Tentang | DhafitF">
        <div className="container">
            <div className="top">
                <h1 className="pageTitle">Tentang</h1>
                <h3 className="subtitle">Dhafit Farenza alias Devzfz</h3>
            </div>
            <div className="desc">
                <p>Saya seorang penerjemah, yang menerjemahkan bahasa Jepang atau Inggris ke bahasa Indonesia. Awal mula saya menjadi penerjemah adalah dari keinginan saya belajar bahasa Jepang. Dari keinginan tersebut, saya mencoba membuat sebuah fansub bernama <a href="https://www.nogisub.com/">Nogisub</a> dimana saya dapat belajar sambil membagikan hasil terjemahan saya.</p>
                <br />
                <p>Kali ini, saya sedang mencoba menjadi front end web developer. </p>
            </div>
            <div className="separator"></div>
            <div className="skill">
                <h2 className="title">Skill</h2>
                <div className={A.skillCont}>
                    <div className={A.title}>Bahasa</div>
                    <div className={A.item}>
                        <ul>
                            <li>Indonesia</li>
                            <li>Jepang</li>
                            <li>Inggris</li>
                        </ul>
                    </div>
                </div>
                <div className={A.skillCont}>
                    <div className={A.title}>Frontend web developer</div>
                    <div className={A.item}>
                        <ul>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>Javascript</li>
                            <li>React JS</li>
                            <li>Next JS</li>
                            <li>Typescript</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="separator"></div>
            <div className={A.kontak}>
                <h2 className="title">Kontak</h2>
                <p><Link href="/contact"><a>Hubungi saya</a></Link></p>
            </div>
        </div>
    </Layout>
    )
}
