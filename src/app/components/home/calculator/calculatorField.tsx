'use client';

import React, { useState, useEffect } from 'react';
import * as calcFunctions from './calcFunctions';
import { Form, Button } from 'react-bootstrap';

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
      <h3>{data.title}</h3>
      <p>{data.description}</p>
      <Form>
        {data.inputTitles.map((label, idx) => (
          <Form.Group className="mb-3" controlId={`input-${idx}`} key={idx}>
            <Form.Label>{label}</Form.Label>
            <Form.Control
              type="number"
              placeholder={label}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange(e, idx)}
            />
          </Form.Group>
        ))}
        <Button variant="primary" onClick={handleSubmit}>
          Calculate
        </Button>
      </Form>
      <div className="mt-3">
        {outputs.map((output, idx) => (
          <p key={idx}>
            <strong>{data.outputTitles[idx]}:</strong> {output}
          </p>
        ))}
      </div>
    </div>
  );
};

export default CalculatorField;
