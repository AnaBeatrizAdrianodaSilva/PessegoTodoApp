import React, { useEffect, useState } from "react";
import { Button, TextInput, View } from "react-native";
import { db } from "../config/firebase";
import { doc, setDoc } from "firebase/firestore";

const EditTask = ({ navigation, route }) => {
  const { taskId } = route.params;
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    const fetchTask = async () => {
      const taskRef = doc(db, "Tasks", taskId);
      const taskSnapshot = await taskRef.get();

      if (taskSnapshot.exists()) {
        const taskData = taskSnapshot.data();
        setTitle(taskData.Title);
        setContent(taskData.Content);
      } else {
        // Lidar com o caso em que a tarefa não existe
      }
    };

    fetchTask();
  }, []);

  const handleSave = async () => {
    const taskRef = doc(db, "Tasks", taskId);
    await setDoc(taskRef, {
      Title: title,
      Content: content,
    });

    // Navegar de volta para a tela de visualização da tarefa
    navigation.goBack();
  };

  return (
    <View>
      <TextInput
        value={title}
        onChangeText={setTitle}
        placeholder="Título da Tarefa"
      />
      <TextInput
        value={content}
        onChangeText={setContent}
        placeholder="Conteúdo da Tarefa"
        multiline
      />
      <Button title="Salvar" onPress={handleSave} />
    </View>
  );
};

export default EditTask;