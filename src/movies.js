// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  let directors = moviesArray.map((movie) => {
    return movie.director; // Fix: Use `movie.director` instead of `movies.director`
  });

  directors = directors.filter((director, index) => {
    return directors.indexOf(director) === index; // Fix: Use `indexOf` to filter out duplicate directors
  });

  return directors;
}

//BONUS MISSING

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  const spielbergDramaMovies = moviesArray.filter((movie) => {
    if (movie.genre.includes("Drama")) {
      if (movie.director === "Steven Spielberg") {
        return movie;
      }
    }
  });
  return spielbergDramaMovies.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (!moviesArray.length) return 0;
  let totalScore = moviesArray.reduce((accumulator, currentVal) => {
    if (currentVal.score) {
      return accumulator + currentVal.score;
    } else return accumulator;
  }, 0);
  avgScore = Number((totalScore / moviesArray.length).toFixed(2));
  return avgScore;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  let dramaMovies = moviesArray.filter((movie) => {
    return movie.genre.includes("Drama");
  });

  return scoresAverage(dramaMovies);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  let orderedMoviesbyYear = [...moviesArray];

  return orderedMoviesbyYear.sort((a, b) => {
    if (a.year > b.year) return 1;
    else if (a.year < b.year) return -1;
    else if (a.title > b.title) return 1;
    else if (a.title < b.title) return -1;
    return 0;
  });
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  let titlesArray = moviesArray.map((movie) => {
    return movie.title;
  });
  titlesArray.sort();
  if (titlesArray.length > 20) {
    return (titlesArray = titlesArray.slice(0, 20));
  }
  return titlesArray;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
