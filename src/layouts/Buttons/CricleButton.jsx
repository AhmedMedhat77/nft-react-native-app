import React from "react";
import { TouchableOpacity, Text, Image } from "react-native";
import { COLORS, SIZES, FONTS, SHADOWS } from "../../../constants";

const CricleButton = (props) => {
  return (
    <TouchableOpacity
      style={{
        width: 40,
        height: 40,
        backgroundColor: COLORS.white,
        position: "absolute",
        borderRadius: SIZES.extraLarge,
        alignItems: "center",
        justifyContent: "center",
        ...SHADOWS.light,
        ...props,
      }}
      onPress={props.handlePress}
    >
      <Image
        source={props.imgUrl}
        resizeMode={"contain"}
        style={{ with: 24, height: 24 }}
      />
    </TouchableOpacity>
  );
};

export default CricleButton;
