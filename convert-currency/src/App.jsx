import { useState } from "react";
import InputBox from "./components/InputBox";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

const App = () => {
  const [amount, updateAmount] = useState("");
  const [fromCurrency, updateFrom] = useState("usd");
  const [toCurrency, updateTo] = useState("inr");
  const [exchange, updateExchange] = useState(0);

  const currencyInfo = useCurrencyInfo(fromCurrency);
  const options = Object.keys(currencyInfo);

  const swap = () => {
    updateTo(fromCurrency);
    updateFrom(toCurrency);
    updateAmount(exchange);
    updateExchange(amount);
  };

  const conversion = () => {
    updateExchange((amount * currencyInfo[toCurrency]).toFixed(2));
  };

  return (
    <main className="h-screen w-full flex justify-center items-center bg-cover bg-no-repeat bg-[url('./assets/wallpaper.webp')] text-white font-semibold antialiased">
      <section className="h-3/4 w-1/2 p-4 backdrop-blur-xs border-2 border-slate-200 rounded-md shadow shadow-black">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            conversion();
          }}
          className="h-full w-full flex flex-col items-center justify-evenly"
        >
          <InputBox
            label={"From"}
            amount={amount}
            currencyOptions={options}
            onCurrencyChange={(currency) => updateFrom(currency)}
            onAmountChange={(amount) => updateAmount(amount)}
            selectedCurrency={fromCurrency}
          />
          <button
            type="button"
            className="px-4 py-2 border-2 border-slate-200 rounded-md shadow shadow-black text-xl truncate transition-all duration-300 ease-in-out hover:scale-105"
            onClick={swap}
          >
            Swap Currency
          </button>
          <InputBox
            label={"To"}
            amount={exchange}
            currencyOptions={options}
            onCurrencyChange={(currency) => updateTo(currency)}
            onAmountChange={(amount) => updateAmount(amount)}
            selectedCurrency={toCurrency}
            disableAmount
          />
          <button
            type="submit"
            className="px-4 py-2 border-2 border-slate-200 rounded-md shadow shadow-black text-xl truncate transition-all duration-300 ease-in-out hover:scale-105"
          >
            Convert {fromCurrency.toUpperCase()} Into {toCurrency.toUpperCase()}
          </button>
        </form>
      </section>
    </main>
  );
};

export default App;
