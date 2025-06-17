import { useId } from "react";

const InputBox = ({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectedCurrency = "usd",
  disableAmount = false,
  disableCurrency = false,
}) => {
  const amountId = useId();
  const currencyId = useId();

  return (
    <div className="h-auto w-full flex gap-2 text-lg">
      <div className="h-auto w-1/2 p-2 flex flex-col border-2 border-slate-200 rounded-md shadow shadow-black">
        <label htmlFor={amountId} className="p-2 text-xl">
          {label}
        </label>
        <input
          id={amountId}
          type="number"
          placeholder="Amount"
          className="h-auto w-full p-2"
          disabled={disableAmount}
          value={amount}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
        />
      </div>
      <div className="h-auto w-1/2 p-2 flex flex-col border-2 border-slate-200 rounded-md shadow shadow-black">
        <label htmlFor={currencyId} className="p-2 text-xl">
          {label}
        </label>
        <select
          id={currencyId}
          className="h-auto w-full p-2"
          value={selectedCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={disableCurrency}
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency} className="text-black">
              {String(currency).toUpperCase()}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default InputBox;
