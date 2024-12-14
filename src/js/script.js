// Identify and Select Needed Elements
const goalForm = document.querySelector("#goal-form");
const goalInput = document.querySelector("#goal-input");
const goalList = document.querySelector("#goal-list");
const clearAll = document.querySelector("#clear-goals-btn");

// Listeners - two arguments 1st (event type) 2nd - callback function
goalForm.addEventListener("submit", onAddGoalSubmit);
goalList.addEventListener("click", onGoalDelete);

// Function
function onAddGoalSubmit(event) {
  event.preventDefault();

  const newGoal = goalInput.value;

  // add validation
  if (!goalInput.value) {
    alert("Please enter the goal!");
    return;
  }
  // create the list item as parent element
  const li = createListItem();
  // create the span item that contains the new goal
  // later we will append to li
  const span = createSpanElement(newGoal);
  li.appendChild(span);
  // create the button
  const button = createButton();
  li.appendChild(button);
  // append the newly created list to the ul
  goalList.appendChild(li);
  goalInput.value = "";
}

// Add remove functionality
function onGoalDelete(event) {
  // we need to make sure that user clicks on icon
  // console.log(event.target.classList.contains('fa-eraser'));
  if (event.target.classList.contains("fa-eraser")) {
    removeGoal(event.target.parentElement.parentElement);
  }
}

// Helper Functions
function removeGoal(goal){
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
