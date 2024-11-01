import { useReducer, type ReactNode } from "react";
import { LengaugeContext } from "..";
import funtionalReducer from "./reducer";

interface LenguageProviderProps {
    children: ReactNode;
    init: LangJS.ContextValue['LenguageValue']
}

export default function LenguageProvider({
    children,
    init = null
}: LenguageProviderProps) {
    const Init: LangJS.ContextValue['LenguageValue'] = init

    const [LenguageValue, dispatch] = useReducer(funtionalReducer, Init)

    return (
        <LengaugeContext.Provider value={{
            LenguageValue,
            ChangeLenguage: dispatch
        }}>
            {children}
        </LengaugeContext.Provider>
    )
}