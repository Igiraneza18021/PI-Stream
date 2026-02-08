import { Metadata } from "next";
import InfoNotFound from "@/components/not-found/InfoNotFound";
import MovieInfo from "@/components/movie/MovieInfo";

export const metadata: Metadata = {
  title: "Movie | Pifilms",
  description:
    "Browse all movies available on Pifilms. Find trending, top-rated, and new releases.",
};

interface MovieDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function MovieDetailPage({
  params,
}: MovieDetailPageProps) {
  const { id } = await params;
  const parsedId = parseInt(id, 10);

  if (isNaN(parsedId) || parsedId <= 0) {
    return <InfoNotFound />;
  }

  return <MovieInfo id={parsedId} />;
}

export default function MoviePage({ movie }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Movie',
    'name': movie.title,
    'image': `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
    'description': movie.overview,
    'datePublished': movie.release_date,
  }

  return (
    <section>
      {/* Add this script tag anywhere in your JSX */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <h1>{movie.title}</h1>
      {/* ... rest of your page */}
    </section>
  )
}
