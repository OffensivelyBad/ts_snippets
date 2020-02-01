class Vehicle {

  /*
  color: string = 'red';

  constructor(color?: string) {
    this.color = color;
  }
  */

  constructor(public color?: string) {}
  // constructor(private color?: string) {}
  // constructor(protected color?: string) {}

  // public drive(): void {
  //   console.log('chugga chugga');
  // }

  protected honk(): void {
    console.log('honk');
  }
}

const vehicle = new Vehicle('blue');
console.log(vehicle);

class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }

  private drive(): void {
    console.log('vroom');
  }

  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const car = new Car(2, 'yellow');
car.startDrivingProcess();
// car.honk();
console.log(car);
