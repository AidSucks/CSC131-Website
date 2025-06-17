'use client';

import React, { useState } from "react";
import { Accordion, Card, Button } from "react-bootstrap";
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
        "Impact of Inflaction",
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
    <div className="container py-4">
      <div className="row">
        <div className="col-md-4">
          <Accordion defaultActiveKey="0">
            {calculators.map((category, idx) => (
              <Accordion.Item eventKey={String(idx)} key={category.id}>
                <Accordion.Header>{category.title}</Accordion.Header>
                <Accordion.Body>
                  {category.calcs.map((calc, index) => (
                    <Button
                      key={calc}
                      variant="outline-secondary"
                      className="d-block mb-2 w-100 text-start"
                      onClick={() => setSelectedCalc(category.keys[index])}
                    >
                      {calc}
                    </Button>
                  ))}
                </Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </div>
        <div className="col-md-8">
          {selectedData && (
            <Card>
              <Card.Body>
                <CalculatorField key={selectedCalc} data={selectedData} />
              </Card.Body>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default CalculatorSelector;