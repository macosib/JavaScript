import Buyable from './Buyable';



export default class Movie implements Buyable {
    constructor(
        readonly id: number,
        readonly name: string,
        readonly nameRu: string,
        readonly year: number,
        readonly country: string,
        readonly slogan: string,
        readonly tags: string,
        readonly genre: string,
        readonly duration: number,
        readonly price: number,
        readonly isImax: boolean,
        readonly maxCount: boolean,
    ) { }
}