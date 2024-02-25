import React, { useState } from "react";

export const useProduct = () => {
  const [listProducts, setListProducts] = useState([]);
  const [isLoading, setLoading] = useState(false);

  const fetchProducts = React.useCallback(async (categoryId, searchTerm) => {

    if(searchTerm == undefined) searchTerm = ''
    try {
      setLoading(true);
      const result = await fetch(
        `http://localhost:9090/api/merchant/${categoryId}?searchTerm=${searchTerm}`
      );
      const data = await result.json();

      console.log(data);
      setListProducts(data || []);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  }, []);

  const resetList = () => {
    setListProducts([]);
  };

  return [listProducts, isLoading, fetchProducts, resetList];
};
