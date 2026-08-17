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
} from "./incentivePeriod.thunks";

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

      // -----------------------------------------
      // Team Member Details
      // -----------------------------------------

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

      // -----------------------------------------
      // Employee Incentive
      // -----------------------------------------

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

      // -----------------------------------------
      // Incentive Slabs
      // -----------------------------------------

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
      });
  },
});

// -----------------------------------------
// Actions
// -----------------------------------------

export const { clearIncentivePeriodData, clearIncentiveError } =
  incentivePeriodSlice.actions;

// -----------------------------------------
// Reducer
// -----------------------------------------

export default incentivePeriodSlice.reducer;
