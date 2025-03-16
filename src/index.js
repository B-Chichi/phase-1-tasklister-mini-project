document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector("submit");
  const newTaskForm = document.getElementById("create-task-form");

  document.addEventListener("click", () => {
    console.log("Clicked");

    const taskList = [];

    const newTaskDescription = document.getElementById(
      "new-task-description"
    ).value;
    console.log(newTaskDescription);
    taskList.push(newTaskDescription);
    console.log(taskList);
  });
  newTaskForm.addEventListener("click", (value) => {
    value.preventDefault();
  });
});
