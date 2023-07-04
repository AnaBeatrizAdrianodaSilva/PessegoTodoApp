import { ScrollView, View } from "react-native";
import Task from "../components/Task";
import { Button } from "react-native-paper";

export default function HomeScreen({ navigation }) {
  return (
    <ScrollView >
      <View style={{alignItems:'center',justifyContent:'center',height:500,}}>
        <Button
        style={{width:300}}
          mode="contained"
          buttonColor="#8A02F2"
          textColor="#fff"
          onPress={() => {
            navigation.navigate("Task");
          }}
        >Clique aqui para ver suas tasks</Button>
      </View>
    </ScrollView>
  );
}
