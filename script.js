// Get the HTML input elements with the IDs "fahrenheit" and "celsius"
const fahrenheitInput = document.getElementById("fahrenheit");
const celsiusInput = document.getElementById("celsius");

// Add an event listener to the "fahrenheit" input element for when the input changes
fahrenheitInput.addEventListener("input", () => {
  // Parse the value entered in the "fahrenheit" input as a floating-point number
  const fahrenheit = parseFloat(fahrenheitInput.value);

  // Calculate the equivalent temperature in Celsius
  const celsius = ((fahrenheit - 32) * 5) / 9;

  // Set the value of the "celsius" input to the calculated Celsius temperature with 2 decimal places
  celsiusInput.value = celsius.toFixed(2);
});

// Add an event listener to the "celsius" input element for when the input changes
celsiusInput.addEventListener("input", () => {
  // Parse the value entered in the "celsius" input as a floating-point number
  const celsius = parseFloat(celsiusInput.value);

  // Calculate the equivalent temperature in Fahrenheit
  const fahrenheit = (celsius * 9) / 5 + 32;

  // Set the value of the "fahrenheit" input to the calculated Fahrenheit temperature with 2 decimal places
  fahrenheitInput.value = fahrenheit.toFixed(2);
});
