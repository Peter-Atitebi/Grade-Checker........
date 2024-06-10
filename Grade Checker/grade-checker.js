function gradechecker() {
  let gradeInput = document.getElementById("inputgrade").value;

  let display = document.getElementById("display");

  if (gradeInput != "" && gradeInput >= 0 && gradeInput < 40) {
    display.innerHTML = "F... Fail";
  } else if (gradeInput >= 40 && gradeInput < 45) {
    display.innerHTML = "E... Pass";
  } else if (gradeInput >= 45 && gradeInput < 50) {
    display.innerHTML = "D... Average";
  } else if (gradeInput >= 50 && gradeInput < 60) {
    display.innerHTML = "C... Credit";
  } else if (gradeInput >= 60 && gradeInput < 70) {
    display.innerHTML = "B... Good";
  } else if (gradeInput >= 70 && gradeInput <= 100) {
    display.innerHTML = "A... Excellent";
  } else {
    display.innerHTML = "Input An Actual Score";
  }
}
