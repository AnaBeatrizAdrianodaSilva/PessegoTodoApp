import { ScrollView, View } from "react-native";
import Task from "../components/Task";

export default function HomeScreen({ navigation }) {
    return (
        <ScrollView>
            <View>
                <Task />
            </View>      
        </ScrollView>
    )
}

