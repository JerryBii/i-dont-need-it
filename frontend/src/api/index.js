import axios from "axios";
import url from "./URLS";

const api = axios.create({
  baseURL: url,
});

export const createUser = () => api.create(`/user/create`);
export const getUser = () => api.get(`/user/get`);
export const updateWeeklySpent = () => api.patch(`/user/update/weeklyspent`);
export const updateMonthlySpent = () => api.patch(`/user/update/monthlyspent`);
export const updateMonthlyLimit = () => api.patch(`/user/update/monthlylimit`);
export const updateWeeklyLimit = () => api.patch(`/user/update/weeklylimit`);
export const updateTotalProducts = () =>
  api.patch(`/user/update/totalproducts`);
export const updateWeeklyItemsNotPurchased = () =>
  api.patch(`/user/update/weeklyitemsnotpurchased`);
export const updateMonthlyItemsNotPurchased = () =>
  api.patch(`/user/update/monthlyitemsnotpurchased`);
export const updateMonthlySaved = () => api.patch(`/user/update/monthlySaved`);
export const updateWeeklySaved = () => api.patch(`/user/update/weeklySaved`);
export const updatePurchases = () => api.patch(`/user/update/purchases`);
export const updateAvoidanceList = () =>
  api.patch(`/user/update/avoidancelist`);
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
