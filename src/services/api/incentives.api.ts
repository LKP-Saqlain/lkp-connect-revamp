import type {
  ClientRevenueApiResponse,
  ClientwiseDetailRevenueResponse,
  EmpwiseDetailsRevenueResponse,
  GetClientAcquisitionResponse,
  GetRevenueEmployeeTypeResponse,
} from "@/modules/incentives/types/incentive.types";
import baseInstance from "../axios/baseInstance";
import { incentivesEndpoints } from "../endpoints/incentives.endpoints";
import type {
  CalculateEmployeeIncentivePayload,
  CalculateEmployeeIncentiveResponse,
  GetClientAcquisitionPayload,
  GetClientAcquisitionReportingHeadPayload,
  GetclientwiseDetailRevenuePayload,
  GetclientwiseRevenuePayload,
  GetEmpwiseDetailsRevenuePayload,
  GetIncentiveSlabsPayload,
  GetIncentiveSlabsResponse,
  GetRevenueEmployeeTypePayload,
  GetTeamDistributionPayload,
} from "./payloadInterface";
import type { GetClientAcquisitionReportingHeadResponse } from "@/modules/incentives/sections/ClientAcquisition/types/clientAcquisition.types";
import type { GetTeamDistributionResponse } from "@/modules/incentives/types/teamDistribution.types";
import type {
  GetTeamMultipleAndIncentiveSummaryPayload,
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

export const GetRevenueEmployeeType = async (
  payload: GetRevenueEmployeeTypePayload,
): Promise<GetRevenueEmployeeTypeResponse> => {
  const response = await baseInstance.post<GetRevenueEmployeeTypeResponse>(
    incentivesEndpoints.GetRevenueEmployeeType,
    payload,
  );

  return response.data;
};

export const GetClientAcquisitionReportingHead = async (
  payload: GetClientAcquisitionReportingHeadPayload,
): Promise<GetClientAcquisitionReportingHeadResponse> => {
  const response =
    await baseInstance.post<GetClientAcquisitionReportingHeadResponse>(
      incentivesEndpoints.GetClientAcquisitionReportingHead,
      payload,
    );

  return response.data;
};

export const GetTeamDistribution = async (
  payload: GetTeamDistributionPayload,
): Promise<GetTeamDistributionResponse> => {
  const response = await baseInstance.post<GetTeamDistributionResponse>(
    incentivesEndpoints.GetTeamDistribution,
    payload,
  );

  return response.data;
};

export const GetTeamMultipleAndIncentiveSummary = async (
  payload: GetTeamMultipleAndIncentiveSummaryPayload,
): Promise<GetTeamMultipleAndIncentiveSummaryResponse> => {
  const response =
    await baseInstance.post<GetTeamMultipleAndIncentiveSummaryResponse>(
      incentivesEndpoints.GetTeamMultipleAndIncentiveSummary,
      payload,
    );

  return response.data;
};

export const GetTeamSummary = async (
  payload: GetTeamSummaryPayload,
): Promise<GetTeamSummaryResponse> => {
  const response = await baseInstance.post<GetTeamSummaryResponse>(
    incentivesEndpoints.GetTeamSummary,
    payload,
  );
  return response.data;
};

export const CalculateIncentivePreview = async (
  payload: IncentiveCalculatorPayload,
): Promise<IncentiveCalculatorResponse> => {
  const response = await baseInstance.post<IncentiveCalculatorResponse>(
    incentivesEndpoints.IncentiveCalculator,
    payload,
  );
  return response.data;
};

export const GetSalesSummary = async (
  payload: GetSalesSummaryPayload,
): Promise<GetSalesSummaryResponse> => {
  const response = await baseInstance.post<GetSalesSummaryResponse>(
    incentivesEndpoints.GetSalesSummary,
    payload,
  );
  return response.data;
};

export const GetAnnualTargetDetails = async (
  payload: GetAnnualTargetDetailsPayload,
): Promise<GetAnnualTargetDetailsResponse> => {
  const response = await baseInstance.post<GetAnnualTargetDetailsResponse>(
    incentivesEndpoints.GetAnnualTargetDetails,
    payload,
  );
  return response.data;
};

export const GetCADAnnualTargetDetails = async (
  payload: GetCADAnnualTargetDetailsPayload,
): Promise<GetCADAnnualTargetDetailsResponse> => {
  const response = await baseInstance.post<GetCADAnnualTargetDetailsResponse>(
    incentivesEndpoints.GetCADAnnualTargetDetails,
    payload,
  );
  return response.data;
};

export const GetYearlyOverview = async (
  payload: GetYearlyOverviewPayload,
): Promise<GetYearlyOverviewResponse> => {
  const response = await baseInstance.post<GetYearlyOverviewResponse>(
    incentivesEndpoints.GetYearlyOverview,
    payload,
  );
  return response.data;
};

export const GetYearlyClientwiseRevenue = async (
  payload: GetYearlyClientwiseRevenuePayload,
): Promise<ClientRevenueApiResponse> => {
  const response = await baseInstance.post<ClientRevenueApiResponse>(
    incentivesEndpoints.GetYearlyClientwiseRevenue,
    payload,
  );
  return response.data;
};

export const GetYearlyClientwiseDetailsRevenue = async (
  payload: GetYearlyClientwiseDetailsRevenuePayload,
): Promise<ClientwiseDetailRevenueResponse> => {
  const response = await baseInstance.post<ClientwiseDetailRevenueResponse>(
    incentivesEndpoints.GetYearlyClientwiseDetailsRevenue,
    payload,
  );
  return response.data;
};

export const GetYearlyEmpwiseDetailsRevenue = async (
  payload: GetYearlyEmpwiseDetailsRevenuePayload,
): Promise<EmpwiseDetailsRevenueResponse> => {
  const response = await baseInstance.post<EmpwiseDetailsRevenueResponse>(
    incentivesEndpoints.GetYearlyEmpwiseDetailsRevenue,
    payload,
  );
  return response.data;
};

export const GetNewClientBusiness = async (
  payload: GetNewClientBusinessPayload,
): Promise<GetNewClientBusinessResponse> => {
  const response = await baseInstance.post<GetNewClientBusinessResponse>(
    incentivesEndpoints.GetNewClientBusiness,
    payload,
  );
  return response.data;
};
