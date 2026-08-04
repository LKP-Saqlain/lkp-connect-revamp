export const CALCULATOR_FORM = {
  title: "Incentive calculator — Relationship Manager",

  fields: [
    {
      id: "ctc",
      label: "Monthly fixed CTC (₹)",
      value: "50000",
    },
    {
      id: "broking",
      label: "Broking revenue (₹)",
      value: "600000",
    },
    {
      id: "nonBroking",
      label: "Non-broking revenue (₹)",
      value: "450000",
    },
    {
      id: "accounts",
      label: "New accounts acquired",
      value: "7",
    },
    {
      id: "brokerageAccounts",
      label: "Accounts with ₹100 brokerage",
      value: "5",
    },
  ],
};

export const CALCULATOR_SUMMARY = {
  multiplier: "3.30x",

  slab: "3x–5x",

  payout: "₹41,500",

  chips: [
    {
      id: "broking",
      label: "Broking 3% → ₹18,000",
      bg: "#EAF3FF",
      color: "#185FA5",
    },
    {
      id: "nonBroking",
      label: "Non-brkng 5% → ₹22,500",
      bg: "#EEF8E8",
      color: "#5F7F38",
    },
    {
      id: "bonus",
      label: "Acq bonus ₹1,000",
      bg: "#FFF4E5",
      color: "#B54708",
    },
  ],
};

export const SLAB_REFERENCE = {
  title: "Slab reference",

  legend: [
    {
      label: "Broking",
      color: "#B7D7F7",
    },
    {
      label: "Non-broking",
      color: "#A8E3CF",
    },
  ],

  rows: [
    {
      slab: "3x – 5x",
      broking: "3%",
      nonBroking: "5%",
      active: true,
    },
    {
      slab: "5x – 7x",
      broking: "5%",
      nonBroking: "7%",
    },
    {
      slab: "7x – 10x",
      broking: "8%",
      nonBroking: "10%",
    },
    {
      slab: "10x & above",
      broking: "10%",
      nonBroking: "15%",
    },
  ],

  info: "Revenue credit: Broking ×30% + Non-Broking ×70% ÷ quarterly CTC = revenue multiple.",
};
