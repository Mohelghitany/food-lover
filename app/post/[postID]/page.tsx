import { use } from "react";
export default function PageDetails({
  params,
}: {
  params: Promise<{ postID: string }>;
}) {
  const { postID } = use(params);
  return (
    <main>
      <p>Post Details</p>
      <h1>{postID}</h1>
    </main>
  );
}
