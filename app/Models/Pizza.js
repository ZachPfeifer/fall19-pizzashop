



export default class Pizza {
  constructor(data) {
    console.log("Salutations from pizza. Ah a talking pizza!!!")
    this.name = data.name
    this.size = data.size
    this.toppings = data.toppings
    this.crust = data.crust
    this.price = data.price

  }

  getTemplate(index) {
    return `
        <div class="col-4">
            <h1>${this.name}</h1>
            <h3>${this.size}</h3>
            <h3>${this.crust}</h3>
            <ul>
                <li>${this.toppings}</li>
            </ul>
            <form onsubmit="app.controllers.pizzaController.addTopping(event, ${index})"> 
              <div class="form-group">
                <label for="topping">topping</label>
                <input type="text" class="form-control" name="topping" placeholder="pizza topping" required>
              </div>
            </form>
            <h3>${this.price}</h3>
        </div>
    `
  }
}