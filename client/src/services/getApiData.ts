export const getApiData = async <T>( fetchUrl: string, parameter: string ): Promise<T> => {
    const res = await fetch(fetchUrl, {
      method: "Post",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(parameter),
    });
  
    return await res.json();
  };
  