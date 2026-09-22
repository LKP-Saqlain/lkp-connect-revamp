import { createAsyncThunk } from "@reduxjs/toolkit";

import {
  calculateEmployeeIncentive,
  GetIncentiveSlabs,
  type CalculateEmployeeIncentivePayload,
  type CalculateEmployeeIncentiveResponse,
  type GetIncentiveSlabsPayload,
  type GetIncentiveSlabsResponse,
  type GetclientwiseRevenuePayload,
  GetclientwiseRevenue,
  GetclientwiseDetailsRevenue,
  type GetclientwiseDetailRevenuePayload,
  type GetEmpwiseDetailsRevenuePayload,
  GetEmpwiseDetailsRevenue,
  type GetClientAcquisitionPayload,
  GetClientAcquisition,
  type GetRevenueEmployeeTypePayload,
  GetRevenueEmployeeType,
  type GetClientAcquisitionReportingHeadPayload,
  GetClientAcquisitionReportingHead,
  type GetTeamDistributionPayload,
  GetTeamDistribution,
  type TeamSummaryBasePayload,
  GetTeamMultipleAndIncentiveSummary,
  GetTeamSummary,
  CalculateIncentivePreview,
  GetSalesSummary,
  GetAnnualTargetDetails,
  GetCADAnnualTargetDetails,
  GetYearlyOverview,
  GetYearlyClientwiseRevenue,
  GetYearlyClientwiseDetailsRevenue,
  GetYearlyEmpwiseDetailsRevenue,
  GetNewClientBusiness,
} from "@/services/api";
import type {
  ClientRevenueApiResponse,
  ClientwiseDetailRevenueResponse,
  EmpwiseDetailsRevenueResponse,
  GetClientAcquisitionResponse,
  GetRevenueEmployeeTypeResponse,
} from "@/modules/incentives/types/incentive.types";
import type { GetClientAcquisitionReportingHeadResponse } from "@/modules/incentives/sections/ClientAcquisition/types/clientAcquisition.types";
import type { GetTeamDistributionResponse } from "@/modules/incentives/types/teamDistribution.types";
import type {
  GetTeamMultipleAndIncentiveSummaryResponse,
  GetTeamSummaryPayload,
  GetTeamSummaryResponse,
} from "@/modules/incentives/types/teamSummary.types";
import type {
  IncentiveCalculatorPayload,
  IncentiveCalculatorResponse,
} from "@/modules/incentives/types/incentiveCalculator.types";
import type {
  GetSalesSummaryPayload,
  GetSalesSummaryResponse,
} from "@/modules/incentives/types/salesSummary.types";
import type {
  GetAnnualTargetDetailsPayload,
  GetAnnualTargetDetailsResponse,
  GetCADAnnualTargetDetailsPayload,
  GetCADAnnualTargetDetailsResponse,
} from "@/modules/incentives/types/annualTarget.types";
import type {
  GetNewClientBusinessPayload,
  GetYearlyClientwiseDetailsRevenuePayload,
  GetYearlyClientwiseRevenuePayload,
  GetYearlyEmpwiseDetailsRevenuePayload,
  GetYearlyOverviewPayload,
  GetYearlyOverviewResponse,
} from "@/modules/incentives/types/yearlyOverview.types";
import type { GetNewClientBusinessResponse } from "@/modules/incentives/types/newClientBusiness.types";

export const fetchEmployeeIncentive = createAsyncThunk<
  CalculateEmployeeIncentiveResponse,
  CalculateEmployeeIncentivePayload,
  { rejectValue: string }
>(
  "incentivePeriod/fetchEmployeeIncentive",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await calculateEmployeeIncentive(payload);

      return response;
    } catch (error: any) {
      return rejectWithValue(
        error?.response?.data?.message ||
          error?.message ||
          "Failed to calculate employee incentive",
      );
    }
  },
);

export const fetchIncentiveSlabs = createAsyncThunk<
  GetIncentiveSlabsResponse,
  GetIncentiveSlabsPayload,
  { rejectValue: string }
>(
  "incentivePeriod/fetchIncentiveSlabs",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await GetIncentiveSlabs(payload);

      return response;
    } catch (error: any) {
      return rejectWithValue(
        error?.response?.data?.message ||
          error?.message ||
          "Failed to fetch incentive slabs",
      );
    }
  },
);

//ye below wala used for Client Revenue Tab

export const fetchClientwiseRevenue = createAsyncThunk<
  ClientRevenueApiResponse,
  GetclientwiseRevenuePayload,
  { rejectValue: string }
>(
  "incentivePeriod/fetchClientwiseRevenue",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await GetclientwiseRevenue(payload);

      if (!response.isSuccess) {
        return rejectWithValue(
          response.errorMessages || "Failed to fetch client revenue",
        );
      }

      return response;
    } catch (error: any) {
      return rejectWithValue(
        error?.response?.data?.message ||
          error?.message ||
          "Failed to fetch client revenue",
      );
    }
  },
);

export const fetchClientwiseDetailRevenue = createAsyncThunk<
  ClientwiseDetailRevenueResponse,
  GetclientwiseDetailRevenuePayload,
  { rejectValue: string }
>(
  "incentivePeriod/fetchClientwiseDetailRevenue",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await GetclientwiseDetailsRevenue(payload);

      if (!response.isSuccess) {
        return rejectWithValue(
          response.errorMessages || "Failed to fetch client revenue",
        );
      }

      return response;
    } catch (error: any) {
      return rejectWithValue(
        error?.response?.data?.message ||
          error?.message ||
          "Failed to fetch client revenue",
      );
    }
  },
);

//ends here

//below is forrr Revenue Breakdown Tab

// -----------------------------------------
// Revenue Breakdown - Employee Wise Revenue
// -----------------------------------------

export const fetchEmpwiseDetailsRevenue = createAsyncThunk<
  EmpwiseDetailsRevenueResponse,
  GetEmpwiseDetailsRevenuePayload,
  { rejectValue: string }
>(
  "incentivePeriod/fetchEmpwiseDetailsRevenue",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await GetEmpwiseDetailsRevenue(payload);

      if (!response.isSuccess) {
        return rejectWithValue(
          response.errorMessages || "Failed to fetch employee-wise revenue",
        );
      }

      return response;
    } catch (error: any) {
      return rejectWithValue(
        error?.response?.data?.message ||
          error?.message ||
          "Failed to fetch employee-wise revenue",
      );
    }
  },
);

export const fetchGetClientAcquisition = createAsyncThunk<
  GetClientAcquisitionResponse,
  GetClientAcquisitionPayload,
  { rejectValue: string }
>(
  "incentivePeriod/fetchGetClientAcquisition",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await GetClientAcquisition(payload);

      if (!response.isSuccess) {
        return rejectWithValue(
          response.errorMessages || "Failed to fetch employee-wise revenue",
        );
      }

      return response;
    } catch (error: any) {
      return rejectWithValue(
        error?.response?.data?.message ||
          error?.message ||
          "Failed to fetch employee-wise revenue",
      );
    }
  },
);

export const fetchGetRevenueEmployeeType = createAsyncThunk<
  GetRevenueEmployeeTypeResponse,
  GetRevenueEmployeeTypePayload,
  { rejectValue: string }
>(
  "incentivePeriod/fetchGetRevenueEmployeeType",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await GetRevenueEmployeeType(payload);

      if (!response.isSuccess) {
        return rejectWithValue(
          response.errorMessages || "Failed to fetch employee-wise revenue",
        );
      }

      return response;
    } catch (error: any) {
      return rejectWithValue(
        error?.response?.data?.message ||
          error?.message ||
          "Failed to fetch employee-wise revenue",
      );
    }
  },
);

export const fetchGetClientAcquisitionReportingHead = createAsyncThunk<
  GetClientAcquisitionReportingHeadResponse,
  GetClientAcquisitionReportingHeadPayload,
  { rejectValue: string }
>(
  "incentivePeriod/fetchGetClientAcquisitionReportingHead",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await GetClientAcquisitionReportingHead(payload);
      if (!response.isSuccess) {
        return rejectWithValue(
          response.errorMessages ||
            "Failed to fetch client acquisition (reporting head)",
        );
      }

      return response;
    } catch (error: any) {
      return rejectWithValue(
        error?.response?.data?.message ||
          error?.message ||
          "Failed to fetch client acquisition (reporting head)",
      );
    }
  },
);

export const fetchGetTeamDistribution = createAsyncThunk<
  GetTeamDistributionResponse,
  GetTeamDistributionPayload,
  { rejectValue: string }
>(
  "incentivePeriod/fetchGetTeamDistribution",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await GetTeamDistribution(payload);

      if (!response.isSuccess) {
        return rejectWithValue(
          response.errorMessages || "Failed to fetch team distribution",
        );
      }

      return response;
    } catch (error: any) {
      return rejectWithValue(
        error?.response?.data?.message ||
          error?.message ||
          "Failed to fetch team distribution",
      );
    }
  },
);

export const fetchTeamMultipleSummary = createAsyncThunk<
  GetTeamMultipleAndIncentiveSummaryResponse,
  TeamSummaryBasePayload,
  { rejectValue: string }
>(
  "incentivePeriod/fetchTeamMultipleSummary",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await GetTeamMultipleAndIncentiveSummary({
        ...payload,
        optionType: "Multiple_summary",
      });

      if (!response.isSuccess) {
        return rejectWithValue(
          response.errorMessages || "Failed to fetch multiple summary",
        );
      }

      return response;
    } catch (error: any) {
      return rejectWithValue(
        error?.response?.data?.message ||
          error?.message ||
          "Failed to fetch multiple summary",
      );
    }
  },
);

export const fetchTeamIncentiveSummary = createAsyncThunk<
  GetTeamMultipleAndIncentiveSummaryResponse,
  TeamSummaryBasePayload,
  { rejectValue: string }
>(
  "incentivePeriod/fetchTeamIncentiveSummary",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await GetTeamMultipleAndIncentiveSummary({
        ...payload,
        optionType: "Incentive_summary",
      });

      if (!response.isSuccess) {
        return rejectWithValue(
          response.errorMessages || "Failed to fetch incentive summary",
        );
      }

      return response;
    } catch (error: any) {
      return rejectWithValue(
        error?.response?.data?.message ||
          error?.message ||
          "Failed to fetch incentive summary",
      );
    }
  },
);

export const fetchTeamSummary = createAsyncThunk<
  GetTeamSummaryResponse,
  GetTeamSummaryPayload,
  { rejectValue: string }
>("incentivePeriod/fetchTeamSummary", async (payload, { rejectWithValue }) => {
  try {
    const response = await GetTeamSummary(payload);
    if (!response.isSuccess) {
      return rejectWithValue(
        response.errorMessages || "Failed to fetch team summary",
      );
    }
    return response;
  } catch (error: any) {
    return rejectWithValue(
      error?.response?.data?.message ||
        error?.message ||
        "Failed to fetch team summary",
    );
  }
});

export const fetchIncentiveCalculatorPreview = createAsyncThunk<
  IncentiveCalculatorResponse,
  IncentiveCalculatorPayload,
  { rejectValue: string }
>(
  "incentivePeriod/fetchIncentiveCalculatorPreview",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await CalculateIncentivePreview(payload);
      if (!response.isSuccess) {
        return rejectWithValue(
          response.errorMessages || "Failed to calculate incentive",
        );
      }
      return response;
    } catch (error: any) {
      return rejectWithValue(
        error?.response?.data?.message ||
          error?.message ||
          "Failed to calculate incentive",
      );
    }
  },
);

export const fetchSalesSummary = createAsyncThunk<
  GetSalesSummaryResponse,
  GetSalesSummaryPayload,
  { rejectValue: string }
>("incentivePeriod/fetchSalesSummary", async (payload, { rejectWithValue }) => {
  try {
    const response = await GetSalesSummary(payload);
    if (!response.isSuccess) {
      return rejectWithValue(
        response.errorMessages || "Failed to fetch sales summary",
      );
    }
    return response;
  } catch (error: any) {
    return rejectWithValue(
      error?.response?.data?.message ||
        error?.message ||
        "Failed to fetch sales summary",
    );
  }
});

export const fetchAnnualTargetDetails = createAsyncThunk<
  GetAnnualTargetDetailsResponse,
  GetAnnualTargetDetailsPayload,
  { rejectValue: string }
>(
  "incentivePeriod/fetchAnnualTargetDetails",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await GetAnnualTargetDetails(payload);
      if (!response.isSuccess) {
        return rejectWithValue(
          response.errorMessages || "Failed to fetch annual target",
        );
      }
      return response;
    } catch (error: any) {
      return rejectWithValue(
        error?.response?.data?.message ||
          error?.message ||
          "Failed to fetch annual target",
      );
    }
  },
);

export const fetchCADAnnualTargetDetails = createAsyncThunk<
  GetCADAnnualTargetDetailsResponse,
  GetCADAnnualTargetDetailsPayload,
  { rejectValue: string }
>(
  "incentivePeriod/fetchCADAnnualTargetDetails",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await GetCADAnnualTargetDetails(payload);
      if (!response.isSuccess) {
        return rejectWithValue(
          response.errorMessages || "Failed to fetch CAD annual target",
        );
      }
      return response;
    } catch (error: any) {
      return rejectWithValue(
        error?.response?.data?.message ||
          error?.message ||
          "Failed to fetch CAD annual target",
      );
    }
  },
);

export const fetchYearlyOverview = createAsyncThunk<
  GetYearlyOverviewResponse,
  GetYearlyOverviewPayload,
  { rejectValue: string }
>(
  "incentivePeriod/fetchYearlyOverview",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await GetYearlyOverview(payload);
      if (!response.isSuccess)
        return rejectWithValue(response.errorMessages || "Failed");
      return response;
    } catch (error: any) {
      return rejectWithValue(
        error?.response?.data?.message || error?.message || "Failed",
      );
    }
  },
);

export const fetchYearlyClientwiseRevenue = createAsyncThunk<
  ClientRevenueApiResponse,
  GetYearlyClientwiseRevenuePayload,
  { rejectValue: string }
>(
  "incentivePeriod/fetchYearlyClientwiseRevenue",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await GetYearlyClientwiseRevenue(payload);
      if (!response.isSuccess)
        return rejectWithValue(response.errorMessages || "Failed");
      return response;
    } catch (error: any) {
      return rejectWithValue(
        error?.response?.data?.message || error?.message || "Failed",
      );
    }
  },
);

export const fetchYearlyClientwiseDetailsRevenue = createAsyncThunk<
  ClientwiseDetailRevenueResponse,
  GetYearlyClientwiseDetailsRevenuePayload,
  { rejectValue: string }
>(
  "incentivePeriod/fetchYearlyClientwiseDetailsRevenue",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await GetYearlyClientwiseDetailsRevenue(payload);
      if (!response.isSuccess)
        return rejectWithValue(response.errorMessages || "Failed");
      return response;
    } catch (error: any) {
      return rejectWithValue(
        error?.response?.data?.message || error?.message || "Failed",
      );
    }
  },
);

export const fetchYearlyEmpwiseDetailsRevenue = createAsyncThunk<
  EmpwiseDetailsRevenueResponse,
  GetYearlyEmpwiseDetailsRevenuePayload,
  { rejectValue: string }
>(
  "incentivePeriod/fetchYearlyEmpwiseDetailsRevenue",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await GetYearlyEmpwiseDetailsRevenue(payload);
      if (!response.isSuccess)
        return rejectWithValue(response.errorMessages || "Failed");
      return response;
    } catch (error: any) {
      return rejectWithValue(
        error?.response?.data?.message || error?.message || "Failed",
      );
    }
  },
);

export const fetchNewClientBusiness = createAsyncThunk<
  GetNewClientBusinessResponse,
  GetNewClientBusinessPayload,
  { rejectValue: string }
>(
  "incentivePeriod/fetchNewClientBusiness",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await GetNewClientBusiness(payload);
      if (!response.isSuccess)
        return rejectWithValue(response.errorMessages || "Failed");
      return response;
    } catch (error: any) {
      return rejectWithValue(
        error?.response?.data?.message || error?.message || "Failed",
      );
    }
  },
);
