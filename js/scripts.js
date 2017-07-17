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

    if (inputtedPriority === "High") {
      $("h4").show();
      $("#to-do-high").append("<li><span class='thisTask'>" + newTask.theTask + " by " +  newTask.dueDate + "</span></li>");
    } else if (inputtedPriority === "Medium") {
      $("h5").show();
      $("#to-do-medium").append("<li><span class='thisTask'>" + newTask.theTask + " by " +  newTask.dueDate + "</span></li>");
    } else {
      $("h6").show();
      $("#to-do-low").append("<li><span class='thisTask'>" + newTask.theTask + " by " +  newTask.dueDate + "</span></li>");
    }

    clearInput();
  });
  // $("form#mexis").submit(function(event) {
  //   event.preventDefault();
  //   var newMexis = $(#priority).val();
});


 // <input type="checkbox" name="work-transportation" value="bike">
