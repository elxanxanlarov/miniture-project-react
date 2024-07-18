import { createContext, useEffect, useState } from "react";

export const LangContext=createContext();
export const LangProvider=({children})=>{
    useEffect(()=>{
        if(localStorage.getItem("lang")==undefined){
            localStorage.setItem("lang","az")
        }
    },[])
    const [lang,setLang]=useState(localStorage.getItem("lang"));
    return <LangContext.Provider value={[lang,setLang]}>{children}</LangContext.Provider>
}