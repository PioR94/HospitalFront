export const sendData = (data: any, http: string) => {
  fetch(http, {
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

export const sendAndReceiveData = (data: any, http: string) => {
  return fetch(http, {
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
