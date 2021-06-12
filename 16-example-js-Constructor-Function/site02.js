function Cat(name, weight, age, birthday, color) {
    this.name = name;
    this.weight = weight;
    this.age = age;
    this.birthday = birthday;
    this.color = color;
}

let c1 = new Cat("Litzi", 4.3, 5, new Date(1992, 1-1, 2, 12, 22, 58).toLocaleString(), "grey");
console.log(c1);