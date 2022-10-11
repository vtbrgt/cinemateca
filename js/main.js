const axios = require(axios);

const url =
  'https://api.themoviedb.org/3/movie/76341?api_key=aa86d7264e7595e6dd88b54da2d8fa9e';
/* https://api.themoviedb.org/3/movie/550?api_key=aa86d7264e7595e6dd88b54da2d8fa9e
 */
let title;
let resume;
let cover;
let status;

async function getData() {
  const data = await axios.get(url);
  title = data.data.title;
  resume = data.data.overview;
  cover = data.data.poster_path;
  status = data.data.status;
  console.log(title);
  console.log(resume);
  console.log(cover);
  console.log(status);
}

getData();
