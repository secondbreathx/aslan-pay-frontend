import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity
} from "react-native";
import React from "react";

const ListCategory = ({ categories = [], onChange, currentCategoryId }) => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {categories.map((category) => (
        <TouchableOpacity
          key={category.categoryId}
          style={[
            styles.item,
            currentCategoryId == category.categoryId && { backgroundColor: "#16C07B" }
          ]}
          onPress={() => onChange(category.categoryId)}>
          <Image source= {{uri: category.image}}  style ={{width:20, height: 20}} />
          <Text
            style={[
              styles.name,
              currentCategoryId == category.categoryId && { color: "#FFFFFF" }
            ]}>
            {category.name}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default ListCategory;

const styles = StyleSheet.create({
  name: {
    fontSize: 12,
    color: "#A1A1A1",
    marginLeft: 8
  },
  item: {
    backgroundColor: "#F8F8F8",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 36,
    marginRight: 14
  }
});
