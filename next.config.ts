import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/a",
        destination: "/?utm_source=youtube&utm_campaign=tighten_your_jawline_mpr",
        permanent: true,
      },
      {
        source: "/b",
        destination: "/?utm_source=youtube&utm_campaign=one_exercise_unlocks_mewing",
        permanent: true,
      },
      {
        source: "/c",
        destination: "/?utm_source=youtube&utm_campaign=debloat_your_face",
        permanent: true,
      },
      {
        source: "/d",
        destination: "/?utm_source=youtube&utm_campaign=get_a_deep_voice",
        permanent: true,
      },
      {
        source: "/e",
        destination: "/?utm_source=youtube&utm_campaign=fix_asymmetrical_face_and_jaw",
        permanent: true,
      },
      {
        source: "/f",
        destination: "/?utm_source=youtube&utm_campaign=how_to_get_a_chiseled_jawline",
        permanent: true,
      },
      {
        source: "/g",
        destination: "/?utm_source=youtube&utm_campaign=10_mewing_mistakes_uglier",
        permanent: true,
      },
      {
        source: "/h",
        destination: "/?utm_source=youtube&utm_campaign=how_to_mew_in_5_steps",
        permanent: true,
      },
      {
        source: "/i",
        destination: "/?utm_source=youtube&utm_campaign=how_to_do_mewing_tongue_posture",
        permanent: true,
      },
      {
        source: "/j",
        destination: "/?utm_source=youtube&utm_campaign=2_ways_to_know_your_mewing_correctly",
        permanent: true,
      },
      {
        source: "/k",
        destination: "/?utm_source=youtube&utm_campaign=daily_routine_get_you_lean",
        permanent: true,
      },
      {
        source: "/l",
        destination: "/?utm_source=youtube&utm_campaign=gonial_angle_test",
        permanent: true,
      },
      {
        source: "/cp",
        destination: "/?utm_source=youtube&utm_campaign=channel_page",
        permanent: true,
      },
      {
        source: "/m",
        destination: "/?utm_source=youtube&utm_campaign=short_jawline_angle",
        permanent: true,
      },
      {
        source: "/n",
        destination: "/?utm_source=youtube&utm_campaign=measure_your_jawline_angle",
        permanent: true,
      },
      {
        source: "/o",
        destination: "/?utm_source=youtube&utm_campaign=stop_pushing_mewing",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
