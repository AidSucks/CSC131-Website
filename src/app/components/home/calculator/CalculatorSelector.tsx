'use client';

import React, { useState } from "react";
import CalculatorField from "./calculatorField";
import calculatorData from "../data/calculatorData.json";

const CalculatorSelector = () => {
  const calculators = [
    {
      id: "loanCredit",
      title: "Loan & Credit Cards",
      calcs: [
        "Loan Payoff",
        "Home Affordability",
        "Mortage Refinancing",
        "Mortage Acceleration",
        "Credit Card Debt",
        "Lease Payment",
        "Car Affordability",
      ],
      keys: [1, 2, 3, 4, 5, 6, 7],
    },
    {
      id: "saveInvest",
      title: "Saving & Investing",
      calcs: [
        "College Funding",
        "Saving Goals",
        "Savings Accumulation",
        "Taxable Equivalent Yield",
      ],
      keys: [8, 9, 10, 11],
    },
    {
      id: "retireInflation",
      title: "Retirement & Inflation",
      calcs: [
        "Cost of Retirement",
        "Required Minimum Distributions",
        "Impact of Inflation",
        "Retirement Plan Early Distribution",
        "Retirement Portfolio Lifespan"
      ],
      keys: [12, 13, 14, 15, 16],
    },
    {
      id: "taxesIRA",
      title: "Taxes & IRAS",
      calcs: [
        "Federal Income Tax",
        "Tax-Deferred Savings",
        "Roth IRA Conversion",
        "Estate Taxes",
      ],
      keys: [17, 18, 19, 20],
    },
  ];

  const [selectedCalc, setSelectedCalc] = useState<number | null>(null);
  const selectedData = calculatorData.find((calc) => calc.id === selectedCalc);

  return (
    <div>
      {calculators.map((calculator) => (
        <div key={calculator.id}>
          <h2>{calculator.title}</h2>
          <div>
            {calculator.calcs.map((calc, index) => (
              <button
                key={calc}
                onClick={() => setSelectedCalc(calculator.keys[index])}
              >
                {calc}
              </button>
            ))}
          </div>
        </div>
      ))}
      {selectedData && (
        <CalculatorField data={selectedData} />
      )}
    </div>
  );
};

export default CalculatorSelector;
