import React, { createContext, useState} from "react";

const ContextState = createContext()


export const ContextProvider = ({children}) =>{
    const [files, setFiles] = useState(null)
    const [loader, setLoader] = useState(false)
    return(
        <ContextState.Provider value={{files, setFiles, loader, setLoader}}>
            {children}
        </ContextState.Provider>
    )
}

export default ContextState