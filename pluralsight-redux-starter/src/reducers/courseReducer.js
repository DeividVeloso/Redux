//Para não ter erro, o reducer precisa ter um valor padrão, para isso vamos usar um [] inicial
//Quer dizer que como não temos curso ainda ele fica com o array vazio
export default function courseReducer(state = [], action) {
    switch (action.type) {
        case 'CREATE_COURSE':
            debugger;
            //state.push(action.course); Errado precisa ser imutável;
            return [...state, Object.assign({}, action.course)];
        default:
            return state;
    }
}