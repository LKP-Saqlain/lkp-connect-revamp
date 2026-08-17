import baseInstance from "../axios/baseInstance";
import { incentivesEndpoints } from "../endpoints/incentives.endpoints";
import type {
  CalculateEmployeeIncentivePayload,
  CalculateEmployeeIncentiveResponse,
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
