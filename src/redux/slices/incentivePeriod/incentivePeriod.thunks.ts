import { createAsyncThunk } from "@reduxjs/toolkit";

import {
  getTeamMemberDetails,
  calculateEmployeeIncentive,
  GetIncentiveSlabs,
  type GetTeamMemberDetailsPayload,
  type GetTeamMemberDetailsResponse,
  type CalculateEmployeeIncentivePayload,
  type CalculateEmployeeIncentiveResponse,
  type GetIncentiveSlabsPayload,
  type GetIncentiveSlabsResponse,
} from "@/services/api";

export const fetchTeamMemberDetails = createAsyncThunk<
  GetTeamMemberDetailsResponse,
  GetTeamMemberDetailsPayload,
  { rejectValue: string }
>(
  "incentivePeriod/fetchTeamMemberDetails",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await getTeamMemberDetails(payload);

      return response;
    } catch (error: any) {
      return rejectWithValue(
        error?.response?.data?.message ||
          error?.message ||
          "Failed to fetch team member details",
      );
    }
  },
);

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
