var movies = [{
        title: "Predator",
        rating: "5",
        hasWatched: true
    },
    {
        title: "Terminator",
        rating: "4",
        hasWatched: true
    },
    {
        title: "Total Recall",
        rating: "3",
        hasWatched: false
    },
    {
        title: "Commando",
        rating: "4",
        hasWatched: true

    }

]

movies.forEach(function (movie) {
    if (movie.hasWatched) {
        console.log("You have watched " + movie.title + " - " + movie.rating + " stars");
    } else {
        console.log("You have not watched " + movie.title + " - " + movie.rating + " stars");
    }
});