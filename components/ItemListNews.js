import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React from "react";

const ItemListNews = (props) => {
  const { data, navigation } = props;

  const clickItem = () => {
    navigation.navigate("NewDetails", { id: data._id });
  };
  return (
    <TouchableOpacity onPress={clickItem}>
      <View style={styles.container}>
        <Image style={styles.images} source={{ uri: data.image }} />
        <View style={styles.content}>
          <Text style={styles.textTitle}>{data.title}</Text>
          <Text numberOfLines={2}>{data.content}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ItemListNews;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop: 30,
  },
  images: {
    width: 96,
    height: 96,
    borderRadius: 10,
  },
  textTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "blue",
  },
  content: {
    marginStart: 10,
    width: Dimensions.get("window").width - 110,
  },
});
