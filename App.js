import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./src/screens/HomeScreen";
import SearchScreen from "./src/screens/SearchScreen";
import FavouriteScreen from "./src/screens/FavouriteScreen";
const Stack = createNativeStackNavigator();

// create app context
const AppContext = React.createContext(null);

export const useAppContext = () => {
  return React.useContext(AppContext);
};

function App() {
  const [products, setProducts] = React.useState([]);

  const addProductToFavourite = (product) => {
    // check product
    const existedProduct = products.find((item) => item.id === product.id);
    if (existedProduct) {
      setProducts([
        ...products.filter((item) => item.id !== product.id),
        { ...existedProduct, quantity: (existedProduct.quantity || 0) + 1 }
      ]);
    } else {
      setProducts([...products, { ...product, quantity: 1 }]);
    }
  };

  const removeProduct = (product) => {
    const existedProduct = products.find((item) => item.id === product.id);
    if (existedProduct && existedProduct.quantity === 1) {
      return setProducts([
        ...products.filter((item) => item.id !== product.id)
      ]);
    }
    if (existedProduct) {
      setProducts([
        ...products.filter((item) => item.id !== product.id),
        { ...existedProduct, quantity: (existedProduct.quantity || 0) - 1 }
      ]);
    }
  };

  return (
    <AppContext.Provider
      value={{
        products: products.sort((p1, p2) => p1.name.localeCompare(p2.name)),
        addProductToFavourite,
        removeProduct
      }}
    >
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Search" component={SearchScreen} />
          <Stack.Screen name="Favourite" component={FavouriteScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </AppContext.Provider>
  );
}

export default App;
