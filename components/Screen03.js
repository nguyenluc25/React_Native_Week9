import { Image, Text, View } from "react-native";

const Screen03 = ({ route }) => {
  const { bike } = route.params;
  return (
    <View
      style={{
        flex: 1,
        padding: 10,
      }}
    >
      <View>
        <Image source={require("../assets/preview.png")} />
      </View>
      <Text>{bike.name}</Text>
      <Text>{bike.price}</Text>
    </View>
  );
};

export default Screen03;
