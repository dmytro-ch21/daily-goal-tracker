const goalForm = document.querySelector("#goal-form");
const goalInput = document.querySelector("#goal-input");
const goalList = document.querySelector("#goal-list");
const clearAll = document.querySelector("#clear-goals-btn");

goalForm.addEventListener("submit", onAddGoalSubmit);
goalList.addEventListener("click", onGoalDelete);
clearAll.addEventListener("click", onClearAll);
document.addEventListener("DOMContentLoaded", displayGoals);

function displayGoals() {
  const goalsFromLocalStorage = getGoalsFromLocalStorage();
  goalsFromLocalStorage.forEach((goal) => addGoalToDOM(goal));
}

function onAddGoalSubmit(event) {
  event.preventDefault();
  const newGoal = goalInput.value;
  if (!goalInput.value) {
    alert("Please enter the goal!");
    return;
  }
  goalInput.value = "";
  addGoalToDOM(newGoal);
  addGoalToLocalStorage(newGoal);
}

function onGoalDelete(event) {
  if (event.target.classList.contains("fa-eraser")) {
    const goalText = event.target.parentElement.parentElement.innerText;
    removeGoal(event.target.parentElement.parentElement);
    removeFromStorage(goalText);
  }
}

function removeFromStorage(goal) {
  const localStorageGoals = getGoalsFromLocalStorage();
  const filteredGoals = localStorageGoals.filter((item) => item !== goal);
  localStorage.setItem("goals", JSON.stringify(filteredGoals));
}

function onClearAll() {
  Array.from(goalList.children).forEach((goal) => goal.remove());
  localStorage.clear();
}

function addGoalToDOM(goal) {
  const li = createListItem();
  const span = createSpanElement(goal);
  li.appendChild(span);
  const button = createButton();
  li.appendChild(button);
  goalList.appendChild(li);
}

function addGoalToLocalStorage(goal) {
  let goalsArray = getGoalsFromLocalStorage();
  goalsArray.push(goal);
  localStorage.setItem("goals", JSON.stringify(goalsArray));
}

function getGoalsFromLocalStorage() {
  let goalsArray;

  if (localStorage.getItem("goals") === null) {
    goalsArray = [];
  } else {
    goalsArray = JSON.parse(localStorage.getItem("goals"));
  }
  return goalsArray;
}

function removeGoal(goal) {
  if (confirm("Do you really want to remove this goal?")) {
    goal.remove();
  }
}

function createListItem() {
  const li = document.createElement("li");
  li.className = "goal-item";
  return li;
}

function createSpanElement(goalText) {
  const span = document.createElement("span");
  span.className = "goal-text";
  const textNode = document.createTextNode(goalText);
  span.appendChild(textNode);
  return span;
}

function createButton() {
  const button = document.createElement("button");
  button.className = "btn btn-delete";
  const icon = createIcon();
  button.appendChild(icon);
  return button;
}

function createIcon() {
  const icon = document.createElement("i");
  icon.className = "fa-solid fa-eraser";
  return icon;
}
