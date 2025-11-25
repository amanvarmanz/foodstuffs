export type RegionCode = "AUK" | "WLG" | "WAI" | "CHC" | "TAS"

export type RegionPair = {
    label: string,
    value: RegionCode
}

export const SelectRegion : RegionPair[] = [
    { label: "Auckland", value: "AUK" },
    { label: "Wellington", value: "WLG" },
    { label: "Waikato", value: "WAI" },
    { label: "Christchurch", value: "CHC" },
    { label: "Tauranga", value: "TAS" },
]

export const DISCOUNT : Record<number, number> = {    
    1000: 0.03,
    5000: 0.05,
    7000: 0.07,
    10000: 0.10,
    50000: 0.15,
}

export const TAX : Record<RegionCode, number> = {
    "AUK": 0.0685,
    "WLG": 0.08,
    "WAI": 0.0625,
    "CHC": 0.04,
    "TAS": 0.0825,
}