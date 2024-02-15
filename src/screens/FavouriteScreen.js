import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import ListProductOrder from "../components/ListProductOrder";
import { useAppContext } from "../../App";


const FavouriteScreen = () => {
  const navigation = useNavigation();
  const { products } = useAppContext();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.flexView}>
        <View style={styles.headerContainer}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              style={styles.imageButton}
              source={require("../assets/ic-back.png")}
            />
          </TouchableOpacity>
          <View style={styles.middle}>
            <Text style={styles.headerText}>Favourite</Text>
          </View>
          <TouchableOpacity>
            <Image
              style={styles.imageButton}
              source={require("../assets/ic-close.png")}
            />
          </TouchableOpacity>
        </View>
        <ScrollView style={styles.scrollView}>
          <ListProductOrder products={products} />
        </ScrollView>
        <View style={styles.line1} />
        <View style={{ paddingHorizontal: 16 }}>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default FavouriteScreen;

const styles = StyleSheet.create({
  line1: {
    height: 14,
    backgroundColor: "#F8F8F8",
    width: "100%",
    marginBottom: 20
  },
  btnCheckout: {
    backgroundColor: "#26E698",
    padding: 14,
    alignItems: "center",
    marginTop: 20,
    borderRadius: 10
  },
  txtCheckout: {
    fontSize: 15,
    color: "#FFFFFF"
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  text1: {
    fontSize: 11,
    color: "#959595"
  },
  text2: {
    fontSize: 15,
    color: "#1F1F1F",
    fontWeight: "bold"
  },
  line: {
    width: "100%",
    borderWidth: 1,
    borderStyle: "dashed",
    borderColor: "#E0E0E0",
    marginVertical: 20
  },

  container: {
    flex: 1,
    backgroundColor: "#FFFFFF"
  },

  flexView: {
    flex: 1
  },

  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16
  },
  imageButton: {
    width: 36,
    height: 36
  },
  headerText: {
    fontSize: 16,
    fontWeight: "bold"
  },
  middle: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center"
  },

  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#121212",
    marginTop: 27
  },

  scrollView: {
    flex: 1,
    paddingHorizontal: 16
  }
});
