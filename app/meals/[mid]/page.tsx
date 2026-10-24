import { use } from "react";
type MealDetailsProps = {
  params: Promise<{ mid: string }>;
};
export default function MealDetails({ params }: MealDetailsProps) {
  const { mid } = use(params);
  return (
    <div>
      <p>Details</p>
      <h1>{mid}</h1>
    </div>
  );
}
