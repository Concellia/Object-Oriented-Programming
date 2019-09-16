class Person {
  constructor(name, age, gender, interests) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.interests = interests;
  }
  greet() {
    return `Hi my name is ${this.name}, I am ${this.age} years old. I am a ${
      this.gender
    } I love ${this.interests[0]} and ${this.interests[1]}.`;
  }
}
