import { Couples } from "../../types/types";

export type PeopleStateType = {
    group_one: string[];
    group_two: string[];
    couples: Couples;
    crosses: [Couples, Couples][];
    loading: boolean;
};

const initialState: PeopleStateType = {
    group_one: ['Ana', 'Carlos', 'Elena', 'Gabriel', 'Isabel',
    'Juan', 'Karla', 'Luis', 'María', 'Nora'],
    group_two: ['Oscar', 'Patricia', 'Quentin', 'Rosa', 'Sergio',
        'Teresa', 'Ulises', 'Valeria', 'Walter', 'Ximena'],
    couples: [],
    crosses:[],    
    // crosses:[[[['ale','yo'],['ale','yo']],[['ale','yo'], ['ale','yo']]]],    
    loading: false,
};

export default initialState;
