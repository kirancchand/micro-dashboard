var initialState = {
    global: 0,
    local: 0,
    todo: 0
}
import produce from 'immer';
const CounterReducer = (state = initialState, action) =>  
produce(state,draft  => {
    switch(action.type){
        case 'INCREMENT_GLOBAL':
            draft.global=state.global + 1
            break;
        case 'DECREMENT_GLOBAL':
            draft.global=state.global - 1
            break;
        case 'INCREMENT_LOCAL':
            draft.local=state.local + 1
            break;
        case 'DECREMENT_LOCAL':
            draft.local=state.local - 1
            break;
        case 'ADD_TODO':
            draft.todo=state.todo + 1 
            break;
        case 'REMOVE_TODO':
            draft.todo=state.todo - 1
            break;
    }

    // if (action.type === "INCREMENT_GLOBAL") {
    //     return { 
    //     ...state, global: state.global + 1
    //      }
    // };
    // if (action.type === "DECREMENT_GLOBAL") return { ...state, global: state.global - 1 };

    // if (action.type === "INCREMENT_LOCAL") return { ...state, local: state.local + 1 };
    // if (action.type === "DECREMENT_LOCAL") return { ...state, local: state.local - 1 };

    // if (action.type === "ADD_TODO") return { ...state, todo: state.todo + 1 };
    // if (action.type === "REMOVE_TODO") return { ...state, todo: state.todo - 1 };

    // return state;
});
export default CounterReducer;