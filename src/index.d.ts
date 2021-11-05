// types.d.ts
declare module '*.css' { const url: string; export default url; }
declare module "*.png"{const value: any; export = value;}
declare module "*.jpg"{const value: any; export = value;}

enum ResponseStatus {
    True = "True",
    False = "False"
}

type Movie = {
    Title: string,
    Year: string,
    imdbID: string,
    Type: string,
    Poster: string
}


type ApiResponse = {
    Search: Movie[],
    totalResults: string,
    Response: ResponseStatus.True
}

type ApiResponseNotFound = {
    Response: ResponseStatus.False,
    Error: string
}

// union type for the api response
type FullApiResponse = ApiResponse | ApiResponseNotFound

export type MovieRating = {
    Source: string,
    Value: string
}

export type ApiResponseGetMovie = {
    Title: string,
    Year: string,
    Rated: string,
    Released: string,
    Runtime: string,
    Genre: string,
    Director: string,
    Writer: string,
    Actors: string,
    Plot: string,
    Language: string,
    Country: string,
    Awards: string,
    Poster: string,
    Ratings: MovieRating[],
    Metascore: string,
    imdbRating: string,
    imdbVotes: string,
    imdbID: string,
    Type: string,
    DVD: string,
    BoxOffice: string,
    Production: string,
    Website: string,
    Response: string
}





