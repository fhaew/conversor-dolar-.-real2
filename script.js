const convertButton = document.querySelector(".convertButton");

function convertValues() {
  const inputCurrencyValue = document.querySelector(".inputmoeda").value;
  const currencyValueToConvert = document.querySelector(".currency-value-to-convert"); // valor convertido
  const currencyValueConvert = document.querySelector(".currency-value"); // valor da moeda original

  const dolarToday = 5.6;
  const convertedValue = inputCurrencyValue / dolarToday;

  currencyValueConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL"
  }).format(inputCurrencyValue);

  currencyValueToConvert.innerHTML = convertedValue;
}

convertButton.addEventListener("click", convertValues);