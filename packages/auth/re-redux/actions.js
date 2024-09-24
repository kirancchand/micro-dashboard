// actions.js
export const increment = () => ({
    type: 'INCREMENT'
});

export const decrement = () => ({
    type: 'DECREMENT'
});

export const login = (val) => ({
    type: 'SIGNIN',
    payload:val
});

export const logout = () => ({
    type: 'SIGNOUT'
});


export const SelectMenuFunc = (val) => {
    return {
        type: "SELECTEDMENU",
        payload: val
    }
}
