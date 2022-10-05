import { LocaleTypes } from "~/types/locale";
import { PostProps } from "~/types/posts";

const filteredLocalePosts = (posts: PostProps[], locale: LocaleTypes) => {
  const englishPosts = posts.filter((post) => !post.permalink.startsWith("id-"));
  const bahasaPosts = posts.filter((post) => post.permalink.startsWith("id-"));
  const currentPosts = locale.lang === "id" ? bahasaPosts : englishPosts;
  return currentPosts;
};

export default filteredLocalePosts;
