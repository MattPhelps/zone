import { redirect, notFound } from "next/navigation";

// Clean redirect map for YouTube slugs
const redirectMap: Record<string, string> = {
  a: "/?utm_source=youtube&utm_campaign=tighten_your_jawline_mpr",
  b: "/?utm_source=youtube&utm_campaign=one_exercise_unlocks_mewing",
  c: "/?utm_source=youtube&utm_campaign=debloat_your_face",
  d: "/?utm_source=youtube&utm_campaign=get_a_deep_voice",
  e: "/?utm_source=youtube&utm_campaign=fix_asymmetrical_face_and_jaw",
  f: "/?utm_source=youtube&utm_campaign=how_to_get_a_chiseled_jawline",
  g: "/?utm_source=youtube&utm_campaign=10_mewing_mistakes_uglier",
  h: "/?utm_source=youtube&utm_campaign=how_to_mew_in_5_steps",
  i: "/?utm_source=youtube&utm_campaign=how_to_do_mewing_tongue_posture",
  j: "/?utm_source=youtube&utm_campaign=2_ways_to_know_your_mewing_correctly",
  k: "/?utm_source=youtube&utm_campaign=daily_routine_get_you_lean",
};

// ✅ Do not annotate with a custom `PageProps` type.
// ✅ Let Next.js infer the correct types.
export default function Page({ params }: { params: { slug: string } }) {
  const dest = redirectMap[params.slug];

  if (!dest) {
    notFound(); // Optional: or redirect("/")
  }

  redirect(dest);
}
