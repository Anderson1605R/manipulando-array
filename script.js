let input = document.querySelector("input#text");
const include = document.querySelector("button#include");
const exclude = document.querySelector("button#exclude");
const array = [];

function submitInput() {
  const text = input.value.trim();
  if (!text.length) {
    return alert("Digite algo!");
  }
  array.push(text);
  console.log(array);
  input.value = "";
  input.focus();
}
function excludeInput() {
  if (!array.length) {
    return alert("Não há elemento a ser excluído!");
  }
  const index = array.indexOf(input.value.trim());

  if (index === -1) {
    return alert("Esse elemento não se encontra na lista!");
  }
  const apagar = array.splice(index, 1);
  console.log(apagar, array);
  input.value = "";
  input.focus();
}
