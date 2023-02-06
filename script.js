let array = [];
let len = 0;

function addTask() {
  len++;
  // Get the values from the form
  var description = document.getElementById("description").value;
  var severity = document.getElementById("severity").value;
  var assignedTo = document.getElementById("assignedTo").value;

  //   get uinque id
  let guid = () => {
    let s4 = () => {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    };

    return s4() + s4() + "-" + s4() + "-" + s4() + "-" + s4();
  };

  let obj = {
    Id: guid(),
    description: description,
    severity: severity,
    assignedTo: assignedTo,
  };

  array.push(obj);

  const stringifiedArr = JSON.stringify(array);
  localStorage.setItem("array", stringifiedArr);

  // Create a new card element
  var task = document.createElement("div");
  task.classList.add("task");
  task.innerHTML = `
      <p>isuue id:${guid()}</p>
      <p>Description: ${description}</p>
      <p>Severity: ${severity}</p>
      <p>Status: New</p>
      <p>Assigned To: ${assignedTo}</p>
      
    `;

  // Remove existing task card element
  var existingTask = document.getElementById("task-card");
  if (existingTask) {
    existingTask.remove();
  }

  task.id = "task-card";

  // Add the card to the body of the page
  document.body.appendChild(task);
}

function showPrev() {
  if (len > 1) {
    var task = document.createElement("div");
    task.classList.add("previous");
    task.innerHTML = `
        <h1>Previous User</h1>
        <p>isuue id:${array[len - 2].Id}</p>
        <p>Description: ${array[len - 2].description}</p>
        <p>Severity: ${array[len - 2].severity}</p>
        <p>Status: New</p>
        <p>Assigned To: ${array[len - 2].assignedTo}</p>
       
      `;

    document.body.appendChild(task);
    len--;
    // Remove existing task card element
    var existingTask = document.getElementById("task-card");
    if (existingTask) {
      existingTask.remove();
    }
    task.id = "task-card";
  } else {
    alert("This is last User");
  }
}
function showNext() {
  if (len < array.length - 1) {
    var task = document.createElement("div");
    task.classList.add("Next");
    task.innerHTML = `
        <h1>Next User</h1>
        <p>isuue id:${array[len + 1].Id}</p>
        <p>Description: ${array[len + 1].description}</p>
        <p>Severity: ${array[len + 1].severity}</p>
        <p>Status: New</p>
        <p>Assigned To: ${array[len + 1].assignedTo}</p>
        
      `;

    document.body.appendChild(task);
    len++;
    // Remove existing task card element
    var existingTask = document.getElementById("task-card");
    if (existingTask) {
      existingTask.remove();
    }
    task.id = "task-card";
  } else {
    alert("This is last User");
  }
}
