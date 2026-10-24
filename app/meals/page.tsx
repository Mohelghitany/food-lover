import Link from "next/link";

export default function Meals() {
  return (
    <>
      <div>
        <Link href={"/community"}>Community</Link>
      </div>
      <div>
        Meals
        <p>
          <Link href={"meals/share"}>Share</Link>
        </p>
        <p>
          <Link href={"meals/87292932"}>Details</Link>
        </p>
      </div>
    </>
  );
}
