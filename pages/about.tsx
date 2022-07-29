import { Layout, Section } from "@components/Layout";
import Link from "next/link";
import { socmedList } from "~lib/_data/socmedList";
import { languageSkills } from "~/lib/_data/skillLists";
import TechSection from "@section/techSection";

export default function about() {
  return (
    <Layout title="Tentang | DhafitF" metaDesc="Tentang Dhafit Farenza aka Devzfz. Mulai dari pengenalan dan daftar social media">
      <div className="pb-10">
        <h1 className="pb-4 text-4xl font-bold">Tentang</h1>
        <div className="desc">
          <p>
            Halo, saya Dhafit Farenza atau juga dikenal sebagai Devzfz. Saya seorang penerjemah bahasa Jepang dan Inggris. Awal mula saya menjadi penerjemah adalah dari keinginan
            saya belajar bahasa Jepang. Dari keinginan tersebut, saya mencoba membuat sebuah fansub bernama{" "}
            <a className="hover:underline" target="_blank" rel="noopener noreferrer" href="https://www.nogisub.com/">
              Nogisub
            </a>{" "}
            dimana saya dapat belajar sambil membagikan hasil terjemahan saya.
          </p>
          <br />
          <p>Saya juga seorang fullstack web developer. Saya mulai belajar pemrograman sejak masih SMP, namun mulai serius menekuninya sejak lulus SMK. </p>
          <br />
          <p>
            Anda juga dapat mengunjungi halaman{" "}
            <Link href="/profile">
              <a className="hover:underline">linktree</a>
            </Link>{" "}
            saya.
          </p>
        </div>
        <div className="my-8 w-full border-[1px] border-[#3d3d3d]"></div>
        <Section id="language" title="Bahasa">
          <ul className="grid grid-cols-[repeat(auto-fill,_minmax(98px,_1fr))] gap-3">
            {languageSkills.map((item: string, index: number) => {
              return (
                <li key={index} className="flex h-8 w-24 items-center justify-center rounded-md bg-lavender text-xs tracking-widest">
                  {item}
                </li>
              );
            })}
          </ul>
        </Section>
        <TechSection />
        <div className="mb-8 w-full border-[1px] border-[#3d3d3d]"></div>
        <div className="mb-6">
          <p className="pb-4">
            Anda dapat menghubungi saya melalui email di{" "}
            <a className="hover:underline" href="mailto:dhafidfz@gmail.com">
              dhafidfz@gmail.com
            </a>
            , atau social media di bawah ini:
          </p>
          <ul className="flex flex-col gap-4 md:flex-row">
            {socmedList.map((socmed: any) => {
              return (
                <li key={socmed.text}>
                  <a
                    href={socmed.href}
                    style={{ background: `${socmed.background}` }}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="flex items-center gap-3 rounded-md px-3 py-[6px] text-white"
                  >
                    {socmed.icon}
                    {socmed.text}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </Layout>
  );
}
