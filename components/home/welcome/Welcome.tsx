import { FC, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import { useRouter } from "expo-router";
import { styles, tab, tabText } from "./welcome.style";
import { icons, SIZES, COLORS } from "@/constants";
import { JobTypes } from "@/constants/types";

const jobTypes = Object.values(JobTypes);

interface IProps {}

const Welcome: FC<IProps> = () => {
  const router = useRouter();
  const [activeJobType, setActiveJobType] = useState(JobTypes.FullTime);

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello Akezhan</Text>
        <Text style={styles.welcomeMessage}>Find your perfect job</Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value=""
            onChangeText={() => {}}
            placeholder="What are you looking for?"
            placeholderTextColor={COLORS.gray}
          />
        </View>

        <TouchableOpacity style={styles.searchBtn} onPress={() => {}}>
          <Image
            source={icons.search}
            resizeMode="contain"
            style={styles.searchBtnImage}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.tabsContainer}>
        <FlatList
          data={jobTypes}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={tab(activeJobType, item)}
              onPress={() => {
                setActiveJobType(item);
                router.push(`./search/${item}`);
              }}
            >
              <Text style={tabText(activeJobType, item)}>{item}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item}
          contentContainerStyle={{ columnGap: SIZES.small }}
          horizontal
        />
      </View>
    </View>
  );
};

export default Welcome;
