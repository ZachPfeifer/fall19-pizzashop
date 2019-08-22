import Pizza from "../Models/Pizza.js";

let _state = {
  pizzas: [new Pizza({
    name: "Pepperoni",
    size: "XL",
    toppings: ["cheese", "sauce", "pepperoni"],
    crust: "pan",
    price: 2
  })]
}

export default class PizzaService {
  constructor() {
    console.log("Howdy from pizza service........")
  }
  get Pizza() {
    return _state.pizzas.map(pizza => new Pizza(pizza))
  }
}