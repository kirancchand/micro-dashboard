import produce from 'immer';
let initialState={
    data:[]
}
const TodoReducer = (state = initialState, action) =>  
produce(state,draft  => {
    switch(action.type){
        case 'ADD_TODO':
            
            // let data=state.push({ id: state.length + 1, description: action.payload })
           
            draft.data= [...state.data, { id: state.data.length + 1, description: action.payload }];
            console.log("draft",draft)
            break;
        case 'REMOVE_TODO':
            var todoId = action.payload;
            var index = state.data.findIndex(todo => todo.id === todoId);
            if (index === undefined || index === null || index < 0)
                draft.data=state.data;
            else
                draft.data= [...state.data.slice(0, index),...state.data.slice(index + 1)];
            break;
    }

});
export default TodoReducer;


// export  const TodoReducer = (state = [], action) => {
//     if (action.type === 'ADD_TODO') {
//         return [...state, { id: state.length + 1, description: action.payload }];
//     }
//     if (action.type === 'REMOVE_TODO') {
//         var todoId = action.payload;
//         var index = state.findIndex(todo => todo.id === todoId);
//         if (index === undefined || index === null || index < 0)
//             return state;
//         return [
//             ...state.slice(0, index),
//             ...state.slice(index + 1)
//         ];
//     }
//     return state;
// }