import { Schedule } from './schedule.model';

export class Show{
    constructor(
        public id?:any,
        public name?:string,
        public type?:string,
        public language?:string,
        public genres?:string[],
        public status?:string,
        public premiered?:string,
        public officialSite?:string,
        public image?:Image,
        public summary?:string,
        public network?:Network,
        public rating?:Rating,
        public schedule?:Schedule
    ){}
}

export class Image{
    constructor(
        public medium:string,
        public original:string
    ){}
}

export class Network {
    constructor(
        public id:any,
        public name:string
    ){}
}

export class Rating {
    constructor(
        public average:any
    ){}
}
