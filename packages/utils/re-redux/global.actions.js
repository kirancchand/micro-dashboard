export const SelectMenuFunc = (val) => {
    console.log("utils helo",val)
    return {
        type: "SELECTEDMENU",
        payload: val
    }
}

export const logout = () => ({
    type: 'SIGNOUT'
});