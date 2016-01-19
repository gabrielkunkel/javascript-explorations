/**
 * Created by gabrielkunkel on 1/11/16.
 */
    /* eslint-disable */

class Car {
    private engine: string;
    private wheels: number;
    private model: string;
    private make: string;
    private onLot: boolean;

    constructor (engine: string, wheels: number, model: string) {
        this.engine = engine;
        this.wheels = wheels;
        this.model = model;
    }

    public start(): void {
        alert("Car is started with engine: " + this.engine);
    }

    public stop(): void {
        alert("Car is stopped with engine: " + this.engine);
    }

    public driverIs(): string {
        return "This is a string.";
    }
}
