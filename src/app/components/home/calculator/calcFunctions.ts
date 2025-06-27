// calcFunctions.ts

export function minusPowRateMonths(rateDEC: number, months: number): number {
  return 1 - Math.pow(1 + rateDEC, -months);
}

export function MonthlyPaymentWithMonths(amount: number, rate: number, months: number): number {
  const rateDEC = rate / 1200;
  return (amount * rateDEC) / minusPowRateMonths(rateDEC, months);
}

export function MonthlyPaymentWithYears(amount: number, rate: number, years: number): number {
  const rateDEC = rate / 1200;
  const months = years * 12;
  return (amount * rateDEC) / minusPowRateMonths(rateDEC, months);
}

export function loanValueMonths(amount: number, rate: number, months: number): number {
  return MonthlyPaymentWithMonths(amount, rate, months) * months;
}

export function loanValueYears(amount: number, rate: number, years: number): number {
  return MonthlyPaymentWithYears(amount, rate, years) * years * 12;
}

export function maxMortgageMonthly(income: number, obligations: number): number {
  return Math.max(0, income * 0.28 - obligations);
}

export function maxLoanAmountMonths(income: number, obligations: number, rate: number, months: number, downPayment: number): number {
  const maxMortgage = maxMortgageMonthly(income, obligations);
  const rateDEC = rate / 1200;
  const denominator = minusPowRateMonths(rateDEC, months);
  return ((maxMortgage * denominator) / rateDEC) + downPayment;
}

export function totalPaymentClosing(loan: number, rate: number, months: number, closing: number): number {
  const total = months * MonthlyPaymentWithMonths(loan, rate, months);
  return total + closing;
}

export function mortgageAcceleration(
  loan: number,
  rate: number,
  months: number,
  payments: number,
  extra: number,
  mode: number
): number {
  const rateDEC = rate / 1200;
  const originalPayment = MonthlyPaymentWithMonths(loan, rate, months);
  let balance = loan;

  for (let i = 0; i < payments; i++) {
    const interest = balance * rateDEC;
    const principal = originalPayment - interest;
    balance -= principal;
  }

  const newPayment = originalPayment + extra;
  let newTerm = 0;
  let totalWithExtraInterest = 0;

  while (balance > 0.01) {
    const interest = balance * rateDEC;
    let principal = newPayment - interest;
    if (principal > balance) {
      principal = balance;
      totalWithExtraInterest += interest;
      balance = 0;
      newTerm += balance / principal;
      break;
    }
    balance -= principal;
    totalWithExtraInterest += interest;
    newTerm++;
  }

  const originalTotalInterest = (originalPayment * months) - loan;
  const interestSaved = originalTotalInterest - totalWithExtraInterest;
  const timeSaved = months - (payments + newTerm);

  return mode === 1 ? interestSaved : timeSaved;
}

export function creditCardDebtTotalMonths(balance: number, rate: number, monthlyPayment: number): number {
  const monthlyRate = rate / 1200;
  let months = 0;
  let currentBalance = balance;

  while (currentBalance > 0 && months < 1000) {
    const interest = currentBalance * monthlyRate;
    currentBalance = currentBalance + interest - monthlyPayment;
    if (currentBalance < 0) currentBalance = 0;
    months++;
  }
  return months;
}

export function creditCardDebtTotalInterest(balance: number, rate: number, monthlyPayment: number): number {
  const totalMonths = creditCardDebtTotalMonths(balance, rate, monthlyPayment);
  const totalPaid = monthlyPayment * totalMonths;
  return totalPaid - balance;
}

export function leaseMonthlyPaymentResidual(leaseAmount: number, downPayment: number, residualValue: number, leasePeriod: number, rate: number): number {
  const capCost = leaseAmount - downPayment;
  const depreciation = (capCost - residualValue) / leasePeriod;
  const monthlyRate = rate / 1200;
  const financeCharge = ((capCost + residualValue) / 2) * monthlyRate;
  return depreciation + financeCharge;
}

export function leaseTotalInterestResidual(leaseAmount: number, downPayment: number, residualValue: number, leasePeriod: number, rate: number): number {
  const monthlyPayment = leaseMonthlyPaymentResidual(leaseAmount, downPayment, residualValue, leasePeriod, rate);
  const totalPaid = monthlyPayment * leasePeriod;
  const principalUsed = leaseAmount - downPayment - residualValue;
  return totalPaid - principalUsed;
}

export function carAffordabilityTotal(monthlyPayment: number, downPayment: number, rate: number, months: number): number {
  const rateDEC = rate / 1200;
  const loanAmount = (monthlyPayment * minusPowRateMonths(rateDEC, months)) / rateDEC;
  return loanAmount + downPayment;
}

export function carAffordabilityInterest(monthlyPayment: number, downPayment: number, rate: number, months: number): number {
  const rateDEC = rate / 1200;
  const loanAmount = (monthlyPayment * minusPowRateMonths(rateDEC, months)) / rateDEC;
  const totalPaid = monthlyPayment * months;
  return totalPaid - loanAmount;
}

export function collegeTotalCost(yearsUntilStart: number, yearsAttending: number, annualCost: number, saved: number): number {
  const inflation = 1.05;
  let totalCost = 0;
  for (let i = yearsUntilStart; i < yearsUntilStart + yearsAttending; i++) {
    totalCost += annualCost * Math.pow(inflation, i);
  }
  return totalCost - saved;
}

export function collegeAnnualSavings(yearsUntilStart: number, totalCost: number): number {
  const rate = 0.07;
  return totalCost / ((Math.pow(1 + rate, yearsUntilStart) - 1) / rate);
}

export function annualSavingsNeeded(current: number, goal: number, years: number): number {
  const rate = 0.07;
  const futureValue = goal - current * Math.pow(1 + rate, years);
  return futureValue / ((Math.pow(1 + rate, years) - 1) / rate);
}

export function savingsAccumulated(current: number, upcoming: number, years: number): number {
  const rate = 0.07;
  return current * Math.pow(1 + rate, years) + upcoming * ((Math.pow(1 + rate, years) - 1) / rate);
}

export function equivalentYield(bracket: number, bond: number): number {
  const taxRate = bracket / 100;
  const bondRate = bond / 100;
  if (taxRate >= 1) throw new Error("Tax rate must be less than 100%.");
  return (bondRate / (1 - taxRate)) * 100;
}

export function totalSavings(currentAge: number, retirementAge: number, currentSavings: number, annualContribution: number): number {
  const yearsToRetire = retirementAge - currentAge;
  const r = 0.05;
  return currentSavings * Math.pow(1 + r, yearsToRetire) + annualContribution * ((Math.pow(1 + r, yearsToRetire) - 1) / r);
}

export function yearlySpending(currentAge: number, retirementAge: number, currentSavings: number, annualContribution: number): number {
  const yearsInRetire = 90 - retirementAge;
  const r = 0.05;
  const retirementSavings = totalSavings(currentAge, retirementAge, currentSavings, annualContribution);
  const annuityFactor = (1 - Math.pow(1 + r, -yearsInRetire)) / r;
  return retirementSavings / annuityFactor;
}

export function calculateRMD(currentAge: number, accountBalance: number): number | null {
  if (currentAge < 73) return null;
  const lifeExpectancyTable: Record<number, number> = {
    72: 27.4, 73: 26.5, 74: 25.5, 75: 24.6, 76: 23.7, 77: 22.9,
    78: 22.0, 79: 21.1, 80: 20.2, 81: 19.4, 82: 18.5, 83: 17.7,
    84: 16.8, 85: 16.0, 86: 15.2, 87: 14.4, 88: 13.7, 89: 12.9,
    90: 12.2, 91: 11.5, 92: 10.8, 93: 10.1, 94: 9.5, 95: 8.9,
    96: 8.4, 97: 7.8, 98: 7.3, 99: 6.8, 100: 6.4, 101: 6.0,
    102: 5.6, 103: 5.2, 104: 4.9, 105: 4.5, 106: 4.2, 107: 3.9,
    108: 3.7, 109: 3.4, 110: 3.1, 111: 2.9, 112: 2.6, 113: 2.4,
    114: 2.1, 115: 1.9, 116: 1.7, 117: 1.5, 118: 1.4, 119: 1.2,
    120: 1.0
  };
  const factor = lifeExpectancyTable[currentAge];
  return accountBalance / factor;
}

export function futureCost(currentCost: number, time: number, inflation: number): number {
  const inflationRate = inflation / 100;
  return currentCost * Math.pow(1 + inflationRate, time);
}

export function taxesPenalties(tax: number, withdraw: number): number {
  const rate = tax / 100;
  return withdraw * rate + withdraw * 0.1;
}

export function remainingWithdrawal(tax: number, withdraw: number): number {
  return withdraw - taxesPenalties(tax, withdraw);
}

export function portfolioLifespan(balance: number, annualReturn: number, inflation: number, monthlyWithdrawal: number): number {
  const realReturn = (1 + annualReturn / 100) / (1 + inflation / 100) - 1;
  const r = Math.pow(1 + realReturn, 1 / 12) - 1;
  if (monthlyWithdrawal <= balance * r) return Infinity;
  const n = Math.log(monthlyWithdrawal / (monthlyWithdrawal - balance * r)) / Math.log(1 + r);
  return n / 12;
}

export function federalTax(statusDeductions: number, income: number, sponsors: number, deductions: number): number {
  const totalDeductions = Math.max(statusDeductions, deductions);
  const taxableIncome = Math.max(0, income - sponsors - totalDeductions);
  const tax = taxableIncome * 0.2;
  return isFinite(tax) ? tax : 0;
}

export function taxableGrowth(saved: number, futureSavings: number, years: number, returnRate: number, taxBracket: number): number {
  const rate = returnRate / 100;
  const taxRate = taxBracket / 100;
  const afterTaxRate = rate * (1 - taxRate);
  if (afterTaxRate <= 0) return saved + futureSavings * years;
  return saved * Math.pow(1 + afterTaxRate, years) + futureSavings * ((Math.pow(1 + afterTaxRate, years) - 1) / afterTaxRate);
}

export function deferredGrowth(saved: number, futureSavings: number, years: number, returnRate: number): number {
  const rate = returnRate / 100;
  if (rate <= 0) return saved + futureSavings * years;
  return saved * Math.pow(1 + rate, years) + futureSavings * ((Math.pow(1 + rate, years) - 1) / rate);
}

export function projectedIRABalance(currentAge: number, balance: number, rate: number, bracket: number, withdrawalAge: number, withdrawRate: number): number {
  const years = withdrawalAge - currentAge;
  if (years <= 0) return 0;
  return balance * Math.pow(1 + rate / 100, years);
}

export function iraAfterTaxValue(currentAge: number, balance: number, rate: number, bracket: number, withdrawalAge: number, withdrawRate: number): number {
  const value = projectedIRABalance(currentAge, balance, rate, bracket, withdrawalAge, withdrawRate);
  return value * (1 - bracket / 100);
}

export function rothAfterTax(currentAge: number, balance: number, rate: number, bracket: number, withdrawalAge: number, withdrawRate: number): number {
  const iraValue = iraAfterTaxValue(currentAge, balance, rate, bracket, withdrawalAge, withdrawRate);
  const years = withdrawalAge - currentAge;
  return iraValue * Math.pow(1 + withdrawRate / 100, years);
}

export function estateTax(grossEstate: number, deductions: number): number {
  const net = grossEstate - deductions;
  return net * 0.4;
}
