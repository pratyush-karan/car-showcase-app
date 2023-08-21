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

export async function fetchAllCars() {
  const response = await axios.get(
    `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars`,
    { headers: headers }
  );
  return response.data;
}
