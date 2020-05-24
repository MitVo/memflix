export class Show{
    constructor(
        public id:any,
        public name:string,
        public type:string,
        public language:string,
        public genres:string[],
        public status:string,
        public premiered:string,
        public officialSite:string,
        public image:Image,
        public summary:string
    ){}
}

export class Image{
    constructor(
        public medium:string,
        public original:string
    ){}
}