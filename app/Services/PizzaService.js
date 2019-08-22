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
    //extra for savedPizzas()
    this.savedPizzas()
  }
  deletePizza(index) {
    _state.pizzas.splice(index, 1)
    //extra for savedPizzas()
    this.savedPizzas()
  }
  addTopping(newTopping, pizzaIndex) {
    _state.pizzas[pizzaIndex].toppings.push(newTopping)
    //extra for savedPizzas()
    this.savedPizzas()
  }
  addPizza(newPizza) {
    _state.pizzas.push(new Pizza(newPizza))
    console.log(_state.pizzas)
    //extra for savedPizzas()
    this.savedPizzas()
  }
  constructor() {
    console.log("Howdy from pizza service........")
    this.savedPizzas()

  }
  get Pizza() {
    return _state.pizzas.map(pizza => new Pizza(pizza))
  }

  // extra 

  //load pizza
  loadPizzas() {
    let savedPizzas = JSON.parse(localStorage.getItem("pizzas"))
    if (savedPizzas) {
      _state.pizzas = savedPizzas
    }
  }

  //save pizza for next load
  savedPizzas() {
    localStorage.setItem("pizzas", JSON.stringify(_state.pizzas))
  }

}