'use client';

import React, { useState, useEffect } from 'react';
import * as calcFunctions from './calcFunctions';
import { Form, Button } from 'react-bootstrap';

interface CalculatorFieldProps {
  data: {
    id: number;
    title: string;
    description: string;
    inputTitles: string[];
    outputTitles: string[];
    badges: string[];
  };
}

const CalculatorField: React.FC<CalculatorFieldProps> = ({ data }) => {
  const [inputs, setInputs] = useState<Record<number, string>>({});
  const [outputs, setOutputs] = useState<string[]>([]);

  const handleInputChange = (e: React.ChangeEvent<any>, idx: number) => {
    const target = e.target as HTMLInputElement;
    setInputs((prev) => ({
      ...prev,
      [idx]: target.value,
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
    setOutputs([]);
  };

  const calculationsById: Record<number, (inputs: Record<number, number>) => string[]> = {
    1: (inputs) => [
      formatPrices(calcFunctions.MonthlyPaymentWithMonths(inputs[0], inputs[1], inputs[2])),
      formatPrices(calcFunctions.loanValueMonths(inputs[0], inputs[1], inputs[2]))
    ],
    2: (inputs) => [
      formatPrices(calcFunctions.maxMortgageMonthly(inputs[0], inputs[1])),
      formatPrices(calcFunctions.maxLoanAmountMonths(inputs[0], inputs[1], inputs[2], inputs[3], inputs[4]))
    ]
  };

  const handleSubmit = () => {
    const parsedInputs: Record<number, number> = {};
    for (const key in inputs) {
      parsedInputs[Number(key)] = parseFloat(inputs[Number(key)]) || 0;
    }

    const resultFunc = calculationsById[data.id];
    if (resultFunc) {
      setOutputs(resultFunc(parsedInputs));
    }
  };


  return (
    <div>
      <h3>{data.title}</h3>
      <p>{data.description}</p>
      <Form>
        {data.inputTitles.map((label, idx) => (
          <Form.Group className="mb-3" controlId={`input-${idx}`} key={idx}>
            <Form.Label>{label}</Form.Label>
            <Form.Control
              type="number"
              placeholder={label}
              value={inputs[idx] ?? ''}
              onChange={(e) => handleInputChange(e, idx)}
            />
          </Form.Group>
        ))}
        <Button variant="primary" onClick={handleSubmit}>
          Calculate
        </Button>
      </Form>
      <div className="mt-3">
        {outputs.map((output, idx) => (
          data.outputTitles[idx] && (
            <p key={idx}>
              <strong>{data.outputTitles[idx]}:</strong> {output}
            </p>
          )
        ))}
      </div>
    </div>
  );
};

export default CalculatorField;