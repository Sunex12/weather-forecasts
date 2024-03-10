import axios from "axios";

const key = "bbb6620cb7e747f90260b1bd9ce53551";

const $api = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5/",
});

export const currentData = async (search) => {
  const currentData = (
    await $api.get(`weather?q=${search}&appid=${key}&units=metric`)
  ).data;
  return currentData;
};

export const currentTime = async (search) => {
  const currentTime = (
    await $api.get(`forecast?q=${search}&appid=${key}&units=metric`)
  ).data;
  return currentTime;
};
