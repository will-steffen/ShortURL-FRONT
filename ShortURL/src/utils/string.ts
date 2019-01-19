interface String {
    contains(item: string): boolean;
    replaceAll(from: string, to: string): string;
}
String.prototype.contains = function(item: string){
    return this.indexOf(item) > -1;
}
String.prototype.replaceAll = function(from: string, to: string){
    let str = this;
    while(str.contains(from)){
        str = str.replace(from, to);
    }
    return str;
}

interface StringConstructor {
    isNullOrEmpty: (str: string) => boolean;
} 

String.isNullOrEmpty = (str): boolean => {    
    return str === '' || str === null || str == undefined; 
}