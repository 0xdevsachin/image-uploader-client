import axios from "axios";
import React, { createContext, useState} from "react";

const ContextState = createContext()


export const ContextProvider = ({children}) =>{
    const [loader, setLoader] = useState(false)
    const [url, setUrl] = useState(null)
    const upload = (data) =>{
        const formdata = new FormData();
        formdata.append('photo', data)
        axios.post('http://localhost:3300/uploads', formdata).then((res) =>{
            setLoader(false)
            if(res.status === 200){
                setUrl(res.data.url)
            }else{
                setUrl(null)
            }
        })
    }
    return(
        <ContextState.Provider value={{ loader, setLoader, upload, url}}>
            {children}
        </ContextState.Provider>
    )
}

export default ContextState