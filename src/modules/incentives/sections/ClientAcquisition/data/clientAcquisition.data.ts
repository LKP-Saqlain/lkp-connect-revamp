import type { ClientAcquisitionData } from "../types/clientAcquisition.types";

export const CLIENT_ACQUISITION_DATA: ClientAcquisitionData = {
  summary: [
    {
      id: "newAccounts",
      title: "New accounts acquired",
      value: "3",
      suffix: "/ 5 min",
      color: "#2F80ED",
    },
    {
      id: "marginQualified",
      title: "₹1L margin qualified",
      value: "3",
      suffix: "/ 3",
      color: "#2F80ED",
    },
    {
      id: "brokerageQualified",
      title: "₹100 brokerage qualified",
      value: "0",
      suffix: "/ 3",
      color: "#D64545",
    },
  ],

  clients: [
    {
      id: 1,
      name: "Karan Malhotra",
      margin: 120000,
      brokerage: 75,
      status: "Needs brokerage",
    },
    {
      id: 2,
      name: "Ananya Bose",
      margin: 110000,
      brokerage: 20,
      status: "Needs brokerage",
    },
    {
      id: 3,
      name: "Farhan Sheikh",
      margin: 140000,
      brokerage: 50,
      status: "Needs brokerage",
    },
  ],

  rules: [
    "New PAN only — existing or known PANs do not count as acquisition",
    "Account must be opened and activated by last day of the quarter",
    "Dormant reactivation does not count — revenue credit given but not acquisition credit",
    "Equity + commodity + currency under same UCC = one account",
    "Employee or relative accounts not eligible for incentive calculation",
  ],

  role: {
    title: "Relationship Manager",
    description:
      "Revenue credit: Broking 30% · Non-Broking 70% · Min 3x CTC to qualify · NISM Series VII required",
  },
};
