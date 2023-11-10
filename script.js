function convertTemperature() {
    const temperatureInput = document.getElementById("temperatureInput").value;
    const unitSelect = document.getElementById("unitSelect");
    const selectedUnit = unitSelect.value;

    if (!temperatureInput || isNaN(temperatureInput)) {
        alert("Please enter a valid temperature.");
        return;
    }

    let result;
    if (selectedUnit === "celsius") {
        result = (parseFloat(temperatureInput) - 32) * (5/9);
        document.getElementById("result").textContent = `${result.toFixed(2)} °C`;
    } else if (selectedUnit === "fahrenheit") {
        result = (parseFloat(temperatureInput) * (9/5)) + 32;
        document.getElementById("result").textContent = `${result.toFixed(2)} °F`;
    } else if (selectedUnit === "kelvin") {
        result = parseFloat(temperatureInput) + 273.15;
        document.getElementById("result").textContent = `${result.toFixed(2)} K`;
    }
}
