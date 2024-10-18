import { Text, SafeAreaView, StyleSheet, View, Image } from "react-native";

const Screen01 = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        padding: 10,
      }}
    >
      <View
        style={{
          flex: 1,
        }}
      >
        <Text
          style={{
            textAlign: "center",
            fontSize: 20,
          }}
        >
          {" "}
          A premium online store for sporter and their stylish choise{" "}
        </Text>{" "}
      </View>{" "}
      <View
        style={{
          flex: 4,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          style={{
            width: "100%",
            height: 200,
          }}
          source={require("../assets/preview.png")}
        />{" "}
      </View>{" "}
      <View>
        <Text
          style={{
            textAlign: "center",
            fontSize: 20,
          }}
        >
          {" "}
          POWER BIKE STORE{" "}
        </Text>{" "}
      </View>{" "}
      <View>
        <Text
          style={{
            textAlign: "center",
            fontSize: 20,
            backgroundColor: "#e94141",
            padding: 10,
            borderRadius: 10,
            color: "white",
          }}
          onPress={() => navigation.navigate("Screen02")}
        >
          {" "}
          Get Started{" "}
        </Text>{" "}
      </View>{" "}
    </View>
  );
};
export default Screen01;
