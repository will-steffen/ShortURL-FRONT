
interface Array<T> {
    contains(item): boolean;
    removeFirstByProp(prop, value): void;
    orderBy(prop, asc): T[];
    orderBy(prop): T[];
    order(): T[];
    order(asc): T[];
    any(f: (obj: T) => boolean) : boolean;
    any() : boolean;
    first(f: (obj: T) => boolean) : T;
    first() : T;
    last(f: (obj: T) => boolean) : T; 
    last() : T;   
}
Array.prototype.contains = function(item: any){
    return this.indexOf(item) > -1;
}
Array.prototype.removeFirstByProp = function(prop: string, value: any){
    let index;
    for(let i = 0; i < this.length; i++){
        if(this[i][prop] == value){
            index = i;
            break;
        }
    }
    if(index !== undefined){
        this.splice(index, 1);
    }
}

Array.prototype.orderBy = function(p: string, asc: boolean = true) {
    let arr: any[] = this;
    if(arr.length > 0 && typeof(arr[0][p]) == 'string'){
        if(asc){
            arr = arr.sort((a, b) =>  a[p].localeCompare(b[p]));
        }else{
            arr = arr.sort((a, b) =>  b[p].localeCompare(a[p]));
        }
    }else{
        if(asc){
            arr = arr.sort((a, b) =>  a[p] > b[p] ? 1 : -1);
        }else{
            arr = arr.sort((a, b) =>  a[p] > b[p] ? -1 : 1);
        }
    }
    
    return arr;
}

Array.prototype.order = function(asc: boolean = true) {
    let arr: any[] = this;
    if(arr.length > 0 && typeof(arr[0]) == 'string'){
        if(asc){
            arr = arr.sort((a, b) =>  a.localeCompare(b));
        }else{
            arr = arr.sort((a, b) =>  b.localeCompare(a));
        }
    }else{
        if(asc){
            arr = arr.sort((a, b) =>  a > b ? 1 : -1);
        }else{
            arr = arr.sort((a, b) =>  a > b ? -1 : 1);
        }
    }

    
    return arr;
}

Array.prototype.any = function(f: Function = null) : boolean {
    if(f)
        return this.filter(f).length > 0;
    return this.length > 0;
}

Array.prototype.first = function(f: Function = null) {
    if(f){
        let filtered = this.filter(f);
        return filtered.length > 0 ? filtered[0] : null;
    }
    return this[0];
}

Array.prototype.last = function(f: Function = null) {
    if(f){
        let filtered = this.filter(f);
        return filtered.length > 0 ? filtered[filtered.length - 1] : null;
    }
    return this[this.length - 1];
}
