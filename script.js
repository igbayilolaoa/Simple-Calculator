function appendToResult(value) {
  document.getElementById('result').value += value;
}

function calculateResult() {
  var result = document.getElementById('result').value;
  try {
      var calculatedResult = eval(result);
      document.getElementById('result').value = calculatedResult;
  } catch (error) {
      document.getElementById('result').value = 'Error';
  }
}

function clearResult() {
  document.getElementById('result').value = '';
}

function deleteCharacter() {
  var result = document.getElementById('result').value;
  document.getElementById('result').value = result.slice(0, -1);
}
