import React, { FC } from "react";
import {
  TouchableOpacity,
  Image,
  ImageRequireSource,
  DimensionValue,
} from "react-native";

import { styles, btnImg } from "./screenheader.style";

interface IProps {
  iconUrl: ImageRequireSource;
  dimension: DimensionValue;
  handlePress?: () => void;
}

const ScreenHeaderBtn: FC<IProps> = ({ iconUrl, dimension, handlePress }) => {
  return (
    <TouchableOpacity style={styles.btnContainer} onPress={handlePress}>
      <Image source={iconUrl} resizeMode="cover" style={btnImg(dimension)} />
    </TouchableOpacity>
  );
};

export default ScreenHeaderBtn;
