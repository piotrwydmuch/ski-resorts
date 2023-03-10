import { defineStore } from "pinia";
import resorts from "../data/data.json"

export const useMapStore = defineStore("MapStore", {
  state: () => {
    return {
      mapGlobalObject: {},
      markersLayer: {},
      resorts: resorts.resorts,
    }
  }
});