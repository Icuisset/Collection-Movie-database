// declare types to pass to reducer

export enum ActionType {
    SET_SEARCHRESULTS= "SET_SEARCHRESULTS",
    SET_TOTALRESULTS= "SET_TOTALRESULTS"
  }

interface movieCard { 
    Title : string;
    Year : string;
    Type : string;
    Poster : string;
    imdbID : string;}

export interface State {
    cards: movieCard[],
    totalResults: number
  }
  
export interface Action {
    type: ActionType,
    payload: any | null
  }


const reducer : React.Reducer<State, Action> = ( state, action)=>
{ switch ( action.type) {
    case ActionType.SET_SEARCHRESULTS : 
    return {
        ...state,
        cards: action.payload,
    };
    case ActionType.SET_TOTALRESULTS :
    return {
        ...state,
        totalResults: action.payload,
    };
    default :
    return state;
}};

export default reducer;