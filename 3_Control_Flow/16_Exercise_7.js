// Exerrcise 6

const movie = {
    title: 'The thing',
    releaseYear: 1982,
    rating: 4.5,
    director: "John"
};

showProperties(movie);

function showProperties(obj) {
    for (let key in obj)
        if (typeof obj[key] === 'number')
            console.log(key, obj[key]);
}