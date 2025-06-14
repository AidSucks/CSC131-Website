'use client';

import PageTitle from "@/app/components/home/PageTitle";
import CalculatorSelector from "@/app/components/home/calculator/CalculatorSelector";

export default function CalculatorsPage() {
  return (
    <>
      <PageTitle title={"Calculators"}/>
      <h1>
        Financial Calculators
      </h1>
      <CalculatorSelector />
    </>
  );
}