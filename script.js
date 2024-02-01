const screen = document.getElementById("screen");
const buttons = document.querySelectorAll(".btn");
let screenValue = "";
let n = 0;
buttons.forEach((e) => {
  e.addEventListener("click", function (el) {
    let buttonText = el.target.innerText;
    console.log(buttonText);

    if (buttonText == "X") {
      buttonText = "*";
      screenValue += buttonText;
      screen.value = screenValue;
    } else if (buttonText == "=") {
      screen.value = eval(screenValue);
      screenValue = screen.value;
    } else if (buttonText == "C" || buttonText == "on") {
      screenValue = "";
      screen.value = "";
      // } else if (buttonText == "D") {
      //   screenValue -= screenValue[n - 1];
      //   screen.value = screenValue;
    } else {
      screenValue += buttonText;
      screen.value = screenValue;
    }
    n++;
  });
});
// for (item of buttons) {
//   item.addEventListener("click", function (e) {
//     console.log("clicked");
//     const buttonText = e.innerText;
//     console.log(buttonText);
//   });
// }
