function Cat() {
    this.name = "Mitzi";
    this.weight = 5.3;
    this.age = 8;
    this.birthday = new Date(1992, 1-1, 2, 12, 22, 58).toLocaleString();
    this.color = "Black";
}

let c1 = new Cat();
console.log(c1);

