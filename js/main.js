const btn = document.querySelector('.btn');
const input = document.querySelector('#search');
const titles = document.querySelectorAll('.title');
const covers = document.querySelectorAll('.cover');
const descriptions = document.querySelectorAll('.description');
const scores = document.querySelectorAll('.score');

const url =
  'https://api.themoviedb.org/3/movie/76341?api_key=aa86d7264e7595e6dd88b54da2d8fa9e';

/* BASE URL = https://api.themoviedb.org/3/search/movie?api_key=aa86d7264e7595e6dd88b54da2d8fa9e&query=  <-- aqui vem o texto digitado */

async function handleData() {
  const inputValue = input.value;
  const response = await axios.get(
    `https://api.themoviedb.org/3/search/movie?api_key=aa86d7264e7595e6dd88b54da2d8fa9e&query=${inputValue}`
  );
  console.log(response);
  titles[0].innerText = response.data.results[0].original_title;
  covers[0].src = `https://image.tmdb.org/t/p/w200${response.data.results[0].poster_path}`;
  descriptions[0].innerText = response.data.results[0].overview;
  scores[0].innerText = '★' + response.data.results[0].vote_average;
}

btn.addEventListener('click', handleData);
