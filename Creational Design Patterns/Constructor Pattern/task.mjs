// Constructor Pattern (with ES6 features).
// Use to create new objects with their own object scope.

class Task {
  constructor(name) {
    this.name = name;
    this.completed = false;
  }

  complete() {
    console.log(`completing task: ${this.name}`);
  }

  save() {
    console.log(`saving Task: ${this.name}`);
  }
}

const task2 = new Task('Create a demo for constroctor');

task2.complete();
task2.save();
