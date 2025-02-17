function appendToDisplay(value) {
  const display = document.getElementById('display');
  display.textContent += value;  
}

function clearDisplay() {
  const display = document.getElementById('display');
  display.textContent = ''; 
}

function calculateDisplay() {
  const display = document.getElementById('display');
  try {
    const result = eval(display.textContent);
    display.textContent = result;
  } catch (error) {
    display.textContent = 'Error'; 
  }
}
