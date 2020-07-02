class Car{
    constructor(brandName, model, productionYear){
        this.brandName = brandName;
        this.model = model;
        this.productionYear = productionYear;
    }
}

let car = _.create(Car.prototype, {brandName:'Tesla',model:'Model 3',productionYear:2017});
console.log(car);

let invertCar = _.invert(car);
console.log(invertCar);

let pickCar = _.pick(car, 'brandName', 'productionYear');
console.log(pickCar);

let omitCar = _.omit(car, 'model');
console.log(omitCar);