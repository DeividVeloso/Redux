import * as types from '../actions/actionTypes';
//Para não ter erro, o reducer precisa ter um valor padrão, para isso vamos usar um [] inicial
//Quer dizer que como não temos curso ainda ele fica com o array vazio
export default function courseReducer(state = [], action) {
    switch (action.type) {
        case types.LOAD_COURSES_SUCCESS:
            return action.courses;
        default:
            return state;
    }
}
