import { Layout } from "@components/Layout";
import Image from "next/image";
import { LinktreeItem } from "@components/Other";
import { linktreeList } from "~/lib/_data/linktreeList";

export default function profile() {
  return (
    <Layout title="Profile | DhafitF" metaDesc="Linktree dari Dhafit Farenza">
      <div className="m-auto my-8 max-w-[335px] pt-20">
        <div className="flex flex-col content-center items-center justify-center">
          <div id="profile-picture">
            <Image src="/profile.png" width={120} height={120} alt="Dhafit" />
          </div>
          <div className="pb-1 text-2xl font-bold">Dhafit Farenza</div>
          <p>Translator & Frontend web developer</p>
        </div>
        <div className="mt-6 flex justify-between gap-1">
          <div className="flex h-16 w-[108px] flex-col content-center items-center justify-center rounded-md bg-secondary">
            <div className="text-lg font-bold">3+</div>
            <div className="text-xs">Running project</div>
          </div>
          <div className="flex h-16 w-[108px] flex-col content-center items-center justify-center rounded-md bg-secondary">
            <div className="text-lg font-bold">100+</div>
            <div className="text-xs">Finished project</div>
          </div>
          <div className="flex h-16 w-[108px] flex-col content-center items-center justify-center rounded-md bg-secondary">
            <div className="text-lg font-bold">110+</div>
            <div className="text-xs">Total project</div>
          </div>
        </div>
        <div className="linktreeIcon mt-8 grid grid-cols-2 gap-5">
          {linktreeList.map((linktree) => {
            return <LinktreeItem key={linktree.href} {...linktree} />;
          })}
        </div>
      </div>
    </Layout>
  );
}
