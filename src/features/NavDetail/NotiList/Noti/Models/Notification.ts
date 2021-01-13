import moment from 'moment';

export interface INotification{
    avatar: string,
    time: string,
    isActive: boolean,
    status:number,
    username:string,
    context:string
}

export function getTimePeriod(time:string){
    const lastTime = moment(time);
    const  now = moment();
    console.log("Locale:" + now.locale());
    const duration = moment.duration(now.diff(lastTime));

    const daysBetween2Dates = duration.asDays();
    if(daysBetween2Dates >= 1){
        return lastTime.format('L');
    }
    const hour = Math.floor(duration.asHours());
    if(hour < 1)
    {
        const minutes = Math.floor(duration.asMinutes());

        return minutes + " phút trước";
    }
    return hour +"h trước";
}