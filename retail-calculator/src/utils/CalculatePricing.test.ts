import { describe, it, expect } from "vitest";
import { getDiscount, getTax, getTotal } from "./CalculatePricing";


describe("Retail Pricing Calculator Logic", () => {
  it("returns the correct discount tier rates", () => {
    expect(getDiscount(500)).toBe(0);         // no discount
    expect(getDiscount(1500)).toBe(0.03);     // 3%
    expect(getDiscount(6000)).toBe(0.05);     // 5%
    expect(getDiscount(7500)).toBe(0.07);     // 7%
    expect(getDiscount(15000)).toBe(0.10);    // 10%
    expect(getDiscount(60000)).toBe(0.15);    // 15%
  });

  it("returns correct tax rates per region", () => {
    expect(getTax("AUK")).toBe(0.0685);
    expect(getTax("WLG")).toBe(0.08);
    expect(getTax("WAI")).toBe(0.0625);
    expect(getTax("CHC")).toBe(0.04);
    expect(getTax("TAS")).toBe(0.0825);
  });

  it("calculates subtotal, discount, tax, and total correctly", () => {
    // 200 items at 10 = subtotal 2000
    const result = getTotal(200, 10, "AUK");
    console.log(result)
    // Final total = 1940 + 132.59 = 2072.59
    expect(result).toBeCloseTo(2072.89, 2);
  });
});