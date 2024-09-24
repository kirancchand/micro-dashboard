export const SelectMenuFunc = (val) => {
    console.log("helo",val)
    return {
        type: "SELECTEDMENU",
        payload: val
    }
}
