class MoviesApi {

    _baseUrl:string;
    _apiKey:string;

    constructor(
    {baseUrl, apiKey}:any) {
      this._baseUrl = baseUrl;
      this._apiKey = apiKey;
    }
  
    _checkResponse(res : any) {
      if (res.ok) {
        return res.json();
      }
      // if the server returns an error, reject the promise
      return Promise.reject(`Error: ${res.status}`)
    }
  
  
  
    //GET SEARCH RESULTS FOR KEYWORD https://http://www.omdbapi.com/?s=KEYWORD&apikey=9efe393d
    getMoviesResults(keyword : string) {
      return fetch(this._baseUrl + '?s=' + keyword + '&apiKey=' + this._apiKey, {
        method: 'GET',
        redirect: 'follow'
        }
      ).then((res) => this._checkResponse(res))
    }
  

    //GET SEARCH RESULTS BY PAGE FOR KEYWORD https://http://www.omdbapi.com/?s=KEYWORD&page=PAGE&apikey=9efe393d
    getMoviesResultsbyPage(keyword: string,page: string) {
      return fetch(this._baseUrl + '?s=' + keyword+ '&page=' + page + '&apiKey=' + this._apiKey, {
       method: 'GET',
       redirect: 'follow'
      }
    ).then((res) => this._checkResponse(res))
  }


    //GET DETAIL RESULT BY ID https://http://www.omdbapi.com/?i=ID&apikey=9efe393d
    getResultbyId(imdbID: string){
     return fetch(this._baseUrl + '?i=' + imdbID + '&apiKey=' + this._apiKey, {
     method: 'GET',
     redirect: 'follow'
    }
  ).then((res) => this._checkResponse(res))
}
}
  
  
  const moviesApi = new MoviesApi({
    baseUrl: "http://www.omdbapi.com/",
    apiKey: '9efe393d',
  })
  
  export default moviesApi;

