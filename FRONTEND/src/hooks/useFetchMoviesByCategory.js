import api from "../utils/api";

export async function getMoviesByCategory(category) {
  try {
    const res = await api.get(`/movie/category/${category}`);
    return res.data.content;
  } catch (e) {
    console.error("Fetch movies by category failed:", e.response?.data || e.message);
    return [];
  }
}
