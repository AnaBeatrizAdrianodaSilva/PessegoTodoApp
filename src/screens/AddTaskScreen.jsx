import { View } from "react-native";
import { Button, TextInput } from "react-native-paper";

export default function AddTaskScreen() {
    return (
        <View>
            <View>
                <TextInput
                    placeholder="Title"
                />
                <TextInput
                    placeholder="Content"
                />

                <Button
                    mode="contained"
                >Adicionar Task</Button>
            </View>
        </View>      
    )
}