import Link from "next/link";
export default function Home() {
  return (
    <main>
      <h1 style={{ color: "white", textAlign: "center" }}>
        Time to get started!
      </h1>
      <div className="flex h-screen items-center justify-center">
        <Link href={"/meals"}>Meals</Link>
      </div>
    </main>
  );
}
