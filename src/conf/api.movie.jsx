import * as axios from 'axios';

const apiMovie = axios.create({
  baseURL: 'https://api.themoviedb.org/4'
})

apiMovie.interceptors.request.use( req => {
  req.headers['Authorization'] = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYjAzOTQ0NmY0OTkyYTExOTJkZGZjMzQ1ZDZmZGMzYSIsInN1YiI6IjVkYzA0MGQ3OTVjMGFmMDAxMjZlNmE0ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VbWJs4BnrQWTWfcR9aS0Ev1QPjPdM8-VG4iNiK0Pgbw'
  return req;
})

export default apiMovie;


export const apiMovieMap = (m) => ({
  img: 'https://image.tmdb.org/t/p/w500' + m.poster_path,
  title: m.title,
  details: `${ m.release_date } | ${ m.vote_average }/10 (${ m.vote_count })`,
  description: m.overview
})