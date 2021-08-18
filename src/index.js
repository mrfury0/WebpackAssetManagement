import _ from "lodash";
function component() {
  const element = document.createElement("div");

  //loadash now imported from this scriptnp
  element.innerHTML = _.join(["Hello", "webpack"], " ");

  return element;
}

document.body.appendChild(component());
