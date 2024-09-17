const assert = require("assert");
const ganache = require("ganache");
const { Web3 } = require("web3");
const web3 = new Web3(ganache.provider());

// updated ganache and web3 imports added for convenience

// contract test code will go here
class Car {
  park() {
    return "stopped";
  }

  drive() {
    return "move";
  }
}

let car;

beforeEach(() => {
  car = new Car();
});

describe("Car", () => {
  it("stops when park() is called", () => {
    assert.equal(car.park(), "stopped");
  });

  it("moves when drive() is called", () => {
    assert.equal(car.drive(), "move");
  });
});
