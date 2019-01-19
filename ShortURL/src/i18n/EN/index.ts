import { Language } from "../../enums/language";
import { LocaleType } from "../locale-type";

export let Locale: LocaleType  ={
    code: Language.EN,
    appTitle: 'ShortURL',
    page: {
        home: {
            signup: 'Sign Up',
            signin: 'Sign In',
        }
    },
    general: {        
        no: 'No',
        yes: 'Yes'
    }
}