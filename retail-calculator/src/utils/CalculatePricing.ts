import { DISCOUNT, TAX, type RegionCode } from "../constants/pricing"

export const getDiscount = (orderValue: number ) : number => {

    if (orderValue >= 50000) {
        return DISCOUNT[50000]
    } else if (orderValue >= 10000) {
        return DISCOUNT[10000]
    } else if (orderValue >= 7000) {
        return DISCOUNT[7000]
    } else if (orderValue >= 5000) {
        return DISCOUNT[5000]
    } else if (orderValue >= 1000) {
        return DISCOUNT[1000]
    } else {
        return 0
    }
}

export const getTax = (regionCode: RegionCode) : number => {
    return TAX[regionCode]
}

export const getTotal = (price: number, quantity: number, region: RegionCode): number => {
    const orderValue = price * quantity;        
    const discountRate = getDiscount(orderValue);      
    const taxRate = getTax(region);      

    const discountAmount = orderValue * discountRate;
    const taxable = orderValue - discountAmount;

    const taxAmount = taxable * taxRate;
    const total = taxable + taxAmount;

    return Number(total.toFixed(2));
};