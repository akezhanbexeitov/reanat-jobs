import { DimensionValue, StyleSheet, ViewStyle } from "react-native";

import { COLORS, SIZES } from "../../../constants";

interface IStyles {
  btnContainer: ViewStyle;
}

export const styles = StyleSheet.create({
  btnContainer: {
    width: 40,
    height: 40,
    backgroundColor: COLORS.white,
    borderRadius: SIZES.small / 1.25,
    justifyContent: "center",
    alignItems: "center",
  }
});

export const btnImg = (dimension: DimensionValue) => ({
  flex: 1,
  width: dimension,
  height: dimension,
  borderRadius: SIZES.small / 1.25,
});
