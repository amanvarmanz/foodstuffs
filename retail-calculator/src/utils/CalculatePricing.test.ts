import { describe, it, expect } from "vitest";
import { getDiscount, getTax, getTotal } from "./CalculatePricing";


describe("Retail Pricing Calculator Logic", () => {
  it("returns the correct discount tier rates", () => {
    expect(getDiscount(500)).toBe(0);
    expect(getDiscount(1500)).toBe(0.03);
    expect(getDiscount(6000)).toBe(0.05);
    expect(getDiscount(7500)).toBe(0.07);
    expect(getDiscount(15000)).toBe(0.10);
    expect(getDiscount(60000)).toBe(0.15);
  });

  it("returns correct tax rates per region", () => {
    expect(getTax("AUK")).toBe(0.0685);
    expect(getTax("WLG")).toBe(0.08);
    expect(getTax("WAI")).toBe(0.0625);
    expect(getTax("CHC")).toBe(0.04);
    expect(getTax("TAS")).toBe(0.0825);
  });

  it("calculates subtotal, discount, tax, and total correctly", () => {
    const lowTotal = getTotal(100, 5, "WLG")  /* $100 per unit | 5 units | 0% Discount | 8% Tax */ 
    const midTotal = getTotal(200, 10, "AUK") /* $200 per unit | 10 units | 3% Discount | 6.85% Tax */
    const highTotal = getTotal(400, 20, "TAS"); /* $400 per unit | 20 units | 7% Discount | 8.25  % Tax */

    expect(lowTotal).toBeCloseTo(540, 2);
    expect(midTotal).toBeCloseTo(2072.89, 2);
    expect(highTotal).toBeCloseTo(8053.80, 2);
  });
});