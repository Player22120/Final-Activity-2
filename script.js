alert("Welcome to my webpage");

const startBtn = document.getElementById("startBtn");
const content = document.getElementById("text-content");
const clearBtn = document.getElementById("clearBtn");
const userName = getName();

function run() {
  const grade = Number(prompt("Enter your grade"));
  if (grade == "" || grade == 0) {
    alert("You need to enter your score");
    return;
  } else if (Number.isNaN(grade)) {
    alert("You need to enter an integer");
    return;
  }
  if (confirm("Do you want to continue?")) {
    let remarks;
    if (grade <= 0 || grade > 100) {
      remarks = "Invalid Grade";
    } else if (grade >= 90) {
      remarks = "Excellent";
    } else if (grade >= 75) {
      remarks = "Passed";
    } else {
      remarks = "Failed";
    }

    content.innerHTML =
      "<h3>Hello " +
      "<span>" +
      userName +
      "!</span></h3><br>" +
      "Your remark: " +
      remarks;
  }

  startBtn.disabled = true;
  clearBtn.disabled = false;
}

function clearContent() {
  startBtn.disabled = false;
  clearBtn.disabled = true;
  content.innerHTML = "";
}

function getName() {
  let enteredName = prompt("Enter your name");
  if (enteredName == "" || enteredName == null) {
    alert("You need to enter your name!!!!");
    return getName();
  } else {
    return enteredName;
  }
}
