export type PeopleStoreTypes = "REMOVE_PERSON" | "SET_PEOPLE" | "SET_LOADING";

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


export type TAction = IDeletePerson | ISetPeople | ISetLoading;
