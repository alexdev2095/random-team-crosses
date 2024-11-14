import { TAction } from "./actions";
import { PeopleStateType } from "./initialState";

const reducer = (state: PeopleStateType, action: TAction): PeopleStateType => {
  const { type } = action;
  switch (type) {
    case "REMOVE_PERSON":
      console.log(state)
      return { ...state, group: [action.payload] };
    case "SET_PEOPLE":
        console.log(state)
        return { ...state, group: action.payload };  
    case "SET_LOADING":  
      return { ...state, loading: action.payload }; 
    default:
      return state;
  }
};
export default reducer;
