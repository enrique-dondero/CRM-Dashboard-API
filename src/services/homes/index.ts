import { clientModel, introducerModel } from "root/providers";
import { IntroducerProps } from "root/models";

const getIntroducerCount = async (): Promise<number> => {
  const count = await introducerModel().count({});
  return count;
};

const getClientCount = async (): Promise<number> => {
  const count = await clientModel().count({});
  return count;
};

const getARR = async (): Promise<number> => {
  const arr = 0;
  return arr;
};

const getMonthlyRevenueOfYear = async (): Promise<Array<number>> => {
  const revenues = [1];
  return revenues;
};

const getYearForecast = async (): Promise<number> => {
  const yearForecast = 0;
  return yearForecast;
};

const getBookValue = async (): Promise<number> => {
  const bookValue = 0;
  return bookValue;
};

const getAnalysisRes = async (): Promise<Array<Record<string, any>>> => {
  return null;
};

const getClaimStatus = async (): Promise<any> => {
  return null;
};

const getTopIntroducers = async (): Promise<Array<IntroducerProps>> => {
  return null;
};

const getBottomIntroducers = async (): Promise<Array<IntroducerProps>> => {
  return null;
};

module.exports = {
  getIntroducerCount,
  getClientCount,
  getARR,
  getMonthlyRevenueOfYear,
  getYearForecast,
  getBookValue,
  getAnalysisRes,
  getClaimStatus,
  getTopIntroducers,
  getBottomIntroducers
};
