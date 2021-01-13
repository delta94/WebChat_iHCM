export interface INotification{
    avatar: string,
    time: string,
    isActive: boolean,
    status:number,
    username:string,
    context:string
}

export function getTimePeriod(time:string){
    const lastTime = Date.parse(time);
    const now = Date.now();
    const getDaysDiffBetweenDates = (now - lastTime) / (1000 * 3600 * 24);
    // if(getDaysDiffBetweenDates > 1){
    //     return
    // }
    console.log(Math.floor(getDaysDiffBetweenDates));
    return "5h trước"
}