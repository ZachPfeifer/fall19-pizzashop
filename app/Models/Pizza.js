



export default class Pizza {
  constructor(data) {
    console.log("Salutations from pizza. Ah a talking pizza!!!")
    this.name = data.name
    this.size = data.size
    this.toppings = data.toppings
    this.crust = data.crust
    this.price = data.price

  }

  get Template() {
    return `
        <div class="col-4">
            <h1>${this.name}</h1>
            <h3>${this.size}</h3>
            <h3>${this.crust}</h3>
            <ul>
                <li>${this.toppings}</li>
            </ul>
            <h3>${this.price}</h3>
        </div>
    `
  }
}