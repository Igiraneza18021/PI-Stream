import { Metadata } from "next";
import { Suspense } from "react";
import PageTitle from "@/components/title/PageTitle";
import MoviePageClient from "@/components/movie/MoviePageClient";
import {PageLoading} from "@/components/loading/PageLoading";

export const metadata: Metadata = {
  title: "All Movies | Pifilms",
  description:
    "Browse all movies available on Pifilms. Find trending, top-rated, and new releases.",
};

export default function MoviePage() {
  return (
    <div className="app-bg-enhanced mt-24">
      <PageTitle
        segments={[{ text: "All" }, { text: " Movies", isPrimary: true }]}
      />

      <Suspense fallback={<PageLoading>Loading movies...</PageLoading>}>
        <MoviePageClient />
      </Suspense>
    </div>
  );
}
