window['daysToAdd'] = 0;

interface DateConstructor {
    Now(): Date;
    removeTime(date: Date): Date;
    daysBetween(date1: Date, date2: Date): number;
}

Date.Now = (): Date => {
    let d = window['daysToAdd'];
    if (d == 0)
        return new Date();
    let days = 1000 * 60 * 60 * 24 * d;
    return new Date(Date.now() + days);
}

Date.daysBetween = function (date1, date2): number {
    var one_day = 1000 * 60 * 60 * 24;
    var difference_ms = date2.getTime() - date1.getTime();
    return Math.round(difference_ms / one_day);
}


Date.removeTime = function (date: Date): Date {
    let year = date.getFullYear()
    let month = date.getMonth() + 1;
    let day = date.getDate();
    return new Date(year + "-"+  month + "-" + day);
}
