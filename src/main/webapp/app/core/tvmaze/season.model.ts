import { Image } from './show.model';

export interface ISeason {
    id?:any;
    number?:any,
    name?:string,
    image?:Image,
    episodes?:Episode[],
    summary?:string
}

export class Season implements ISeason{
    constructor(
        public id?:any,
        public number?:any,
        public name?:string,
        public image?:Image,
        public episodes?:Episode[],   
        public summary?:string     
    ){}
}

export class Episode {
    constructor(
        public id:any,
        public name:string,
        public airdate: string,
        public summary: string
    ){}
}