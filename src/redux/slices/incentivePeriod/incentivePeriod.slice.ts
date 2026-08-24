import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

import type {
  GetTeamMemberDetailsResponse,
  CalculateEmployeeIncentiveResponse,
  GetIncentiveSlabsResponse,
} from "@/services/api";

import {
  fetchTeamMemberDetails,
  fetchEmployeeIncentive,
  fetchIncentiveSlabs,
  fetchClientwiseRevenue,
  fetchClientwiseDetailRevenue,
  fetchEmpwiseDetailsRevenue,
  fetchGetClientAcquisition,
} from "./incentivePeriod.thunks";
import type {
  ClientRevenueApiResponse,
  ClientwiseDetailRevenueResponse,
  EmpwiseDetailsRevenueResponse,
  GetClientAcquisitionResponse,
} from "@/modules/incentives/types/incentive.types";

// -----------------------------------------
// State
// -----------------------------------------

export interface IncentivePeriodState {
  teamMemberDetails: GetTeamMemberDetailsResponse | null;

  employeeIncentive: CalculateEmployeeIncentiveResponse | null;

  incentiveSlabs: GetIncentiveSlabsResponse | null;

  loading: boolean;
  error: string | null;

  teamMemberDetailsLoading: boolean;
  employeeIncentiveLoading: boolean;
  incentiveSlabsLoading: boolean;

  clientwiseRevenue: ClientRevenueApiResponse | null;
  clientwiseRevenueLoading: boolean;
  clientwiseRevenueError: string | null;

  clientwiseDetailRevenue: ClientwiseDetailRevenueResponse | null;
  clientwiseDetailRevenueLoading: boolean;
  clientwiseDetailRevenueError: string | null;

  //this is Revenue Breakdown

  empwiseDetailsRevenue: EmpwiseDetailsRevenueResponse | null;
  empwiseDetailsRevenueLoading: boolean;
  empwiseDetailsRevenueError: string | null;

  GetClientAcquisition: GetClientAcquisitionResponse | null;
  GetClientAcquisitionLoading: boolean;
  GetClientAcquisitionError: string | null;
}

// -----------------------------------------
// Initial State
// -----------------------------------------

const initialState: IncentivePeriodState = {
  teamMemberDetails: null,

  employeeIncentive: null,

  incentiveSlabs: null,

  loading: false,
  error: null,

  teamMemberDetailsLoading: false,
  employeeIncentiveLoading: false,
  incentiveSlabsLoading: false,

  clientwiseRevenue: null,
  clientwiseRevenueLoading: false,
  clientwiseRevenueError: null,

  clientwiseDetailRevenue: null,
  clientwiseDetailRevenueLoading: false,
  clientwiseDetailRevenueError: null,

  empwiseDetailsRevenue: null,
  empwiseDetailsRevenueLoading: false,
  empwiseDetailsRevenueError: null,

  GetClientAcquisition: null,
  GetClientAcquisitionLoading: false,
  GetClientAcquisitionError: null,
};

// -----------------------------------------
// Slice
// -----------------------------------------

const incentivePeriodSlice = createSlice({
  name: "incentivePeriod",
  initialState,
  reducers: {
    clearIncentivePeriodData: (state) => {
      state.teamMemberDetails = null;
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
      .addCase(fetchTeamMemberDetails.pending, (state) => {
        state.teamMemberDetailsLoading = true;
        state.loading = true;
        state.error = null;
      })

      .addCase(
        fetchTeamMemberDetails.fulfilled,
        (state, action: PayloadAction<GetTeamMemberDetailsResponse>) => {
          state.teamMemberDetailsLoading = false;
          state.loading = false;
          state.teamMemberDetails = action.payload;
        },
      )

      .addCase(fetchTeamMemberDetails.rejected, (state, action) => {
        state.teamMemberDetailsLoading = false;
        state.loading = false;
        state.error = action.payload || "Failed to fetch team member details";
      })

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

      .addCase(fetchClientwiseRevenue.pending, (state) => {
        state.clientwiseRevenueLoading = true;
        state.clientwiseRevenueError = null;
      })

      .addCase(fetchClientwiseRevenue.fulfilled, (state, action) => {
        state.clientwiseRevenueLoading = false;
        state.clientwiseRevenue = action.payload;
      })

      .addCase(fetchClientwiseRevenue.rejected, (state, action) => {
        state.clientwiseRevenueLoading = false;
        state.clientwiseRevenueError =
          action.payload || "Failed to fetch client revenue";
      })

      .addCase(fetchClientwiseDetailRevenue.pending, (state) => {
        state.clientwiseDetailRevenueLoading = true;
        state.clientwiseDetailRevenueError = null;
      })

      .addCase(fetchClientwiseDetailRevenue.fulfilled, (state, action) => {
        state.clientwiseDetailRevenueLoading = false;
        state.clientwiseDetailRevenue = action.payload;
      })

      .addCase(fetchClientwiseDetailRevenue.rejected, (state, action) => {
        state.clientwiseDetailRevenueLoading = false;
        state.clientwiseDetailRevenueError =
          action.payload || "Failed to fetch client detail revenue";
      })

      .addCase(fetchEmpwiseDetailsRevenue.pending, (state) => {
        state.empwiseDetailsRevenueLoading = true;
        state.empwiseDetailsRevenueError = null;
      })

      .addCase(fetchEmpwiseDetailsRevenue.fulfilled, (state, action) => {
        state.empwiseDetailsRevenueLoading = false;
        state.empwiseDetailsRevenue = action.payload;
      })

      .addCase(fetchEmpwiseDetailsRevenue.rejected, (state, action) => {
        state.empwiseDetailsRevenueLoading = false;
        state.empwiseDetailsRevenueError =
          action.payload || "Failed to fetch employee-wise revenue";
      })

      .addCase(fetchGetClientAcquisition.pending, (state) => {
        state.GetClientAcquisitionLoading = true;
        state.GetClientAcquisitionError = null;
      })

      .addCase(fetchGetClientAcquisition.fulfilled, (state, action) => {
        state.GetClientAcquisitionLoading = false;
        state.GetClientAcquisition = action.payload;
      })

      .addCase(fetchGetClientAcquisition.rejected, (state, action) => {
        state.GetClientAcquisitionLoading = false;
        state.GetClientAcquisitionError =
          action.payload || "Failed to fetch employee-wise revenue";
      });
  },
});

export const { clearIncentivePeriodData, clearIncentiveError } =
  incentivePeriodSlice.actions;

// -----------------------------------------
// Reducer
// -----------------------------------------

export default incentivePeriodSlice.reducer;
