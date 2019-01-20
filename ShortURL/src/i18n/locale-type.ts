import { Language } from "../enums/language";

export type LocaleType = {
    code: Language,
    appTitle: string,
    page: {
        home: {
            title: string[],
            description: string,
            signup: string,
            signin: string,
        },
        notFound: {
            ops: string,
            mainMessage: string,
            createLink: string
        }
    },
    general: {        
        no: string,
        yes: string,
        copy: string
    }
}
