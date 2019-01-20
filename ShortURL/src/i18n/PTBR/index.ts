import { Language } from "../../enums/language";
import { LocaleType } from "../locale-type";

export let Locale: LocaleType = {
    code: Language.PTBR,
    appTitle: 'ShortURL',
    page: {
        home: {
            title: [ 
                'Criando Links Melhores',
                'Encurtando Links',
                'Facilitando'                 
            ],
            description: 'Para reduzir a quantidade de letras',
            signup: 'Registrar',
            signin: 'Entrar',
        },
        notFound: {
            ops: 'Oops,',
            mainMessage: 'parece que você encontrou um link que não existe ou não está mais ativo.',
            createLink: 'Por que não criar um link novo?'
        }
    },
    general: {        
        no: 'Sim',
        yes: 'Não',
        copy: 'Copiar'
    }
}
