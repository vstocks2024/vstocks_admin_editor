"use client"
import { createContext, useState, useContext, SetState} from "react";

export const TemplateContext = createContext();

export const TemplateProvider = ({ children }) => {
    const [template, setTemplate] = useState();
    const exposed = {template, setTemplate};

 return <TemplateContext.Provider value={exposed}>{children}</TemplateContext.Provider>;
}
export const useTemplate = () => useContext(TemplateContext);

