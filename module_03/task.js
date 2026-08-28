// console.log(55);

// let movie = [
//     {title: 'inception', year: 2010, rating: 8.7, genre: 'Sci-Fi'},
//     {title: 'titanic', year: 1994, rating: 9.8, genre: 'Romance'},
//     {title: 'the matrix', year: 2015, rating: 8.2, genre: 'Sci-Fi'},
//     {title: 'avatar', year: 1996, rating: 7.8, genre: 'Romance'},
//     {title: 'notebook', year: 2011, rating: 6.8, genre: 'Sci-Fi'}
// ]

// sorting based on sci-fi movie on its rating deccending order

// let sciFiMovie = movie?.filter((m) => m.genre === 'Sci-Fi').sort((a, b) => b.rating - a.rating).map((m) => `title: ${m.title}, rating: ${m.rating}`);
// console.log(sciFiMovie);


// let sciFiMovie = movie?.filter((m) => m.genre === 'Sci-Fi')?.sort((a, b) => b.rating - a.rating)?.map((m) => `title: ${m.title}, rating: ${m.rating}`)?.forEach((m) => console.log(`movie dekhbo ${m}`)); // for each e clg direct likhte hobe, because for each return korena.
// console.log(sciFiMovie); // undefined dekhabe

// practice task

let product = [
    {id: 1, title: 'Laptop', price: 50000, catagory: 'accessories', inStock: true},
    {id: 2, title: 'Desktop', price: 45000, catagory: 'accessories', inStock: true},
    {id: 3, title: 'keyboard', price: 500, catagory: 'accessories', inStock: false},
    {id: 4, title: 'mouse', price: 600, catagory: 'accessories', inStock: true},
    {id: 5, title: 'soundbox', price: 5000, catagory: 'accessories', inStock: true},
    {id: 6, title: 'printer', price: 20000, catagory: 'accessories', inStock: false}
]

/* find product by filtering based on inStock and then sort on accending order based on price, then print price and title. at the end calculate total bill using reduce, we can apply optional coalesing */

let sortProduct = product?.filter((p) => p.inStock === true)?.sort((a, b) => a.price - b.price).map((m) => `${m.title} ${m.price}`);

console.log(sortProduct);

let sortedProduct = product?.filter((p) => p.inStock === true)?.sort((a, b) => a.price - b.price)?.reduce((acc, current) => {
    return acc += current.price;
}, 0);
console.log('Total bill for sorted items: ',sortedProduct, 'taka');

