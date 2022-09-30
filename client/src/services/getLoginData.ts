export const getData = async <T>( url: string, email: string, password: string ): Promise<T> => {
  console.log("getData called");
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });
  console.log("res", res);

  return await res.json();
};
