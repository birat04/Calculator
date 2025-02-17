function appendToDisplay(value) {
  const display = document.getElementById('display');
  display.value += value;  
}

function clearDisplay() {
  const display = document.getElementById('display');
  display.value = ''; 
}

function calculateDisplay() {
  const display = document.getElementById('display');
  try {
    
    const result = eval(display.value);
    display.value = result;  
  } catch (error) {
    display.value = 'Error';  
  }
}

document.addEventListener('keydown', function(event) {
  const display = document.getElementById('display');
  
  const allowedKeys = [
    '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 
    '+', '-', '*', '/', '.', '=', 'Enter', 'Backspace'
  ];

  if (allowedKeys.includes(event.key)) {
    if (event.key === 'Backspace') {
      display.value = display.value.slice(0, -1);  
    } else if (event.key === 'Enter' || event.key === '=') {
      calculateDisplay();  
    } else {
      appendToDisplay(event.key);  
    }
  }
});
