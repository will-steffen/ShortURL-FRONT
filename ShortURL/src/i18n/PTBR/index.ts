import { Language } from "../../enums/language";
import { LocaleType } from "../locale-type";

export let Locale: LocaleType = {
    code: Language.PTBR,
    appTitle: 'ShortURL',
    page: {
        home: {
            signup: 'Registrar',
            signin: 'Entrar',
        }
    },
    general: {        
        no: 'Sim',
        yes: 'Não'
    }
}
