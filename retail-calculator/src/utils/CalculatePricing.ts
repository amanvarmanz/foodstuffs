import { DISCOUNT, TAX, type RegionCode } from "../constants/pricing"




export const getDiscountedPrice = (price: number, quantity: number) : number => {

    const orderValue = price * quantity

    if (orderValue >= 50000) {
        return orderValue * (1 - DISCOUNT[50000])
    } else if (orderValue >= 10000) {
        return orderValue * (1 - DISCOUNT[10000])
    } else if (orderValue >= 7000) {
        return orderValue * (1 - DISCOUNT[7000])
    } else if (orderValue >= 5000) {
        return orderValue * (1 - DISCOUNT[5000])
    } else if (orderValue >= 1000) {
        return orderValue * (1 - DISCOUNT[1000])
    } else {
        return orderValue
    }
}


const getAddedTax = (orderValue: number, regionCode: RegionCode) : number => {
    return orderValue * (1 + TAX[regionCode])
}