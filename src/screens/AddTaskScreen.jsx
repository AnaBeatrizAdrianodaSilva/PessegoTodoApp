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

  const taskRef = collection(db, "Tasks");

  return (
    <View>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <View
          style={{
            width: 350,
            height: 250,
            backgroundColor: "#8202E6",
            marginTop: 200,
            alignItems: "center",
            borderRadius: 7,
          }}
        >
          <TextInput
            style={{ width: 220, height: 50, borderRadius: 7, marginTop: 50 }}
            label="Titulo"
            value={title}
            onChangeText={setTitle}
          />
          <TextInput
            style={{
              width: 220,
              height: 50,
              borderRadius: 7,
              marginTop: 20,
              marginBottom: 20,
            }}
            label="Descrição"
            value={content}
            onChangeText={setContent}
          />

          <Button mode="contained" onPress={inserirTask} buttonColor="#5F02A6">
            Adicionar Task
          </Button>
        </View>
      </View>
    </View>
  );
}
