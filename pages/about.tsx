import { Layout, Section } from "@components/Layout";
import Link from "next/link";
import { MotionList, MotionHyperlink } from "~/components/Motions";
import skillsList from "~lib/_data/skillsList.json";
import { socmedList } from "~lib/_data/socmedList";

interface skillsProps {
  name: string;
  value: string[];
}

export default function about() {
  return (
    <Layout title="Tentang | DhafitF" metaDesc="Tentang Dhafit Farenza aka Devzfz. Mulai dari pengenalan dan daftar social media">
      <div className="mx-5 lg:mx-auto lg:max-w-[984px]">
        <Section title="Tentang" id="about" className="pt-24 md:pt-20">
          <div className="desc">
            <p>
              Halo, sama saya Dhafit Farenza aka Devzfz. Saya seorang penerjemah, yang menerjemahkan bahasa Jepang atau Inggris ke bahasa Indonesia. Awal mula saya menjadi
              penerjemah adalah dari keinginan saya belajar bahasa Jepang. Dari keinginan tersebut, saya mencoba membuat sebuah fansub bernama{" "}
              <a href="https://www.nogisub.com/">Nogisub</a> dimana saya dapat belajar sambil membagikan hasil terjemahan saya.
            </p>
            <br />
            <p>Kali ini, saya sedang mencoba menjadi front end web developer. </p>
            <br />
            <p>
              Anda dapat mengunjungi halaman{" "}
              <Link href="/profile">
                <a>linktree</a>
              </Link>{" "}
              saya.
            </p>
          </div>
          <div className="my-8 w-full border-[1px] border-[#3d3d3d]"></div>
          <div className="skill">
            {skillsList.map((skill: skillsProps) => {
              return (
                <div className="mb-4" key={skill.name}>
                  <div className="mb-3 text-lg">{skill.name}</div>
                  <ul className="grid grid-cols-[repeat(auto-fill,_minmax(98px,_1fr))] gap-5">
                    {skill.value.map((item: string, index: number) => {
                      return <MotionList key={index} skill={item} className="flex h-8 w-24 items-center justify-center rounded-md bg-secondary text-xs tracking-widest" />;
                    })}
                  </ul>
                </div>
              );
            })}
          </div>
          <div className="my-8 w-full border-[1px] border-[#3d3d3d]"></div>
          <div className="mb-6">
            <p className="pb-4">
              Anda dapat menghubungi saya melalui email di <a href="mailto:dhafidfz@gmail.com">dhafidfz@gmail.com</a>, atau social media di bawah ini:
            </p>
            <ul className="flex flex-col gap-4 md:flex-row">
              {socmedList.map((socmed: any) => {
                return (
                  <li key={socmed.text}>
                    <MotionHyperlink {...socmed} className="flex items-center gap-3 rounded-md px-3 py-[6px] text-white" />
                  </li>
                );
              })}
            </ul>
          </div>
        </Section>
      </div>
    </Layout>
  );
}
