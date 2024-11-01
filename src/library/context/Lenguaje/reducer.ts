/**
* Funcion Reductora del contexto Lenguage para useReducer
*/
export default function funtionalReducer(
    prevState: LangJS.ContextValue['LenguageValue'],
    { StateValue }: LangJS.ContextReducer
): LangJS.ContextValue['LenguageValue'] {
    return {
        ...prevState,
        ...StateValue
    }
}