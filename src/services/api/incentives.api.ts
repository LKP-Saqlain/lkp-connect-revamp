import type {
  ClientRevenueApiResponse,
  ClientwiseDetailRevenueResponse,
  EmpwiseDetailsRevenueResponse,
  GetClientAcquisitionResponse,
} from "@/modules/incentives/types/incentive.types";
import baseInstance from "../axios/baseInstance";
import { incentivesEndpoints } from "../endpoints/incentives.endpoints";
import type {
  CalculateEmployeeIncentivePayload,
  CalculateEmployeeIncentiveResponse,
  GetClientAcquisitionPayload,
  GetclientwiseDetailRevenuePayload,
  GetclientwiseRevenuePayload,
  GetEmpwiseDetailsRevenuePayload,
  GetIncentiveSlabsPayload,
  GetIncentiveSlabsResponse,
  GetTeamMemberDetailsPayload,
  GetTeamMemberDetailsResponse,
} from "./payloadInterface";

export const getTeamMemberDetails = async (
  payload: GetTeamMemberDetailsPayload,
) => {
  const response = await baseInstance.post<GetTeamMemberDetailsResponse>(
    incentivesEndpoints.getTeamMemberDetails,
    payload,
  );

  return response.data;
};

export const calculateEmployeeIncentive = async (
  payload: CalculateEmployeeIncentivePayload,
) => {
  const response = await baseInstance.post<CalculateEmployeeIncentiveResponse>(
    incentivesEndpoints.calculateEmployeeIncentive,
    payload,
  );

  return response.data;
};

export const GetIncentiveSlabs = async (payload: GetIncentiveSlabsPayload) => {
  const response = await baseInstance.post<GetIncentiveSlabsResponse>(
    incentivesEndpoints.GetIncentiveSlabs,
    payload,
  );

  return response.data;
};

export const GetclientwiseRevenue = async (
  payload: GetclientwiseRevenuePayload,
): Promise<ClientRevenueApiResponse> => {
  const response = await baseInstance.post<ClientRevenueApiResponse>(
    incentivesEndpoints.GetclientwiseRevenue,
    payload,
  );

  return response.data;
};

export const GetclientwiseDetailsRevenue = async (
  payload: GetclientwiseDetailRevenuePayload,
): Promise<ClientwiseDetailRevenueResponse> => {
  const response = await baseInstance.post<ClientwiseDetailRevenueResponse>(
    incentivesEndpoints.GetclientwiseDetailsRevenue,
    payload,
  );

  return response.data;
};

export const GetEmpwiseDetailsRevenue = async (
  payload: GetEmpwiseDetailsRevenuePayload,
): Promise<EmpwiseDetailsRevenueResponse> => {
  const response = await baseInstance.post<EmpwiseDetailsRevenueResponse>(
    incentivesEndpoints.GetEmpwiseDetailsRevenue,
    payload,
  );

  return response.data;
};

export const GetClientAcquisition = async (
  payload: GetClientAcquisitionPayload,
): Promise<GetClientAcquisitionResponse> => {
  const response = await baseInstance.post<GetClientAcquisitionResponse>(
    incentivesEndpoints.GetClientAcquisition,
    payload,
  );

  return response.data;
};
