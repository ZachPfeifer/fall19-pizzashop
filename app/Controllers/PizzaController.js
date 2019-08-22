import PizzaService from "../Services/PizzaService.js";

let _pizzaService = new PizzaService()


function _draw() {
  let template = ``
  let pizzas = _pizzaService.Pizza
  pizzas.forEach((pizza, index) => {
    template += pizza.getTemplate(index)
  })
  document.querySelector('#pizza').innerHTML = template
}


export default class PizzaController {
  constructor() {
    console.log("Hi from pizza controller!!111!11!!")
    _draw()
  }

  addPizza(event) {
    event.preventDefault()
    let form = event.target
    let newPizza = {
      name: form.name.value
    }
    _pizzaService.addPizza(newPizza)
    _draw()
  }
  addTopping(event, pizzaIndex) {
    event.preventDefault()
    let form = event.target
    let newTopping = form.topping.value
    _pizzaService.addTopping(newTopping, pizzaIndex)
    _draw()
  }
}