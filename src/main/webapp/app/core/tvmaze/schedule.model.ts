import { Show } from './show.model';

export class Schedule{
    constructor(
        public id:any,
        public name:string,
        public season:any,
        public image:string,
        public summary:any,
        public show:Show
    ){}
}