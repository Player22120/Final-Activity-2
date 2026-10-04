alert("Welcome to my webpage");

const startBtn = document.getElementById("startBtn");
const content = document.getElementById("text-content");
const clearBtn = document.getElementById("clearBtn");
const userName = getName();

function run() {
  const score = Number(prompt("Enter your score"));
  if (score == "" || score == 0) {
    alert("You need to enter your score");
    return;
  } else if (Number.isNaN(score)) {
    alert("You need to enter an integer");
    return;
  }
  if (confirm("Do you want to continue?")) {
    let remarks;
    if (score <= 0 || score > 100) {
      remarks = "Invalid score";
    } else if (score >= 90) {
      remarks = "Excellent";
    } else if (score >= 75) {
      remarks = "Passed";
    } else {
      remarks = "Failed";
    }

    content.innerHTML =
      "<h3>Hello " +
      "<span>" +
      userName +
      "!</span></h3><br>" +
      "Your score: " +
      score +
      "<br>Your remark: " +
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
