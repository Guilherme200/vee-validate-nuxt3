import {useAxiosApi} from "~/composables/axios-api.js";
import AxiosHttpClient from "~/services/shared/HttpClient/AxiosHttpClient";

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig()
  const apiBaseUrl = config.public.apiBaseUrl

  const httpClient = new AxiosHttpClient(useAxiosApi(apiBaseUrl))
  nuxtApp.provide('httpClient', httpClient)
});
