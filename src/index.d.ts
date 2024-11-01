declare namespace LangJS {
    interface ContextValue {
        LenguageValue: { [Value: string]: ContextValue } | null,
        ChangeLenguage(data: ContextReducer): void
    }
    interface ContextReducer {
        StateValue: ContextValue['LenguageValue']
    }
}