var initialState = {
    currentMenu:"",
    previousMenu:""
}
import produce from 'immer';
const MenuReducer = (state = initialState, action) =>  
produce(state,draft  => {
    switch(action.type){
        case 'SELECTEDMENU':
            draft.currentMenu=action.payload
            console.log(action)
            break;
    }
});
export default MenuReducer;