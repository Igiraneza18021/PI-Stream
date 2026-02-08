import { MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://pi-films.netlify.app'

  let movieEntries: any[] = [];

  try {
    // Example: Fetching trending movies to fill the sitemap
    const response = await fetch(
      `https://api.themoviedb.org/3/trending/movie/week?api_key=${process.env.API_KEY}`
    );
    const data = await response.json();
    const movies = data.results || [];

    movieEntries = movies.map((movie: any) => ({
      url: `${baseUrl}/movie/${movie.id}`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.7,
    }));
  } catch (error) {
    console.error("Sitemap fetch error:", error);
  }

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    ...movieEntries,
  ];
}