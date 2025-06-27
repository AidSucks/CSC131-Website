'use client';

import PageTitle from "@/app/components/home/PageTitle";
import CalculatorSelector from "@/app/components/home/calculator/CalculatorSelector";

export default function Page() {
  return (
    <div>
      <PageTitle title="Resources" />
      <div className="container">
        <div style={{ marginTop: '-80px' }} className="section-title position-relative pb-3 mb-5">
          <h1 className="mt-0">Financial Calculators</h1>
        </div>
        <CalculatorSelector />
      </div>
    </div>
  );
}