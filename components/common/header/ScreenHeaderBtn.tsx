import React, { FC } from "react";
import { View, Text } from "react-native";

import styles from "./screenheader.style";

interface IProps {
  iconUrl: string;
  dimension: string;
}

const ScreenHeaderBtn: FC<IProps> = ({ iconUrl, dimension }) => {
  return (
    <View>
      <Text>ScreenHeaderBtn</Text>
    </View>
  );
};

export default ScreenHeaderBtn;
