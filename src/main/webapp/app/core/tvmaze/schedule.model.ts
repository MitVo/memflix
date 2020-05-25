import { Show } from './show.model';

export class Schedule{
    constructor(
        public time:string,
        public days:string[]
    ){}
}