



export default class Pizza {
  constructor(data) {
    console.log("Salutations from pizza. Ah a talking pizza!!!")
    this.name = data.name
    this.size = data.size
    this.toppings = data.toppings
    this.crust = data.crust
    this.price = data.price

  }
}