// Constructor Pattern
// Use to create new objects with their own object scope.

const Task = function Task(name) {
  this.name = name;
  this.completed = false;
};

Task.prototype.complete = function complete() {
  console.log(`completed task: ${this.name}`);
};

Task.prototype.save = function save() {
  console.log(`saving Task: ${this.name}`);
};

module.exports = Task;
