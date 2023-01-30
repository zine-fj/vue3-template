const environment = process.env.NODE_ENV || "";
const requestUrl = process.env.VUE_APP_BASE_URL;
const isEnviroment = environment === "development";

export { environment, isEnviroment, requestUrl };
