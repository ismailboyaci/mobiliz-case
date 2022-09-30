import api from "./index";

const getVehicles = () => {
  return api.get("/vehicles");
};
const getVehicle = (id) => {
  return api.get(`/vehicles/${id}`);
};
const getBrands = () => {
  return api.get("/models");
};
const getModels = (name) => {
  return api.get(`/models/brand/${name}`)
};
const getLocations = () => {
  return api.get("/locations");
};
const create = (data) => {
  return api.post("/vehicles", data);
};
const update = (id, data) => {
  return api.put(`/vehicles/${id}`, data);
};
const remove = (id) => {
  return api.delete(`/vehicles/${id}`);
};

const CarService = {
  getVehicles,
  getVehicle,
  getModels,
  getBrands,
  getLocations,
  create,
  update,
  remove,
};
export default CarService;

