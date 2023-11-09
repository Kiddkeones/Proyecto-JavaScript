const getData = async () => {
  try {
    const res = await fetch("https://apimocha.com/data-products/products");
    if (!res.ok) {
      throw new Error("Error http:" + res.status);
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error en la solicitud", error);
    throw error;
  }
};

export const UpToLocalStorageProducts = async () => {
  try {
    const data = await getData();
    sessionStorage.setItem("Products", JSON.stringify([...data]));
  } catch (error) {
    console.error("Error al obtener los datos", error);
    throw error;
  }
};
