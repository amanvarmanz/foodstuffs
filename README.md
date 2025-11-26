**Retail Pricing Calculator**

A React + TypeScript application that calculates retail pricing using discount tiers and region-based tax.
The UI is built with Mantine, and all pricing logic is implemented as pure functions for easy testing.

This project was created as part of a technical exercise demonstrating slicing, component design, and automated testing.

**Tech Stack**:
- React + TypeScript
- Mantine (UI components & layout)
- Vite

**Getting Started**
1. Clone the repository:
- git clone https://github.com/< your-username >/< repo-name >.git
- cd < repo-name >

2. Install packages:
- npm install

3. Run the Development Server:
- npm run dev

**Discounts Rates**:
| Subtotal  | Discount |
| ----------- | -------- |
| 50,000      | 15%      |
| 10,000      | 10%      |
| 7,000       | 7%       |
| 5,000       | 5%       |
| 1,000       | 3%       |
| Below 1,000 | 0%       |


**Regional Tax Rates**:
| Region | Tax Rate |
| ------ | -------- |
| AUK    | 6.85%    |
| WLG    | 8%       |
| WAI    | 6.25%    |
| CHC    | 4%       |
| TAS    | 8.25%    |


**Order of Calculation**:

- Subtotal = items × price per item
- Apply discount
- Apply region tax
- Round final total to 2 decimals
