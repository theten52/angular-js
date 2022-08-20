// 时间操作工具命名空间
export namespace DateUtility {
    // 计算时间差
    export function difference(date1: Date, date2: Date): { days, hours, minutes, seconds } {
        let ms = date1.getTime() - date2.getTime();

        let msInDay = 24 * 60 * 60 * 1000;
        let msInHour = 60 * 60 * 1000;
        let msInMinute = 60 * 1000;

        let days = Math.floor(ms / msInDay);
        let hours = Math.floor((ms - days * msInDay) / msInHour);
        let minutes = Math.floor((ms - days * msInDay - hours * msInHour) / msInMinute);
        let seconds = Math.floor((ms - days * msInDay - hours * msInHour - minutes * msInMinute) / 1000);

        return { days, hours, minutes, seconds };
    }
}

// 字符串操作工具命名空间
export namespace StringUtility {
    // 计算字符串差集
    export function difference(str1: string, str2: string): string {
        return str1.split('').filter(x => str2.indexOf(x) == -1).join('');
    }
}