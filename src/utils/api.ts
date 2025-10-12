import axios from "axios";
import type { ApiData } from "../types";

export const assetsUrl = "https://s1112388.smrtp.ru/hoa-hoa/storage/uploads/";

export const getData = async ({ data, sort, fields, filter }: ApiData) => {
  const sortObj = {};
  const fieldsObj = {};
  const filterObj = {};

  if (fields) {
    fields.forEach((field) => {
      fieldsObj[field] = 1;
    });
  }

  if (sort) {
    sortObj[sort] = 1;
  }

  if (filter) {
    filterObj[filter[0]] = filter[1];
  }

  const response = await axios(
    `https://s1112388.smrtp.ru/hoa-hoa/api/content/items/${data}`,
    {
      headers: {
        "api-key": "API-c3438bbf0bff6a6a16fea562f9617b9ce7437ef8",
      },
      params: {
        sort: sortObj,
        fields: fieldsObj,
        filter: filterObj,
      },
    }
  );
  return response.data;
};
