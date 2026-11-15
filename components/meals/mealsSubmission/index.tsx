export default function MealsSubmission({
  isPending,
}: {
  isPending: boolean;
}) {
  return (
    <button type="submit" disabled={isPending}>
      {isPending ? "Sharing..." : "Share Meal"}
    </button>
  );
}
