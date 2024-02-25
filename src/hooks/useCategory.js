import React from "react";
import Config from 'react-native-config';

export const useCategory = () => {
  const [categoryList, setCategoryList] = React.useState([]);

  React.useEffect(() => {
    (async () => {
      const resp = await fetch("http://localhost:9090/api/category");
      const data = await resp.json();
      setCategoryList(data);
    })();
  }, []);

  return categoryList;
};
