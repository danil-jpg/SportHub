const car = {
	model: 'Toyota',
	year: 2007,
	showModel: function (color, engine) {
		console.log(this.model, color, engine);
	}
};

const anotherCar = {
	model: 'Benz',
	year: 1998,
};

// console.log(anotherCar.model)

// car.showModel.call(anotherCar, "green", "some")

const modelShow = car.showModel.bind(anotherCar, "red", "ttt")

modelShow()

