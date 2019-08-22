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
  deleteTopping(pizzaIndex, toppingIndex) {
    _state.pizzas[pizzaIndex].toppings.splice(toppingIndex, 1)
  }
  deletePizza(index) {
    _state.pizzas.splice(index, 1)
  }
  addTopping(newTopping, pizzaIndex) {
    _state.pizzas[pizzaIndex].toppings.push(newTopping)
  }
  addPizza(newPizza) {
    _state.pizzas.push(new Pizza(newPizza))
    console.log(_state.pizzas)
  }
  constructor() {
    console.log("Howdy from pizza service........")
  }
  get Pizza() {
    return _state.pizzas.map(pizza => new Pizza(pizza))
  }
}