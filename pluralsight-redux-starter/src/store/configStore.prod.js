import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
import thunk from 'redux-thunk';

//Ela recebe o primeiro parâmetro que é o state incial da aplicação
export default function configureStore(initialState){
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(thunk)
    );
}
