import PizzaService from "../Services/PizzaService.js";

let _pizzaService = new PizzaService()


function _draw() {
  document.querySelector('#pizza').innerHTML = template
}


export default class PizzaController {
  constructor() {
    console.log("Hi from pizza controller!!111!11!!")
  }
}