import axios from "axios";
import { useEffect, useState } from "react";
import { TouchableOpacity } from "react-native";
import { FlatList, Image, Text, View } from "react-native";

const Screen02 = ({ navigation }) => {
  const [data, setData] = useState([]); // Khởi tạo state cho dữ liệu

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://6708837c8e86a8d9e42f2365.mockapi.io/bike"
      ); // Thay thế bằng API của bạn
      setData(response.data); // Giả định rằng response.data là mảng
    } catch (err) {
      console.log(err.message);
    } finally {
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const Item = ({ item, navigation }) => (
    <TouchableOpacity
      onPress={() => navigation.navigate("Screen03", { bike: item })}
    >
      <View
        style={{
          flex: 1,
        }}
      >
        <View>
          <Image
            style={{
              width: 100,
              height: 100,
            }}
            source={require("../assets/preview.png")}
          />
        </View>
        <Text
          style={{
            fontSize: 20,
          }}
        >
          {item.name}
        </Text>
        <Text
          style={{
            fontSize: 20,
          }}
        >
          {item.price}
        </Text>
      </View>
    </TouchableOpacity>
  );

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
            color: "red",
            fontSize: 20,
          }}
        >
          The world's Best Bike
        </Text>
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text
          style={{
            color: "red",
            borderColor: "red",
            fontSize: 15,
            borderWidth: 1,
          }}
        >
          All
        </Text>
        <Text>Roadbike</Text>
        <Text>Mountain</Text>
      </View>
      <FlatList
        data={data}
        renderItem={({ item }) => <Item item={item} navigation={navigation} />}
        keyExtractor={(item) => item.id}
        numColumns={2}
      />
    </View>
  );
};

export default Screen02;
