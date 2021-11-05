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
  }
  
  
  const moviesApi = new MoviesApi({
    baseUrl: "http://www.omdbapi.com/",
    apiKey: '9efe393d',
  })
  
  export default moviesApi;