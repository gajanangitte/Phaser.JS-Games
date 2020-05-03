const menu = {
  _courses: {
  appetizers: [],
  mains: [],
  desserts: [],
  },

  get appetizers() {
    return this._courses.appetizers;
  },
  get mains() {
    return this._courses.mains;
  },
  get desserts() {
    return this._courses.desserts;
  },

  set appetizers(appetizer) {
    this._courses.appetizers = appetizer;
  },
  set mains(appetizer) {
    this._courses.mains = appetizer;
  },
  set desserts(appetizer) {
    this._courses.desserts = appetizer;
  },

  get courses() {
    let obj =  {
      appetizers: this.appetizers,
      mains: this.mains,
      desserts: this.desserts,
    };

    return obj;
  },

  addDishToCourse(courseName, dishName, dishPrice) {
    let dish = {
      name: dishName,
      price: dishPrice,
    };

    this._courses[courseName].push(dish);
  },

  getRandomDishFromCourse(courseName) {
    
    let dishes = this._courses[courseName]; 
    return dishes[Math.floor(Math.random()*(dishes.length))];
  },

  generateRandomMeal() {
    
    appetizer = this.getRandomDishFromCourse('appetizers');
    main = this.getRandomDishFromCourse('mains');
    dessert = this.getRandomDishFromCourse('desserts');

    let total_price = appetizer.price + main.price + dessert.price;

    return `Dishes: ${appetizer.name}, ${main.name}, ${dessert.name}.   \nTotal price $ ${total_price}`;
  }

};

menu.addDishToCourse('appetizers', 'Caesar Salad', 4.25);
menu.addDishToCourse('appetizers', 'Indian Salad', 10.25);
menu.addDishToCourse('appetizers', 'Russian Salad', 12.25);

menu.addDishToCourse('mains', 'Caesar liver', 567.25);
menu.addDishToCourse('mains', 'Brutus Eye', 123.25);
menu.addDishToCourse('mains', "Anthony's guts", 1000.25);

menu.addDishToCourse('desserts', 'Ice', 1.25);
menu.addDishToCourse('desserts', 'Cream', 2.25);

// console.log(menu.getRandomDishFromCourse('appetizers'));
console.log(menu.generateRandomMeal());


