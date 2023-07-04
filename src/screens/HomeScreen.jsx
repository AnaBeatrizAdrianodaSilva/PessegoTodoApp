import { ScrollView, View } from "react-native";
import Task from "../components/Task";
import { Button } from "react-native-paper";

export default function HomeScreen({ navigation }) {
  return (
    <ScrollView>
      <View>
        <Button
          mode="contained"
          buttonColor="#fff"
          textColor="#8A02F2"
          onPress={() => {
            navigation.navigate("Task");
          }}
        >Clique aqui para ver suas tasks</Button>
      </View>
    </ScrollView>
  );
}
