// console.log(55);

let movie = [
    {title: 'inception', year: 2010, rating: 8.7, genre: 'Sci-Fi'},
    {title: 'titanic', year: 1994, rating: 9.8, genre: 'Romance'},
    {title: 'the matrix', year: 2015, rating: 8.2, genre: 'Sci-Fi'},
    {title: 'avatar', year: 1996, rating: 7.8, genre: 'Romance'},
    {title: 'notebook', year: 2011, rating: 6.8, genre: 'Sci-Fi'}
]

// sorting based on sci-fi movie on its rating deccending order

let sciFiMovie = movie?.filter((m) => m.genre === 'Sci-Fi').sort((a, b) => b.rating - a.rating).map((m) => `title: ${m.title}, rating: ${m.rating}`);
console.log(sciFiMovie);