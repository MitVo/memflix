import { Image } from './show.model';

export class Cast {
    constructor (
        public person:Person,
        public character:Character,
        public self:string,
        public voice:string
    ){}
}

export class Person {
    constructor(
        public id:any,
        public name:string,
        public birthday:string,
        public image:Image
    ){}
}

export class Character {
    constructor(
        public id:any,
        public name:string
    ){}
}