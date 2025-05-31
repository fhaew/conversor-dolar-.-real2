const convertButton = document.querySelector("button"); // ou ".convertButton" se for o nome da classe correta

function convertValues() {
  const input = document.querySelector("input"); // ou ".inputmoeda" se essa for a classe correta
  const currencyValueToConvert = document.querySelectorAll(".currency-value")[1]; // valor convertido
  const currencyValueOriginal = document.querySelectorAll(".currency-value")[0]; // valor original

  const dolarToday = 5.6;

  // Converte string para número, removendo R$, pontos e substituindo vírgula por ponto
  const inputCurrencyValue = parseFloat(
    input.value.replace("R$", "").replace(/\./g, "").replace(",", ".")
  );

  if (isNaN(inputCurrencyValue)) {
    alert("Digite um valor válido!");
    return;
  }

  const convertedValue = inputCurrencyValue / dolarToday;

  currencyValueOriginal.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL"
  }).format(inputCurrencyValue);

  currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD"
  }).format(convertedValue);
}

convertButton.addEventListener("click", convertValues);
