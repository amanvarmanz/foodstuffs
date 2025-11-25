export type RegionCode = "AUK" | "WLG" | "WAI" | "CHC" | "TAS"

export type RegionPair = {
    value: RegionCode,
    label: string
}

export const SelectRegion : RegionPair[] = [
    { value: "AUK", label: "Auckland" },
    { value: "WLG", label: "Wellington" },
    { value: "WAI", label: "Waikato" },
    { value: "CHC", label: "Christchurch" },
    { value: "TAS", label: "Tauranga" },
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