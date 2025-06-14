'use client';

import React, { useState, useEffect } from 'react';
import * as calcFunctions from './calcFunctions';

type CalculatorFieldProps = {
  data: {
    id: number;
    title: string;
    description: string;
    inputTitles: string[];
    outputTitles: string[];
    badges: string[];
  };
};

const CalculatorField = ({ data }: CalculatorFieldProps) => {
  const [inputs, setInputs] = useState<Record<number, number>>({});
  const [outputs, setValues] = useState<string[]>([]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, key: number) => {
    setInputs((prev) => ({
      ...prev,
      [key]: parseFloat(e.target.value) || 0,
    }));
  };

  const formatPrices = (n: number) =>
    Number(n).toLocaleString('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

  useEffect(() => {
    resetStates();
  }, [data]);

  const resetStates = () => {
    setInputs({});
    setValues([]);
  };

  const calculationsById: Record<number, (inputs: Record<number, number>) => string[]> = {
    1: (inputs) => [
      formatPrices(calcFunctions.MonthlyPaymentWithMonths(inputs[0], inputs[1], inputs[2])),
      formatPrices(calcFunctions.loanValueMonths(inputs[0], inputs[1], inputs[2])),
    ],
    2: (inputs) => [
      formatPrices(calcFunctions.maxMortgageMonthly(inputs[0], inputs[1])),
      formatPrices(calcFunctions.maxLoanAmountMonths(inputs[0], inputs[1], inputs[2], inputs[3], inputs[4])),
    ]
  };

  const handleSubmit = () => {
    const resultFunc = calculationsById[data.id];
    if (resultFunc) {
      setValues(resultFunc(inputs));
    }
  };

  return (
    <div>
      {data.inputTitles.map((label, idx) => (
        <input
          key={idx}
          type="number"
          placeholder={label}
          onChange={(e) => handleInputChange(e, idx)}
        />
      ))}
      <button onClick={handleSubmit}>Calculate</button>
      <div>
        {outputs.map((output, idx) => (
          <div key={idx}>{data.outputTitles[idx]}: {output}</div>
        ))}
      </div>
    </div>
  );
};

export default CalculatorField;
