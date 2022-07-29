import markdownit from "markdown-it";
import { markdownItShikiTwoslashSetup } from "markdown-it-shiki-twoslash";

export default async function markdownToHtml(markdown?: string) {
  const md = markdownit({
    html: true,
  });

  const shiki = await markdownItShikiTwoslashSetup({
    theme: "github-dark",
  });

  md.use(shiki);

  if (markdown) {
    const result = md.render(markdown);
    return result;
  }

  return "";
}
