import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { COLORS, FONTS, SIZES } from "../../../constants";

const RectButton = (props) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: COLORS.primary,
        borderRadius: SIZES.extraLarge,
        minWidth: props.minWidth,
        padding: SIZES.small,
        ...props,
      }}
      onPress={props.handlePress}
    >
      <Text
        style={{
          fontFamily: FONTS.semiBold,
          fontSize: props.fontSize,
          color: COLORS.white,
          textAlign: "center",
        }}
      >
        Place a bid
      </Text>
    </TouchableOpacity>
  );
};

export default RectButton;
