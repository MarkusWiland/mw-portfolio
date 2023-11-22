import { allPosts, Post as PostType } from ".contentlayer/generated";

export default async function Post({ params }) {
  const post = allPosts.find((post) => post.slug === params.slug);
  console.log("post", post);
  if (!post) {
    console.log("not found");
  }
}
