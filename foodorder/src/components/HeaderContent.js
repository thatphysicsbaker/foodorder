import { View, Text, Image, TextInput, Platform } from "react-native";
import React, { useState } from "react";

const HeaderContent = () => {
  const [search, setSearch] = useState("");

  return (
    <View
      style={{
        flex: Platform.OS === "ios" ? 0.6 : 0.5,
      }}
    >
      {/* menu icons */}
      <View
        style={{
          marginTop: Platform.OS === "ios" ? 30 : 40,
          marginHorizontal: 17,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View style={{ flex: 1, justifyContent: "center" }}>
          <Image
            source={require("../assets/icons/menu.png")}
            style={{ width: 25, height: 25, tintColor: "white" }}
          />
        </View>
        <View style={{ paddingRight: 25, justifyContent: "center" }}>
          <Image
            source={require("../assets/icons/message.png")}
            style={{ width: 25, height: 25, tintColor: "white" }}
          />
        </View>
        <View style={{ justifyContent: "center" }}>
          <Image
            source={require("../assets/icons/bell.png")}
            style={{ width: 25, height: 25, tintColor: "white" }}
          />
        </View>
      </View>

      {/* header text */}
      <View style={{ marginTop: 30, marginLeft: 16 }}>
        <Text
          style={{
            color: "white",
            fontSize: 25,
            fontWeight: "600",
            lineHeight: 30,
          }}
        >
          {/* Delicious food ready to be */}
        </Text>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View style={{ justifyContent: "center" }}>
            <Text
              style={{
                color: "white",
                fontSize: 25,
                fontWeight: "600",
                lineHeight: 30,
              }}
            >
             
            </Text>
          </View>
          <View style={{ flex: 1, paddingLeft: 10, justifyContent: "center" }}>
            <Image
              source={require("../assets/icons/food.png")}
              style={{ width: 25, height: 25, tintColor: "red" }}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default HeaderContent;
