export class Car {
    vin: string;
    year: Date;
    brand: string;
    color: string;

    public constructor(init?:Partial<Car>) {
        Object.assign(this, init);
    }
}