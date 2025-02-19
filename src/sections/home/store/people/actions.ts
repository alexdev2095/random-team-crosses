import { Couples, CouplesString } from "../../types/types";

export type PeopleStoreTypes = "REMOVE_PERSON" | "SET_PEOPLE" | "SET_LOADING" | "SET_COUPLE" | "TRIGGER_CRUCE";

type Action<T> = {
    type: PeopleStoreTypes;
    payload: T;
};

interface IDeletePerson extends Action<string> {
    type: "REMOVE_PERSON";
}

interface ISetPeople extends Action<string[]>{
    type: "SET_PEOPLE";
} 

interface ISetLoading extends Action<boolean>{
    type: "SET_LOADING";
} 

interface ISetCouple extends Action<Couples | undefined>{
    type: "SET_COUPLE";
} 

interface ITriggerCruce extends Action<undefined> {
    type: "TRIGGER_CRUCE";
  }


export type TAction = IDeletePerson | ISetPeople | ISetLoading | ISetCouple | ITriggerCruce;
