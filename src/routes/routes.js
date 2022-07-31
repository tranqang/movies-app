import Home from 'src/pages/Home/Home.jsx'
import Movie from 'src/pages/Movie/Movie.jsx'
import Tv from 'src/pages/Tv/TV.jsx'
import Person from 'src/pages/Person/Person.jsx'
import Popular from 'src/pages/Movie/Popular/Popular'
import PopularTV from 'src/pages/Tv/Popular/Popular'
import NowPlaying from 'src/pages/Movie/NowPlaying/NowPlaying'
import Upcoming from 'src/pages/Movie/Upcoming/Upcoming'
import TopRated from 'src/pages/Movie/TopRated/TopRated'
import TVTopRated from 'src/pages/Tv/TopRated/TopRated'
import AiringToday from 'src/pages/Tv/AiringToday/AiringToday'
import OnTV from 'src/pages/Tv/OnTV/OnTV'
import Details from 'src/pages/Details/Details'
import PopularPerson from 'src/pages/Person/PopularPerson/PopularPerson'
import PersonDetails from 'src/pages/Person/PersonDetails/PersonDetails'

export const routesConfig = {
  home: '/',
  movie: '/movie/*',
  tv: '/tv/*',
  person: '/person/*',
}
const routesPath = [
  {
    path: routesConfig.home,
    element: <Home />,
  },
  {
    path: routesConfig.movie,
    element: <Movie />,
  },
  {
    path: routesConfig.tv,
    element: <Tv />,
  },
  {
    path: routesConfig.person,
    element: <Person />,
  },
]
export const moviePaths = {
  popular: '/',
  nowPlaying: '/now-playing',
  upcoming: '/upcoming',
  topRated: '/top-rated',
  details: '/:id',
}
export const movieRoutes = [
  {
    path: moviePaths.popular,
    element: <Popular />,
  },
  {
    path: moviePaths.nowPlaying,
    element: <NowPlaying />,
  },
  {
    path: moviePaths.upcoming,
    element: <Upcoming />,
  },
  {
    path: moviePaths.topRated,
    element: <TopRated />,
  },
  {
    path: moviePaths.details,
    element: <Details />,
  },
]
export const tvPaths = {
  popular: '/',
  airingToday: '/airing-today',
  onTV: '/on-the-air',
  topRated: '/top-rated',
  details: '/:id',
}
export const tvRoutes = [
  {
    path: tvPaths.popular,
    element: <PopularTV />,
  },
  {
    path: tvPaths.airingToday,
    element: <AiringToday />,
  },
  {
    path: tvPaths.onTV,
    element: <OnTV />,
  },
  {
    path: tvPaths.topRated,
    element: <TVTopRated />,
  },
  {
    path: tvPaths.details,
    element: <Details />,
  },
]
export const personPaths = {
  popular: '/',
  details: '/:id',
}
export const personRoutes = [
  {
    path: personPaths.popular,
    element: <PopularPerson />,
  },
  {
    path: personPaths.details,
    element: <PersonDetails />,
  },
]
export default routesPath
