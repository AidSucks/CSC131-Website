"use client";

import PageTitle from "@/app/components/PageTitle";
import { useState } from "react";

export default function Page() {

    const [loanAmount, setLoanAmount] = useState("");
    const [interestRate, setInterestRate] = useState("");
    const [loanTerm, setLoanTerm] = useState("");
    const [taxBracket, setTaxBracket] = useState("");
    const [loanPayoffResult, setLoanPayoffResult] = useState(null);




    const [income, setIncome] = useState("");
    const [autoLoanPayments, setAutoLoanPayments] = useState("");
    const [creditCardPayments, setCreditCardPayments] = useState("");
    const [otherObligations, setOtherObligations] = useState("");
    const [mortgageInterestRate, setMortgageInterestRate] = useState("");
    const [mortgageLoanTerm, setMortgageLoanTerm] = useState("");
    const [downPayment, setDownPayment] = useState("");
    const [homeAffordabilityResult, setHomeAffordabilityResult] = useState(null);




    const [principalBalance, setPrincipalBalance] = useState("");
    const [currentInterestRate, setCurrentInterestRate] = useState("");
    const [yearsRemaining, setYearsRemaining] = useState("");
    const [newInterestRate, setNewInterestRate] = useState("");
    const [newLoanTerm, setNewLoanTerm] = useState("");
    const [closingCosts, setClosingCosts] = useState("");
    const [discountPoints, setDiscountPoints] = useState("");
    const [otherFixedCosts, setOtherFixedCosts] = useState("");
    const [mortgageRefinancingResult, setMortgageRefinancingResult] = useState(null);


    const [originalLoanAmount, setOriginalLoanAmount] = useState("");
    const [annualInterestRate, setAnnualInterestRate] = useState("");
    const [originalLoanTerm, setOriginalLoanTerm] = useState("");
    const [paymentsMade, setPaymentsMade] = useState("");
    const [additionalPayment, setAdditionalPayment] = useState("");
    const [mortgageAccelerationResult, setMortgageAccelerationResult] = useState(null);




    const [creditCardBalance, setCreditCardBalance] = useState("");
    const [creditCardAnnualInterestRate, setCreditCardAnnualInterestRate] = useState("");
    const [creditCardMonthlyPayment, setCreditCardMonthlyPayment] = useState("");
    const [creditCardDebtResult, setCreditCardDebtResult] = useState(null);





    const [leaseAmount, setLeaseAmount] = useState("");
    const [paymentAtSigning, setPaymentAtSigning] = useState("");
    const [leasePeriod, setLeasePeriod] = useState("");
    const [residualValue, setResidualValue] = useState("");
    const [leaseInterestRate, setLeaseInterestRate] = useState("");
    const [leaseSalesTaxRate, setLeaseSalesTaxRate] = useState("");
    const [leasePaymentResult, setLeasePaymentResult] = useState(null);


    const [carMonthlyPayment, setCarMonthlyPayment] = useState("");
    const [carDownPayment, setCarDownPayment] = useState("");
    const [carInterestRate, setCarInterestRate] = useState("");
    const [carLoanTerm, setCarLoanTerm] = useState("");
    const [carAffordabilityResult, setCarAffordabilityResult] = useState(null);


    // Loan Payoff Calculator

    const calculateLoanPayoff = () => {
        const principal = parseFloat(loanAmount);
        const rate = parseFloat(interestRate) / 100 / 12;
        const months = parseInt(loanTerm);
        const taxRate = parseFloat(taxBracket) / 100;

        // Calculate monthly payment
        const monthlyPayment = (principal * rate) / (1 - Math.pow(1 + rate, -months));

        // Calculate total interest payments
        const totalInterestPayments = (monthlyPayment * months) - principal;

        // Calculate tax savings
        const taxSavings = totalInterestPayments * taxRate;

        setLoanPayoffResult({
            originalLoanAmount: principal.toFixed(2),
            loanTerm: months,
            monthlyPayment: monthlyPayment.toFixed(2),
            totalInterestPayments: totalInterestPayments.toFixed(2),
            taxSavings: taxSavings.toFixed(2)
        });
    };


    // Home Affordability Calculator


    const calculateHomeAffordability = () => {
        const annualIncome = parseFloat(income);
        const monthlyIncome = annualIncome / 12;
        const monthlyObligations = parseFloat(autoLoanPayments) + parseFloat(creditCardPayments) + parseFloat(otherObligations);
        const maxMonthlyMortgagePayment = (monthlyIncome - monthlyObligations) * 0.28;
        const rate = parseFloat(mortgageInterestRate) / 100 / 12;
        const months = parseInt(mortgageLoanTerm) * 12;
        const maxLoanAmount = (maxMonthlyMortgagePayment * (1 - Math.pow(1 + rate, -months))) / rate;
        const totalHomePrice = maxLoanAmount + parseFloat(downPayment);

        setHomeAffordabilityResult({
            downPayment: parseFloat(downPayment).toFixed(2),
            totalHomePrice: totalHomePrice.toFixed(2),
            monthlyPayment: maxMonthlyMortgagePayment.toFixed(2)
        });
    };



    // Mortgage Refinancing Calculator



    const calculateMortgageRefinancing = () => {
        const principal = parseFloat(principalBalance);
        const currentRate = parseFloat(currentInterestRate) / 100 / 12;
        const newRate = parseFloat(newInterestRate) / 100 / 12;
        const discountRate = parseFloat(discountPoints) / 100 / 12;
        const effectiveNewRate = newRate - discountRate;
        const currentMonths = parseInt(yearsRemaining) * 12;
        const newMonths = parseInt(newLoanTerm) * 12;
        const closingCostPercentage = parseFloat(closingCosts) / 100;
        const otherCosts = parseFloat(otherFixedCosts);

        const currentPayment = (principal * currentRate) / (1 - Math.pow(1 + currentRate, -currentMonths));
        const newPayment = (principal * effectiveNewRate) / (1 - Math.pow(1 + effectiveNewRate, -newMonths));
        const totalClosingCosts = principal * closingCostPercentage + otherCosts;

        const savings = currentPayment - newPayment;
        const breakEvenMonths = totalClosingCosts / savings;

        setMortgageRefinancingResult({
            monthlyPayment: newPayment.toFixed(2),
            monthlySavings: savings.toFixed(2),
            breakEvenMonths: Math.ceil(breakEvenMonths)
        });
    };




    // Mortgage Acceleration Calculator



    const calculateMortgageAcceleration = () => {
        const principal = parseFloat(originalLoanAmount);
        const rate = parseFloat(annualInterestRate) / 100 / 12;
        const originalMonths = parseInt(originalLoanTerm);
        const paymentsMadeMonths = parseInt(paymentsMade);
        const additionalPaymentAmount = parseFloat(additionalPayment);

        // Calculate remaining principal after payments made
        const remainingPrincipal = principal * Math.pow(1 + rate, paymentsMadeMonths) - (principal * rate * (Math.pow(1 + rate, paymentsMadeMonths) - 1) / rate);

        // Calculate original monthly payment
        const originalMonthlyPayment = (principal * rate) / (1 - Math.pow(1 + rate, -originalMonths));

        // Calculate new monthly payment with additional payment
        const newMonthlyPayment = originalMonthlyPayment + additionalPaymentAmount;

        // Calculate new remaining months
        const newRemainingMonths = Math.log(newMonthlyPayment / (newMonthlyPayment - remainingPrincipal * rate)) / Math.log(1 + rate);

        // Calculate interest savings
        const totalInterestOriginal = (originalMonthlyPayment * originalMonths) - principal;
        const totalInterestNew = (newMonthlyPayment * newRemainingMonths) - remainingPrincipal;
        const interestSavings = totalInterestOriginal - totalInterestNew;

        // Calculate years paid off early
        const yearsPaidOffEarly = (originalMonths - newRemainingMonths) / 12;

        setMortgageAccelerationResult({
            originalLoanAmount: principal.toFixed(2),
            additionalPayment: additionalPaymentAmount.toFixed(2),
            interestSavings: interestSavings.toFixed(2),
            yearsPaidOffEarly: yearsPaidOffEarly.toFixed(2)
        });
    };




    // Credit Card Debt Calculator


    const calculateCreditCardDebt = () => {
        const balance = parseFloat(creditCardBalance);
        const annualRate = parseFloat(creditCardAnnualInterestRate) / 100;
        const monthlyRate = annualRate / 12;
        const payment = parseFloat(creditCardMonthlyPayment);

        // Calculate minimum payment to cover interest
        const minimumInterestPayment = balance * monthlyRate;

        // Calculate time to pay off balance
        const monthsToPayOff = Math.log(payment / (payment - balance * monthlyRate)) / Math.log(1 + monthlyRate);
        const yearsToPayOff = monthsToPayOff / 12;

        // Calculate total interest paid
        const totalInterestPaid = payment * monthsToPayOff - balance;

        setCreditCardDebtResult({
            balance: balance.toFixed(2),
            annualRate: (annualRate * 100).toFixed(2),
            minimumInterestPayment: minimumInterestPayment.toFixed(2),
            monthlyPayment: payment.toFixed(2),
            yearsToPayOff: yearsToPayOff.toFixed(2),
            totalInterestPaid: totalInterestPaid.toFixed(2)
        });
    };



    // Lease Payment Calculator

    const calculateLeasePayment = () => {
        const negotiatedLeaseAmount = parseFloat(leaseAmount);
        const paymentDueAtSigning = parseFloat(paymentAtSigning);
        const leaseMonths = parseInt(leasePeriod);
        const residualValueAtEnd = parseFloat(residualValue);
        const interestRate = parseFloat(leaseInterestRate) / 100 / 12;
        const salesTax = parseFloat(leaseSalesTaxRate) / 100;

        // Calculate monthly depreciation
        const monthlyDepreciation = (negotiatedLeaseAmount - residualValueAtEnd) / leaseMonths;

        // Calculate monthly interest
        const averageLeaseBalance = (negotiatedLeaseAmount + residualValueAtEnd) / 2;
        const monthlyInterest = averageLeaseBalance * interestRate;

        // Calculate monthly payment before tax
        const monthlyPaymentBeforeTax = monthlyDepreciation + monthlyInterest;

        // Calculate monthly payment including tax
        const monthlyPayment = monthlyPaymentBeforeTax * (1 + salesTax);

        // Calculate total monthly lease payments
        const totalMonthlyLeasePayments = monthlyPayment * leaseMonths;

        // Calculate total lease interest paid
        const totalLeaseInterestPaid = monthlyInterest * leaseMonths;

        // Calculate total lease cost
        const totalLeaseCost = totalMonthlyLeasePayments + paymentDueAtSigning;

        setLeasePaymentResult({
            negotiatedLeaseAmount: negotiatedLeaseAmount.toFixed(2),
            paymentDueAtSigning: paymentDueAtSigning.toFixed(2),
            leaseMonths: leaseMonths,
            residualValueAtEnd: residualValueAtEnd.toFixed(2),
            interestRate: (interestRate * 12 * 100).toFixed(2),
            salesTaxRate: (salesTax * 100).toFixed(2),
            monthlyPayment: monthlyPayment.toFixed(2),
            totalMonthlyLeasePayments: totalMonthlyLeasePayments.toFixed(2),
            totalLeaseInterestPaid: totalLeaseInterestPaid.toFixed(2),
            totalLeaseCost: totalLeaseCost.toFixed(2)
        });
    };


    // Car Affordability Calculator

    const calculateCarAffordability = () => {
        const monthlyPayment = parseFloat(carMonthlyPayment);
        const downPayment = parseFloat(carDownPayment);
        const interestRate = parseFloat(carInterestRate) / 100 / 12;
        const loanTermMonths = parseInt(carLoanTerm);

        // Calculate the loan amount
        const loanAmount = (monthlyPayment * (1 - Math.pow(1 + interestRate, -loanTermMonths))) / interestRate;

        // Calculate the total car price
        const totalCarPrice = loanAmount + downPayment;

        // Calculate total interest paid
        const totalInterestPaid = (monthlyPayment * loanTermMonths) - loanAmount;

        setCarAffordabilityResult({
            totalCarPrice: totalCarPrice.toFixed(2),
            totalInterestPaid: totalInterestPaid.toFixed(2),
            totalCost: (totalCarPrice + totalInterestPaid).toFixed(2)
        });
    };


    return (
        <div style={{ textAlign: "center", padding: "20px", fontFamily: "Arial, sans-serif" }}>
            <PageTitle title="Financial Calculators" />

            <style jsx>{`
                section {
                    background-color: #f9f9f9;
                    border-radius: 8px;
                    padding: 20px;
                    margin-bottom: 40px;
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                }
                h2 {
                    color: #333;
                    margin-bottom: 20px;
                }
                input {
                    width: 80%;
                    padding: 10px;
                    margin: 10px 0;
                    border: 1px solid #ccc;
                    border-radius: 4px;
                }
                button {
                    background-color: #007bff;
                    color: white;
                    padding: 10px 20px;
                    border: none;
                    border-radius: 4px;
                    cursor: pointer;
                    transition: background-color 0.3s;
                }
                button:hover {
                    background-color: #0056b3;
                }
                p {
                    color: #333;
                    font-size: 1.2em;
                    margin-top: 20px;
                }
            `}</style>

            {/* Loan Payoff */}

            <section>
                <h2>Loan Payoff Calculator</h2>
                <input type="number" placeholder="How much do you plan to borrow?" value={loanAmount} onChange={(e) => setLoanAmount(e.target.value)} />
                <input type="number" placeholder="What interest rate do you expect to pay on this loan?" value={interestRate} onChange={(e) => setInterestRate(e.target.value)} />
                <input type="number" placeholder="What is the length of the loan in months?" value={loanTerm} onChange={(e) => setLoanTerm(e.target.value)} />
                <input type="number" placeholder="What is your estimated federal income tax bracket?" value={taxBracket} onChange={(e) => setTaxBracket(e.target.value)} />
                <button onClick={calculateLoanPayoff}>Calculate</button>
                {loanPayoffResult && (
                    <div>
                        <p>Original loan amount: ${loanPayoffResult.originalLoanAmount}</p>
                        <p>Term of the loan (in months): {loanPayoffResult.loanTerm}</p>
                        <p>Monthly payment: ${loanPayoffResult.monthlyPayment}</p>
                        <p>Total interest payments: ${loanPayoffResult.totalInterestPayments}</p>
                        <p>Assuming the interest is tax deductible, your tax savings: ${loanPayoffResult.taxSavings}</p>
                    </div>
                )}
            </section>


            {/* Home Affordability */}


            <section>
                <h2>Home Affordability Calculator</h2>
                <input type="number" placeholder="Current Annual Pre-tax Income" value={income} onChange={(e) => setIncome(e.target.value)} />
                <input type="number" placeholder="Monthly Auto Loan Payments" value={autoLoanPayments} onChange={(e) => setAutoLoanPayments(e.target.value)} />
                <input type="number" placeholder="Monthly Credit Card Payments" value={creditCardPayments} onChange={(e) => setCreditCardPayments(e.target.value)} />
                <input type="number" placeholder="Other Monthly Obligations" value={otherObligations} onChange={(e) => setOtherObligations(e.target.value)} />
                <input type="number" placeholder="Expected Mortgage Interest Rate (%)" value={mortgageInterestRate} onChange={(e) => setMortgageInterestRate(e.target.value)} />
                <input type="number" placeholder="Loan Length (years)" value={mortgageLoanTerm} onChange={(e) => setMortgageLoanTerm(e.target.value)} />
                <input type="number" placeholder="Down Payment" value={downPayment} onChange={(e) => setDownPayment(e.target.value)} />
                <button onClick={calculateHomeAffordability}>Calculate</button>
                {homeAffordabilityResult && (
                    <div>
                        <p>Down payment: ${homeAffordabilityResult.downPayment}</p>
                        <p>The maximum home price you may be able to afford, including your down payment: ${homeAffordabilityResult.totalHomePrice}</p>
                        <p>Your monthly payment amount: ${homeAffordabilityResult.monthlyPayment}</p>
                    </div>
                )}
            </section>



            {/* Mortgage Refinancing */}



            <section>
                <h2>Mortgage Refinancing Calculator</h2>
                <input type="number" placeholder="Principal Balance Remaining" value={principalBalance} onChange={(e) => setPrincipalBalance(e.target.value)} />
                <input type="number" placeholder="Current Interest Rate (%)" value={currentInterestRate} onChange={(e) => setCurrentInterestRate(e.target.value)} />
                <input type="number" placeholder="Years Remaining" value={yearsRemaining} onChange={(e) => setYearsRemaining(e.target.value)} />
                <input type="number" placeholder="New Interest Rate (%)" value={newInterestRate} onChange={(e) => setNewInterestRate(e.target.value)} />
                <input type="number" placeholder="New Loan Term (years)" value={newLoanTerm} onChange={(e) => setNewLoanTerm(e.target.value)} />
                <input type="number" placeholder="Loan Origination Fee and Closing Costs (%)" value={closingCosts} onChange={(e) => setClosingCosts(e.target.value)} />
                <input type="number" placeholder="Discount Points (%)" value={discountPoints} onChange={(e) => setDiscountPoints(e.target.value)} />
                <input type="number" placeholder="Other Fixed Costs" value={otherFixedCosts} onChange={(e) => setOtherFixedCosts(e.target.value)} />
                <button onClick={calculateMortgageRefinancing}>Calculate</button>
                {mortgageRefinancingResult && (
                    <div>
                        <p>Estimated Monthly Payment (Refinanced): ${mortgageRefinancingResult.monthlyPayment}</p>
                        <p>Monthly Savings: ${mortgageRefinancingResult.monthlySavings}</p>
                        <p>Break Even (in months) to Recover Refinancing Costs: {mortgageRefinancingResult.breakEvenMonths}</p>
                    </div>
                )}
            </section>




            {/* Mortgage Acceleration */}



            <section>
                <h2>Mortgage Acceleration Calculator</h2>
                <input type="number" placeholder="Original Face Value of Loan" value={originalLoanAmount} onChange={(e) => setOriginalLoanAmount(e.target.value)} />
                <input type="number" placeholder="Annual Interest Rate (%)" value={annualInterestRate} onChange={(e) => setAnnualInterestRate(e.target.value)} />
                <input type="number" placeholder="Original Term of Loan (months)" value={originalLoanTerm} onChange={(e) => setOriginalLoanTerm(e.target.value)} />
                <input type="number" placeholder="Monthly Payments Already Made" value={paymentsMade} onChange={(e) => setPaymentsMade(e.target.value)} />
                <input type="number" placeholder="Additional Monthly Payment" value={additionalPayment} onChange={(e) => setAdditionalPayment(e.target.value)} />
                <button onClick={calculateMortgageAcceleration}>Calculate</button>
                {mortgageAccelerationResult && (
                    <div>
                        <p>The original face value of your loan: ${mortgageAccelerationResult.originalLoanAmount}</p>
                        <p>Additional amount you are adding to your monthly payment: ${mortgageAccelerationResult.additionalPayment}</p>
                        <p>By making this extra payment, you will save the following amount of interest: ${mortgageAccelerationResult.interestSavings}</p>
                        <p>Also, your home will be paid off this many years early: {mortgageAccelerationResult.yearsPaidOffEarly}</p>
                    </div>
                )}
            </section>




            {/* Credit Card Debt */}


            <section>
                <h2>Credit Card Debt Calculator</h2>
                <input type="number" placeholder="Current Credit Card Balance" value={creditCardBalance} onChange={(e) => setCreditCardBalance(e.target.value)} />
                <input type="number" placeholder="Annual Interest Rate (%)" value={creditCardAnnualInterestRate} onChange={(e) => setCreditCardAnnualInterestRate(e.target.value)} />
                <input type="number" placeholder="Monthly Payment" value={creditCardMonthlyPayment} onChange={(e) => setCreditCardMonthlyPayment(e.target.value)} />
                <button onClick={calculateCreditCardDebt}>Calculate</button>
                {creditCardDebtResult && (
                    <div>
                        <p>My current credit card balance: ${creditCardDebtResult.balance}</p>
                        <p>The annual percentage interest rate on your card: {creditCardDebtResult.annualRate}%</p>
                        <p>The minimum amount required to pay only the interest: ${creditCardDebtResult.minimumInterestPayment}</p>
                        <p>Each month you plan to pay: ${creditCardDebtResult.monthlyPayment}</p>
                        <p>At that payment, the time required to pay off your balance: {creditCardDebtResult.yearsToPayOff} years</p>
                        <p>You will pay total interest of: ${creditCardDebtResult.totalInterestPaid}</p>
                    </div>
                )}
            </section>



            {/* Lease Payment */}

            <section>
                <h2>Lease Payment Calculator</h2>
                <input type="number" placeholder="Negotiated Lease Amount (in dollars)" value={leaseAmount} onChange={(e) => setLeaseAmount(e.target.value)} />
                <input type="number" placeholder="Payment at Lease Signing (in dollars)" value={paymentAtSigning} onChange={(e) => setPaymentAtSigning(e.target.value)} />
                <input type="number" placeholder="Lease Period (in months)" value={leasePeriod} onChange={(e) => setLeasePeriod(e.target.value)} />
                <input type="number" placeholder="Residual Value at End of Lease (in dollars)" value={residualValue} onChange={(e) => setResidualValue(e.target.value)} />
                <input type="number" placeholder="Annual Percentage Interest Rate" value={leaseInterestRate} onChange={(e) => setLeaseInterestRate(e.target.value)} />
                <input type="number" placeholder="State Sales Tax Rate (percentage)" value={leaseSalesTaxRate} onChange={(e) => setLeaseSalesTaxRate(e.target.value)} />
                <button onClick={calculateLeasePayment}>Calculate</button>
                {leasePaymentResult && (
                    <div>
                        <p>Price of vehicle (or negotiated lease amount, if known): ${leasePaymentResult.negotiatedLeaseAmount}</p>
                        <p>Payment due at lease signing: ${leasePaymentResult.paymentDueAtSigning}</p>
                        <p>Lease period in months: {leasePaymentResult.leaseMonths} months</p>
                        <p>Residual value at end of lease: ${leasePaymentResult.residualValueAtEnd}</p>
                        <p>Interest rate: {leasePaymentResult.interestRate}%</p>
                        <p>State sales tax rate (if any): {leasePaymentResult.salesTaxRate}%</p>
                        <p>Monthly payment: ${leasePaymentResult.monthlyPayment}</p>
                        <p>Total monthly lease payments: ${leasePaymentResult.totalMonthlyLeasePayments}</p>
                        <p>Total lease interest paid: ${leasePaymentResult.totalLeaseInterestPaid}</p>
                        <p>Total Lease Cost: ${leasePaymentResult.totalLeaseCost}</p>
                    </div>
                )}
            </section>


            <section>
                <h2>Car Affordability Calculator</h2>
                <input type="number" placeholder="How much do you want your monthly payment to be (in dollars)?" value={carMonthlyPayment} onChange={(e) => setCarMonthlyPayment(e.target.value)} />
                <input type="number" placeholder="How much do you plan to put down on the car (in dollars)?" value={carDownPayment} onChange={(e) => setCarDownPayment(e.target.value)} />
                <input type="number" placeholder="Enter the annual percentage interest rate that is currently available from your lender" value={carInterestRate} onChange={(e) => setCarInterestRate(e.target.value)} />
                <input type="number" placeholder="Enter the number of months" value={carLoanTerm} onChange={(e) => setCarLoanTerm(e.target.value)} />
                <button onClick={calculateCarAffordability}>Calculate</button>
                {carAffordabilityResult && (
                    <div>
                        <p>Based on the information you provided, you can afford to buy a car that costs: ${carAffordabilityResult.totalCarPrice}</p>
                        <p>Total interest you would pay: ${carAffordabilityResult.totalInterestPaid}</p>
                        <p>Total cost of car: ${carAffordabilityResult.totalCost}</p>
                    </div>
                )}
            </section>


        </div>
    );
}
