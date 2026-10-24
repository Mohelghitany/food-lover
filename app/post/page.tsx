import Link from "next/link";

export const Post = () => {
  return (
    <main>
      <div>Posts</div>
      <Link href={"/post/post1"}>Post 1</Link>
      <Link href={"/post/post2"}>Post 2</Link>
    </main>
  );
};

export default Post;
