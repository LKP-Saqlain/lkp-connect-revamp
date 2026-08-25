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
} from "@/services/api";
import type {
  ClientRevenueApiResponse,
  ClientwiseDetailRevenueResponse,
  EmpwiseDetailsRevenueResponse,
  GetClientAcquisitionResponse,
  GetRevenueEmployeeTypeResponse,
} from "@/modules/incentives/types/incentive.types";

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
