import { MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://pi-films.netlify.app'

  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/trending/movie/week?api_key=${process.env.API_KEY}`
    );
    
    if (!response.ok) throw new Error('API fetch failed');

    const data = await response.json();
    const movies = data.results || [];

    const movieEntries = movies.map((movie: any) => ({
      url: `${baseUrl}/movie/${movie.id}`,
      lastModified: new Date(),
    }));

    return [
      { url: baseUrl, lastModified: new Date() },
      ...movieEntries,
    ];
  } catch (error) {
    // If something goes wrong, return JUST the homepage so the file exists!
    console.error("Sitemap error:", error);
    return [{ url: baseUrl, lastModified: new Date() }];
  }
}