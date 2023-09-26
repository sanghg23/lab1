import React from "react";
import { View, Text, Image, Button, StyleSheet } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image source={require("./Baitap1/ablade.png")} style={styles.image} />
      <Button
        title="Chuyển đến màn hình khác"
        onPress={() => navigation.navigate("ScrollViewScreen")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
});

export default HomeScreen;