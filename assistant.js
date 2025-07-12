//constructor function
function PersonalAssistant(name) {
  this.name = name;
  this.tasks = [];
  this.mood = "neutral";
}

PersonalAssistant.prototype.addTask = function(task) {
  this.tasks.push(task);
  console.log(`Task added: ${task}`);
};

PersonalAssistant.prototype.completeTask = function() {
  if (this.tasks.length > 0) {
    const done = this.tasks.shift();
    console.log(`Completing task: ${done}`);
    this.mood = "accomplished";
  } else {
    console.log("No tasks left to complete!");
  }
};

PersonalAssistant.prototype.reportMood = function() {
  console.log(`Mood: ${this.mood}`);
};

