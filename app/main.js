import ValuesController from "./Controllers/ValuesController.js";
import PizzaController from "./Controllers/PizzaController.js";


class App {
    constructor() {
        this.controllers = {
            valuesController: new ValuesController(),
            pizzaController: new PizzaController()
        }
    }
}

window['app'] = new App()