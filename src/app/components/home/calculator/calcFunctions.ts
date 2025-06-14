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
    return income * 0.28 - obligations;
}

export function maxLoanAmountMonths(
    income: number,
    obligations: number,
    rate: number,
    months: number,
    downPayment: number
): number {
    const maxMortgage = income * 0.28 - obligations;
    const rateDEC = rate / 1200;
    const denominator = minusPowRateMonths(rateDEC, months);
    return ((maxMortgage * denominator) / rateDEC) + downPayment;
}
