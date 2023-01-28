import type { NextPage } from "next";
import { Layout, Section } from "@components/Layout";
import { socmedList } from "~lib/_data/socmedList";
import TechSection from "@section/techSection";
import useTranslation from "~/lib/useTranslation";

const About: NextPage = () => {
  const { locale } = useTranslation();
  const languageSkills = locale["about.languageSkills"] || [];

  return (
    <Layout title={`${locale.about} - Dhafit Farenza`}>
      <div className="pb-10">
        <h1 className="pb-4 text-4xl font-bold">{locale.about}</h1>
        <div className="desc">
          <p dangerouslySetInnerHTML={{ __html: locale["about.description"].join(" ") }} />
        </div>
        <div className="my-8 w-full border-[1px] border-[#3d3d3d]"></div>
        <Section id="language" title={locale["about.language"]}>
          <ul className="grid grid-cols-[repeat(auto-fill,_minmax(98px,_1fr))] gap-3">
            {languageSkills.map((item: string, index: number) => {
              return (
                <li
                  key={index}
                  className="flex h-8 w-24 items-center justify-center rounded-md bg-lavender text-xs tracking-widest"
                >
                  {item}
                </li>
              );
            })}
          </ul>
        </Section>
        <TechSection />
        <div className="mb-8 w-full border-[1px] border-[#3d3d3d]"></div>
        <div className="mb-6">
          <p className="pb-4" dangerouslySetInnerHTML={{ __html: locale["about.footer"].join(" ") }} />
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
};

export default About;
