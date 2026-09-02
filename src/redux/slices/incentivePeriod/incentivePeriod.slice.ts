import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

import type {
  CalculateEmployeeIncentiveResponse,
  GetIncentiveSlabsResponse,
} from "@/services/api";

import {
  fetchEmployeeIncentive,
  fetchIncentiveSlabs,
  fetchClientwiseRevenue,
  fetchClientwiseDetailRevenue,
  fetchEmpwiseDetailsRevenue,
  fetchGetClientAcquisition,
  fetchGetRevenueEmployeeType,
  fetchGetClientAcquisitionReportingHead,
  fetchGetTeamDistribution,
  fetchTeamMultipleSummary,
  fetchTeamIncentiveSummary,
  fetchTeamSummary,
} from "./incentivePeriod.thunks";
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
  GetTeamSummaryResponse,
} from "@/modules/incentives/types/teamSummary.types";

// -----------------------------------------
// State
// -----------------------------------------

export interface IncentivePeriodState {
  employeeIncentive: CalculateEmployeeIncentiveResponse | null;

  incentiveSlabs: GetIncentiveSlabsResponse | null;

  loading: boolean;
  error: string | null;

  teamMemberDetailsLoading: boolean;
  employeeIncentiveLoading: boolean;
  incentiveSlabsLoading: boolean;

  clientwiseRevenue: ClientRevenueApiResponse | null;

  clientwiseDetailRevenue: ClientwiseDetailRevenueResponse | null;

  //this is Revenue Breakdown

  empwiseDetailsRevenue: EmpwiseDetailsRevenueResponse | null;

  GetClientAcquisition: GetClientAcquisitionResponse | null;
  GetRevenueEmployeeType: GetRevenueEmployeeTypeResponse | null;
  GetClientAcquisitionReportingHead: GetClientAcquisitionReportingHeadResponse | null;
  GetTeamDistribution: GetTeamDistributionResponse | null;
  teamMultipleSummary: GetTeamMultipleAndIncentiveSummaryResponse | null;
  teamIncentiveSummary: GetTeamMultipleAndIncentiveSummaryResponse | null;
  teamSummary: GetTeamSummaryResponse | null;
}

// -----------------------------------------
// Initial State
// -----------------------------------------

const initialState: IncentivePeriodState = {
  employeeIncentive: null,
  incentiveSlabs: null,
  loading: false,
  error: null,
  teamMemberDetailsLoading: false,
  employeeIncentiveLoading: false,
  incentiveSlabsLoading: false,
  clientwiseRevenue: null,
  clientwiseDetailRevenue: null,
  empwiseDetailsRevenue: null,
  GetClientAcquisition: null,
  GetRevenueEmployeeType: null,
  GetClientAcquisitionReportingHead: null,
  GetTeamDistribution: null,
  teamMultipleSummary: null,
  teamIncentiveSummary: null,
  teamSummary: null,
};

// -----------------------------------------
// Slice
// -----------------------------------------

const incentivePeriodSlice = createSlice({
  name: "incentivePeriod",
  initialState,
  reducers: {
    clearIncentivePeriodData: (state) => {
      state.employeeIncentive = null;
      state.incentiveSlabs = null;
      state.error = null;
    },
    clearIncentiveError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchEmployeeIncentive.pending, (state) => {
        state.employeeIncentiveLoading = true;
        state.loading = true;
        state.error = null;
      })

      .addCase(
        fetchEmployeeIncentive.fulfilled,
        (state, action: PayloadAction<CalculateEmployeeIncentiveResponse>) => {
          state.employeeIncentiveLoading = false;
          state.loading = false;
          state.employeeIncentive = action.payload;
        },
      )

      .addCase(fetchEmployeeIncentive.rejected, (state, action) => {
        state.employeeIncentiveLoading = false;
        state.loading = false;
        state.error =
          action.payload || "Failed to calculate employee incentive";
      })

      .addCase(fetchIncentiveSlabs.pending, (state) => {
        state.incentiveSlabsLoading = true;
        state.error = null;
      })

      .addCase(
        fetchIncentiveSlabs.fulfilled,
        (state, action: PayloadAction<GetIncentiveSlabsResponse>) => {
          state.incentiveSlabsLoading = false;
          state.incentiveSlabs = action.payload;
        },
      )

      .addCase(fetchIncentiveSlabs.rejected, (state, action) => {
        state.incentiveSlabsLoading = false;
        state.error = action.payload || "Failed to fetch incentive slabs";
      })

      // .addCase(fetchClientwiseRevenue.pending, (state) => {})

      .addCase(fetchClientwiseRevenue.fulfilled, (state, action) => {
        state.clientwiseRevenue = action.payload;
      })

      // .addCase(fetchClientwiseRevenue.rejected, (state, action) => {})

      // .addCase(fetchClientwiseDetailRevenue.pending, (state) => {})

      .addCase(fetchClientwiseDetailRevenue.fulfilled, (state, action) => {
        state.clientwiseDetailRevenue = action.payload;
      })

      .addCase(fetchClientwiseDetailRevenue.rejected, (action: any) => {
        action.payload || "Failed to fetch client detail revenue";
      })

      // .addCase(fetchEmpwiseDetailsRevenue.pending, (state) => {})

      .addCase(fetchEmpwiseDetailsRevenue.fulfilled, (state, action) => {
        state.empwiseDetailsRevenue = action.payload;
      })

      // .addCase(fetchEmpwiseDetailsRevenue.rejected, (state, action) => {})

      // .addCase(fetchGetClientAcquisition.pending, (state) => {})

      .addCase(fetchGetClientAcquisition.fulfilled, (state, action) => {
        state.GetClientAcquisition = action.payload;
      })

      .addCase(fetchGetClientAcquisition.rejected, (action: any) => {
        action.payload || "Failed to fetch employee-wise revenue";
      })

      .addCase(fetchGetRevenueEmployeeType.fulfilled, (state, action) => {
        state.GetRevenueEmployeeType = action.payload;
      })

      .addCase(fetchGetRevenueEmployeeType.rejected, (state, action) => {
        console.log(state);
        action.payload || "Failed to fetch employee-wise revenue";
      })

      .addCase(
        fetchGetClientAcquisitionReportingHead.fulfilled,
        (state, action) => {
          state.GetClientAcquisitionReportingHead = action.payload;
        },
      )
      .addCase(
        fetchGetClientAcquisitionReportingHead.rejected,
        (state, action) => {
          console.log(state);
          action.payload ||
            "Failed to fetch client acquisition (reporting head)";
        },
      )
      .addCase(fetchGetTeamDistribution.fulfilled, (state, action) => {
        state.GetTeamDistribution = action.payload;
      })
      .addCase(fetchGetTeamDistribution.rejected, (state, action) => {
        console.log(state);
        action.payload || "Failed to fetch team distribution";
      })
      .addCase(fetchTeamMultipleSummary.fulfilled, (state, action) => {
        state.teamMultipleSummary = action.payload;
      })
      .addCase(fetchTeamMultipleSummary.rejected, () => {})

      .addCase(fetchTeamIncentiveSummary.fulfilled, (state, action) => {
        state.teamIncentiveSummary = action.payload;
      })
      .addCase(fetchTeamIncentiveSummary.rejected, () => {})
      .addCase(fetchTeamSummary.fulfilled, (state, action) => {
        state.teamSummary = action.payload;
      })
      .addCase(fetchTeamSummary.rejected, () => {});
  },
});

export const { clearIncentivePeriodData, clearIncentiveError } =
  incentivePeriodSlice.actions;

export default incentivePeriodSlice.reducer;
