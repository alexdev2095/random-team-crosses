import { Couples, CouplesString } from "../../types/types";
import { TAction } from "./actions";
import { PeopleStateType } from "./initialState";

const reducer = (state: PeopleStateType, action: TAction): PeopleStateType => {
  const { type } = action;
  switch (type) {
    case "REMOVE_PERSON":
      console.log(state)
      return { ...state, group_one: [action.payload] };
    case "SET_PEOPLE":
        console.log(state)
        return { ...state, group_one: action.payload };  
    case "SET_LOADING":  
      return { ...state, loading: action.payload }; 
    case "SET_COUPLE":  
      if (state.group_one.length > 0 && state.group_two.length > 0) {
        const indice1 = Math.floor(Math.random() * state.group_one.length);
        const indice2 = Math.floor(Math.random() * state.group_two.length);
    
        const persona1 = state.group_one[indice1];
        const persona2 = state.group_two[indice2];
    
        const nuevaPareja: CouplesString = [persona1, persona2];
    
        return {
          ...state,
          couples: [...state.couples, nuevaPareja],
          group_one: state.group_one.filter((_, index) => index !== indice1),
          group_two: state.group_two.filter((_, index) => index !== indice2),
        };
      }
      return state;
      case "TRIGGER_CRUCE":
        if (state.couples.length >= 2) {
          // Barajar las parejas
          const parejasBarajadas = [...state.couples].sort(() => Math.random() - 0.5);
  
          // Tomar las dos primeras parejas
          const coupleOne = parejasBarajadas[0];
          const coupleTwo = parejasBarajadas[1];
  
          // Crear el cruce
          const nuevoCruce: [Couples, Couples] = [coupleOne, coupleTwo];
  
          return {
            ...state,
            crosses: [...state.crosses, nuevoCruce], // Añadir el cruce
            couples: parejasBarajadas.slice(2), // Eliminar las parejas usadas
          };
        }
        return state
    default:
      return state;
  }
};
export default reducer;
