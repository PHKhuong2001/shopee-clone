import { useState } from "react";

function useLocalStorage() {
    const [localStorage,setLocalStorage] = useState("");
    const getLocalStorage = () => {
        
    }
    const deleteLocalStorage = () => {

    }
    return {getLocalStorage,deleteLocalStorage};
}

export default useLocalStorage;