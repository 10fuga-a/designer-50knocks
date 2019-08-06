
selectAge();
function selectAge () {
  let selectElement = document.getElementById('age');
    for (let i = 0; i <= 200; i++) {
    let option = document.createElement('option');
    option.value = i;
    option.textContent = i;
    selectElement.appendChild(option);
  }
}
