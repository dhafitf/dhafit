import Link from "next/link";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { RiExternalLinkLine } from "react-icons/ri";
import useTranslation from "~/lib/useTranslation";

const BlogFooter = ({ githubFileLink }: { githubFileLink: string }) => {
  const { locale } = useTranslation();

  return (
    <div className="flex justify-between border-t-2 border-t-[#323538] py-6 text-sm">
      <Link href="/blog" className="flex items-center gap-1 hover:underline">
        <MdOutlineKeyboardBackspace />
        {locale["blog.footer.backToBlog"]}
      </Link>
      <a target="_blank" rel="noopener noreferrer" href={githubFileLink} className="flex items-center gap-1 hover:underline">
        {locale["blog.footer.editOnGithub"]}
        <RiExternalLinkLine />
      </a>
    </div>
  );
};

export default BlogFooter;
