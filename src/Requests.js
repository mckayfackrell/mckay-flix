const key = process.env.REACT_APP_TMDB_API_KEY;

const requests = {
  requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`,
  requestList: `https://api.themoviedb.org/3/list/8245105?api_key=${key}&language=en-US`,
  requestChristmas: `https://api.themoviedb.org/3/list/8245358?api_key=${key}&language=en-US`,
  requestMcKay: `https://api.themoviedb.org/3/list/8245357?api_key=${key}&language=en-US`,
  requestJurassic: `https://api.themoviedb.org/3/list/8245368?api_key=${key}&language=en-US`,
  requestAudrey: `https://api.themoviedb.org/3/list/8245367?api_key=${key}&language=en-US`,
  requestStar: `https://api.themoviedb.org/3/list/8245365?api_key=${key}&language=en-US`,
  requestApes: `https://api.themoviedb.org/3/list/8245366?api_key=${key}&language=en-US`,
  requestX: `https://api.themoviedb.org/3/list/8245364?api_key=${key}&language=en-US`,
  requestRings: `https://api.themoviedb.org/3/list/8245363?api_key=${key}&language=en-US`,
  requestHorror: `https://api.themoviedb.org/3/list/8245359?api_key=${key}&language=en-US`,
  requestPotter: `https://api.themoviedb.org/3/list/8245360?api_key=${key}&language=en-US`,
  requestNolan: `https://api.themoviedb.org/3/list/8245356?api_key=${key}&language=en-US`,
  requestGhibli: `https://api.themoviedb.org/3/list/8245355?api_key=${key}&language=en-US`,
};

export default requests;
