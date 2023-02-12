class Person {
    constructor(name) {
      this.name = name;
    }
  
    greet() {
      return "Hello, my name is " + this.name + ". Nice to meet you!";
    }
  }
  
  class Developer extends Person {
    constructor(name, skills) {
      super(name);
      this.skills = skills;
    }
  }
  
  const developer = new Developer("Preeti", ["JavaScript", "Java", "HTML", "CSS"]);
  console.log(developer.greet());
  