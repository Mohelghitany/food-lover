"use client";

export default function Error({ error }: { error: Error }) {
  return (
    <main className="error">
      <h1>An error occurred</h1>
      <p>Sorry, an error occurred while sharing the meal.</p>
      <p>{error.message}</p>
    </main>
  );
}
