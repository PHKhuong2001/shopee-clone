import { useState } from "react";

function useLocalStorage() {
    const [getLocalValue,setLocalValue] = useState<any>(null);
    const getLocalStorage = (nameItem: string) => {
        setLocalValue(() => JSON.parse(localStorage.getItem(nameItem) || ""));
    }
    const setLocalStorage = (nameItem: string,data: any) => {
        localStorage.setItem(nameItem,data);
    }
    const deleteLocalStorage = (nameItem: string) => {
        localStorage.removeItem(nameItem);
    }
    return {getLocalStorage,deleteLocalStorage,setLocalStorage,getLocalValue};
}

export default useLocalStorage;