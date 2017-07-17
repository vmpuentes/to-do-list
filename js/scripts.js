//back-end logic

//constructor that creates Task objects
function Task(newTask, date) {
  this.theTask = newTask;
  this.dueDate = date;
}

function clearInput() {
  $("input#task").val("");
  $("input#completionDate").val("");
  $("#priority").val("High")
}
//front-end logic
$(function() {

  $("form#task-info").submit(function(event) {
    event.preventDefault();

    var inputtedTask = $("input#task").val();
    var inputtedDate = $("input#completionDate").val();
    var inputtedPriority = $("#priority").val();

    var newTask = new Task(inputtedTask, inputtedDate);
    debugger;

    if (inputtedPriority === "High") {
      
      $("#to-do-high").append("<li><span class='thisTask'>" + newTask.theTask + " by " +  newTask.dueDate + "</span></li>");
    } else if (inputtedPriority === "Medium") {
      $("#to-do-medium").append("<li><span class='thisTask'>" + newTask.theTask + " by " +  newTask.dueDate + "</span></li>");
    } else {
      $("#to-do-low").append("<li><span class='thisTask'>" + newTask.theTask + " by " +  newTask.dueDate + "</span></li>");
    }

    clearInput();
  });
});
