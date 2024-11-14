
export type PeopleStateType = {
    group: string[];
    loading: boolean;
};

const initialState: PeopleStateType = {
    group: [],
    loading: false,
};

export default initialState;
