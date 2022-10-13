const axios = require(axios);

const input = document.querySelector('#search')
const titles = document.querySelectorAll('.title');
const covers = document.querySelectorAll('.cover');
const descriptions = document.querySelectorAll('.description');
const status = document.querySelectorAll('.status');

const url =
  'https://api.themoviedb.org/3/movie/76341?api_key=aa86d7264e7595e6dd88b54da2d8fa9e';
/* https://api.themoviedb.org/3/movie/550?api_key=aa86d7264e7595e6dd88b54da2d8fa9e
 */


async function getData() {
  const data = await axios.get(url);
}

getData();
