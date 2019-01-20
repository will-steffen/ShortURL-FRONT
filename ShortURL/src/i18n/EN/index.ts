import { Language } from "../../enums/language";
import { LocaleType } from "../locale-type";

export let Locale: LocaleType  ={
    code: Language.EN,
    appTitle: 'ShortURL',
    page: {
        home: {
            title: [ 
                'Making Links Better',
                'Shortening Links',
                'Turning Easy'   
            ],
            description: 'To reduce the amount of letters',
            signup: 'Sign Up',
            signin: 'Sign In',
        },
        notFound: {
            ops: 'Oops,',
            mainMessage: 'it looks like you have found a link which does not exist or is invalid.',
            createLink: "Why not create a new link?"
        }
    },
    general: {        
        no: 'No',
        yes: 'Yes',
        copy: 'Copy'
    }
}