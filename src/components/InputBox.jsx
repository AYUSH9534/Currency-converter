// Importing necessary dependencies from the 'react' library
import React, { useId } from 'react';

// Define a functional component named InputBox that takes various props as parameters
function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = "usd",
    amountDisable = false,
    currencyDisable = false,
    className = "",
}) {
    // Generate a unique ID for the amount input field using the useId hook
    const amountInputId = useId();

    // Render the component
    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            {/* Left side of the input box with the amount input */}
            <div className="w-1/2">
                {/* Label for the amount input */}
                <label htmlFor={amountInputId} className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                {/* Input field for entering the amount */}
                <input
                    id={amountInputId}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled={amountDisable}
                    value={amount}
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                />
            </div>
            {/* Right side of the input box with the currency selection */}
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                {/* Label for the currency selection */}
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                {/* Dropdown/select box for choosing the currency */}
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectCurrency}
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                    disabled={currencyDisable}
                >
                    {/* Mapping over the currencyOptions array to populate the dropdown options */}
                    {currencyOptions.map((currency) => (
                        <option key={currency} value={currency}>
                            {currency}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
}

// Export the InputBox component as the default export of this module
export default InputBox;
