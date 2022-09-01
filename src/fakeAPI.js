const products = [
    { id: "h-1", name: "Букет 1" },
    { id: "h-2", name: "Букет 2" },
    { id: "h-3", name: "Букет 3" },
    { id: "s-1", name: "Композиція 1" },
    { id: "s-2", name: "Композиція 2" },
    { id: "s-3", name: "Композиція 3" },
    { id: "s-4", name: "Композиція 4" },
    { id: "p-1", name: "Бокс 1" },
    { id: "p-2", name: "Бокс 2" },
    { id: "p-3", name: "Бокс 3" }
  ];
  
  export const getProducts = () => {
    return products;
  };
  
  export const getProductById = (productId) => {
    return products.find((product) => product.id === productId);
  };
  