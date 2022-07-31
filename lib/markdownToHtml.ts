import markdownit from "markdown-it";
import { markdownItShikiTwoslashSetup } from "markdown-it-shiki-twoslash";
import markdownItAnchor from "markdown-it-anchor";

export default async function markdownToHtml(markdown?: string) {
  const md = markdownit({
    html: true,
  });

  const shiki = await markdownItShikiTwoslashSetup({
    theme: "github-dark",
  });

  md.use(shiki).use(markdownItAnchor, {
    permalink: true,
    tabIndex: false,
    permalinkBefore: false,
    permalinkSymbol: "",
    permalinkClass: "markdownAnchor",
    permalinkSpace: true,
  });

  if (markdown) {
    const result = md.render(markdown);
    return result;
  }

  return "";
}
