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

  const handleSubmit = () => {
    const parsedInputs: Record<number, number> = {};
    for (const key in inputs) {
      parsedInputs[Number(key)] = parseFloat(inputs[Number(key)]) || 0;
    }

    const resultFunc = calculationsById[data.id];
    if (resultFunc) {
      setOutputs(resultFunc(parsedInputs));
    } else {
      setOutputs(['Calculation function not found.']);
    }
  };

  const calculationsById: Record<number, (inputs: Record<number, number>) => string[]> = {
    1: (i) => [formatPrices(calcFunctions.MonthlyPaymentWithMonths(i[0], i[1], i[2])), formatPrices(calcFunctions.loanValueMonths(i[0], i[1], i[2]))],
    2: (i) => [formatPrices(calcFunctions.maxMortgageMonthly(i[0], i[1])), formatPrices(calcFunctions.maxLoanAmountMonths(i[0], i[1], i[2], i[3], i[4]))],
    3: (i) => [formatPrices(calcFunctions.MonthlyPaymentWithMonths(i[0], i[1], i[2])), formatPrices(calcFunctions.totalPaymentClosing(i[0], i[1], i[2], i[3]))],
    4: (i) => [formatPrices(calcFunctions.mortgageAcceleration(i[0], i[1], i[2], i[3], i[4], 1)), formatPrices(calcFunctions.mortgageAcceleration(i[0], i[1], i[2], i[3], i[4], 2))],
    5: (i) => [formatPrices(calcFunctions.creditCardDebtTotalMonths(i[0], i[1], i[2])), formatPrices(calcFunctions.creditCardDebtTotalInterest(i[0], i[1], i[2]))],
    6: (i) => [formatPrices(calcFunctions.leaseMonthlyPaymentResidual(i[0], i[1], i[2], i[3], i[4])), formatPrices(calcFunctions.leaseTotalInterestResidual(i[0], i[1], i[2], i[3], i[4]))],
    7: (i) => [formatPrices(calcFunctions.carAffordabilityTotal(i[0], i[1], i[2], i[3])), formatPrices(calcFunctions.carAffordabilityInterest(i[0], i[1], i[2], i[3]))],
    8: (i) => [formatPrices(calcFunctions.collegeTotalCost(i[0], i[1], i[2], i[3])), formatPrices(calcFunctions.collegeAnnualSavings(i[0], calcFunctions.collegeTotalCost(i[0], i[1], i[2], i[3])))],
    9: (i) => [formatPrices(calcFunctions.annualSavingsNeeded(i[0], i[1], i[2]))],
    10: (i) => [formatPrices(calcFunctions.savingsAccumulated(i[0], i[1], i[2]))],
    11: (i) => [formatPrices(calcFunctions.equivalentYield(i[0], i[1]))],
    12: (i) => [formatPrices(calcFunctions.totalSavings(i[0], i[1], i[2], i[3])), formatPrices(calcFunctions.yearlySpending(i[0], i[1], i[2], i[3]))],
    13: (i) => [formatPrices(calcFunctions.calculateRMD(i[0], i[1]) ?? 0)],
    14: (i) => [formatPrices(calcFunctions.futureCost(i[0], i[1], i[2]))],
    15: (i) => [formatPrices(calcFunctions.taxesPenalties(i[0], i[1])), formatPrices(calcFunctions.remainingWithdrawal(i[0], i[1]))],
    16: (i) => [formatPrices(calcFunctions.portfolioLifespan(i[0], i[1], i[2], i[3]))],
    17: (i) => [formatPrices(calcFunctions.federalTax(i[0], i[1], i[2], i[3]))],
    18: (i) => [formatPrices(calcFunctions.taxableGrowth(i[0], i[1], i[2], i[3], i[4])), formatPrices(calcFunctions.deferredGrowth(i[0], i[1], i[2], i[3]))],
    19: (i) => [formatPrices(calcFunctions.projectedIRABalance(i[0], i[1], i[2], i[3], i[4], i[5])), formatPrices(calcFunctions.iraAfterTaxValue(i[0], i[1], i[2], i[3], i[4], i[5])), formatPrices(calcFunctions.rothAfterTax(i[0], i[1], i[2], i[3], i[4], i[5]))],
    20: (i) => [formatPrices(calcFunctions.estateTax(i[0], i[1]))]
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
