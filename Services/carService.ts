import { CarProps } from "@/types";
import axios from "axios";

const headers = {
  "X-RapidAPI-Key": "247a6bf21amsh030a521ae822141p15eee8jsnb47065a99995",
  "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
};

export async function fetchCar(model: string) {
  const response = await axios.get(
    `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars`,
    {
      params: { model: model },
      headers: headers,
    }
  );
  return response.data;
}

export function generateCarImageUrl(car: CarProps, angle?: string) {
  const url = new URL("https://cdn.imagin.studio/getimage");
  const { make, year, model } = car;
  url.searchParams.append("customer", "hrjavascript-mastery");
  url.searchParams.append("make", make);
  url.searchParams.append("modelFamily", model.split(" ")[0]);
  url.searchParams.append("zoomType", "fullscreen");
  url.searchParams.append("modelYear", `${year}`);
  url.searchParams.append("angle", `${angle}`);
  return `${url}`;
}
