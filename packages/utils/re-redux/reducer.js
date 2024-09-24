const initialState = {
    // initial state
  };
import produce from 'immer';
const reducer = (state = initialState, action) =>  
produce(state,draft  => {
    switch(action.type){
        case 'SELECTEDMENU':
            draft.currentMenu=action.payload
            console.log(action)
            break;
        default:
            return state;
    }
});
export default reducer;