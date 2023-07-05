import React, { useEffect, useState } from "react";
import {   View } from "react-native";
import { Button, TextInput, } from "react-native-paper"
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
      <View style={{justifyContent:'center', alignItems:'center'}}>
<View style={{width:300,height:220,backgroundColor:'#8202E6',marginTop:150,alignItems:'center',borderRadius:7,paddingTop:20}}>
      <TextInput
        style={{width:220,height:40,borderRadius:7,marginTop:5}}
        value={title}
        onChangeText={setTitle}
        placeholder="Título da Tarefa"
      />
      <TextInput
        style={{width:220,height:40,borderRadius:7,marginTop:10}}
        value={content}
        onChangeText={setContent}
        placeholder="Conteúdo da Tarefa"
        multiline
      />
      <Button
      style={{width:150,marginTop:20}} 
      mode="contained" 
      onPress={handleSave} 
      buttonColor="#5F02A6"
      textColor="#fff"
      > Salvar </Button>
    </View>
    </View>
  );
};

export default EditTask;
