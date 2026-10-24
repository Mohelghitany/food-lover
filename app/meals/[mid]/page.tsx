import { Suspense } from "react";

type MealDetailsProps = {
  params: Promise<{ mid: string }>;
};

export default function Page({ params }: MealDetailsProps) {
  return (
    <Suspense fallback={<p>Loading meal details...</p>}>
      <MealDetails params={params} />
    </Suspense>
  );
}

async function MealDetails({ params }: MealDetailsProps) {
  const { mid } = await params;

  return (
    <div>
      <p>Meal ID: {mid}</p>
    </div>
  );
}
