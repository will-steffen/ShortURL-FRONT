import { Injectable } from "@angular/core";
import { LocaleType } from "./locale-type";
import { Locale as Locale_PTBR } from './PTBR';
import { Locale as Locale_EN } from './EN';
import { StorageHandler } from '../handlers/storage.handler';
import { Table } from "src/enums/table";
import { Language } from "src/enums/language";

@Injectable()
export class I18n {

  t: LocaleType;
  options = [Locale_PTBR, Locale_EN];

  constructor() {
    let locs = StorageHandler.List(Table.i18n);
    let code = this.getBrowserCode();
    if (locs.length > 0) { 
      code = locs[0].code; 
    }
    this.t = this.options.filter(o => { return o.code == code })[0];
  }

  changeLanguage(code?: Language): Language {
    if(code == undefined){
      code = this.t.code == Language.PTBR ? Language.EN : Language.PTBR;
    }
    let selected = this.options.filter(o => { return o.code == code });
    if (selected.length > 0) {
      this.t = selected[0];
      StorageHandler.DeleteTable(Table.i18n);
      StorageHandler.Save(Table.i18n, { code: code });
      return code;  
    }
  }

  getBrowserCode() {
    return Locale_EN.code;
    // return window.navigator.language == 'pt-br' ? Locale_PTBR.code : Locale_EN.code;
  }



}