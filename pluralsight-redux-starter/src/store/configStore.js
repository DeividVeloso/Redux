import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';

//Ela recebe o primeiro parâmetro que é o state incial da aplicação
export default function configureStore(initialState){
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(reduxImmutableStateInvariant())
    );
}