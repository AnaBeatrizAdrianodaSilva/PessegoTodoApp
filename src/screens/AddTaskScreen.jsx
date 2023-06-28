import { View } from "react-native";
import { Button, TextInput } from "react-native-paper";
import { addDoc, collection } from "firebase/firestore";
import { useState } from "react";
import { db } from "../config/firebase";

export default function AddTaskScreen() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");


  async function inserirTask() {
    try {
      
      const payload = {
        Title: title,
        Content: content,
      };
      const task = await addDoc(taskRef, payload);
      console.log(task);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <View>
      <View>
        <TextInput label="Titulo" value={title} onChangeText={setTitle} />
        <TextInput label="Descrição" value={content} onChangeText={setContent} />

        <Button mode="contained" onPress={inserirTask}>
          Adicionar Task
        </Button>
      </View>
    </View>
  );
}
