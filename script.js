let input = document.querySelector("input#text");
const include = document.querySelector("button#include");
const exclude = document.querySelector("button#exclude");
const array = [];

function submitInput() {
  const text = input.value;
  if (text.length === 0) {
    return alert("Digite algo!");
  }
  array.push(text);
  console.log(array);
  input.value = "";
  input.focus();
}
function excludeInput() {
  if (array.length === 0) {
    return alert("Não a intens a serem removidos");
  }
  array.forEach((element, index) => {
    if (element !== input.value) {
      alert("Não existe esse elemento!");
    } else {
      const apagar = array.splice(index, 1);
      console.log(apagar), console.log(array);
      input.value = "";
      input.focus();
    }
  });
}
