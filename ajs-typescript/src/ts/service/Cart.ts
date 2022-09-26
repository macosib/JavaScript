import Buyable from '../domain/Buyable';

export default class Cart {
    private _items: Buyable[] = [];

    add(item: Buyable): void {
        if (this._items.includes(item) && item.maxCount) {
            return
        }
        this._items.push(item)
    }
    get items(): Buyable[] {
        return [...this._items]; 
    }

    cost(): number {
        return this._items.reduce((acc, item) => acc + item.price, 0)
    }

    costWithDiscount(discount: number): number {
        return this.cost() * (1 - discount / 100)
    }

    delete(id : number): void {
        let index: number = this.items.findIndex((elem) => elem.id === id)
        index >= 0 ? this._items.splice(index, 1):null
    }

    reduce(id : number): void {
        let index: number = this.items.findIndex((elem) => elem.id === id)
        index >= 0 ? this._items.splice(index, 1):null
    }
        

}
