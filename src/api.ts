const baseUrl = process.env.REACT_APP_BASE_URL;
export const baseUrlDoctor: string = `${baseUrl}/doctor`;
export const baseUrlPatient: string = `${baseUrl}/patient`;
export const baseUrlTerm = `${baseUrl}/term`;

export const sendData = (data: any, baseUrlArgument: string, path: string) => {
  fetch(`${baseUrlArgument}/${path}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(
      typeof data === "number" ||
        typeof data === "boolean" ||
        typeof data === "string"
        ? { data }
        : { ...data }
    ),
  });
};

export const sendAndReceiveData = (
  data: any,
  baseUrlArgument: string,
  path: string
) => {
  return fetch(`${baseUrlArgument}/${path}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(
      typeof data === "number" ||
        typeof data === "boolean" ||
        typeof data === "string"
        ? { data }
        : { ...data }
    ),
  })
    .then((r) => r.json())
    .then((dt) => dt);
};

export const dwlData = (http: string) => {
  return fetch(http)
    .then((r) => r.json())
    .then((dt) => dt);
};
