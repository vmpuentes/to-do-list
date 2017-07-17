function Task(newTask, date) {
  this.theTask = newTask;
  this.dueDate = date;
}

function ClearInput() {
  $("input#task").val("");
  $("input#completionDate").val("");
}

$(function() {

  $("form#task-info").submit(function(event) {
    event.preventDefault();

    var inputtedTask = $("input#task").val();
    var inputtedDate = $("input#completionDate").val();

    var newTask = new Task(inputtedTask, inputtedDate);
  });
});
