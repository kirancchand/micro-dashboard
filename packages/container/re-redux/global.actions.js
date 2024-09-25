export const IncrementGlobalCounter = () => {
    return {
        type: "INCREMENT_GLOBAL",
        payload: null
    }
}

export const DecrementGlobalCounter = () => {
    return {
        type: "DECREMENT_GLOBAL",
        payload: null
    }
}

export const SelectMenuFunc = (val) => {
    console.log("helo",val)
    return {
        type: "SELECTEDMENU",
        payload: val
    }
}
