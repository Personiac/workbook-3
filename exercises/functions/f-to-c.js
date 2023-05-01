function convertFtoC(temp) {
    const celsius =  (temp - 32) * (5 / 9);
    return celsius;
}

let currentTemp = 92;
let celsiusTemp = convertFtoC(currentTemp);

console.log(`Celsius: ${celsiusTemp.toFixed(2)}`);
