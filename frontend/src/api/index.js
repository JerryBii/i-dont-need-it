import axios from "axios";
import url from "./URLS";

const api = axios.create({
  baseURL: url,
});

export const createUser = (data) => api.create(`/user/create`, data);
export const getUser = () => api.get(`/user/get`);
export const updateWeeklySpent = (data) =>
  api.patch(`/user/update/weeklyspent`, data);
export const updateMonthlySpent = (data) =>
  api.patch(`/user/update/monthlyspent`, data);
export const updateMonthlyLimit = (data) =>
  api.patch(`/user/update/monthlylimit`, data);
export const updateWeeklyLimit = (data) =>
  api.patch(`/user/update/weeklylimit`, data);
export const updateTotalProducts = (data) =>
  api.patch(`/user/update/totalproducts`, data);
export const updateWeeklyItemsNotPurchased = (data) =>
  api.patch(`/user/update/weeklyitemsnotpurchased`, data);
export const updateMonthlyItemsNotPurchased = (data) =>
  api.patch(`/user/update/monthlyitemsnotpurchased`, data);
export const updateMonthlySaved = (data) =>
  api.patch(`/user/update/monthlySaved`, data);
export const updateWeeklySaved = (data) =>
  api.patch(`/user/update/weeklySaved`, data);
export const updatePurchases = (data) =>
  api.patch(`/user/update/purchases`, data);
export const updateAvoidanceList = (data) =>
  api.patch(`/user/update/avoidancelist`, data);
export const deleteUser = () => api.delete(`/user/delete`);

const apis = {
  createUser,
  getUser,
  updateWeeklySpent,
  updateMonthlySpent,
  updateMonthlyLimit,
  updateWeeklyLimit,
  updateTotalProducts,
  updateWeeklyItemsNotPurchased,
  updateMonthlyItemsNotPurchased,
  updateWeeklySaved,
  updateMonthlySaved,
  updatePurchases,
  updateAvoidanceList,
  deleteUser,
};

export default apis;
