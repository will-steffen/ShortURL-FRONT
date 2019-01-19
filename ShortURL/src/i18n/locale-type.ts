import { Language } from "../enums/language";

export type LocaleType = {
    code: Language,
    appTitle: string,
    page: {
        home: {
            signup: string,
            signin: string,
        }
    },
    general: {        
        no: string,
        yes: string
    }
}
