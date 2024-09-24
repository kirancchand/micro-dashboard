var initialState = {
    globalValue: 0,
}
import produce from 'immer';
const AppReducer = (state = initialState, action) =>  
produce(state,draft  => {
    switch(action.type){
        case 'UPDATE_GLOBAL_VALUE':
            draft.globalValue=action.payload.newValue
            break;
    }
});
export default AppReducer;