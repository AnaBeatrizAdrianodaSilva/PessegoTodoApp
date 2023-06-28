import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { Card, Text } from "react-native-paper";
import { db } from "../config/firebase";
import { collection, getDocs } from "firebase/firestore";

export default function Testeteste() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const querySnapshot = await getDocs(collection(db, "Tasks"));
      const taskList = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        Title: doc.data().Title,
        Content: doc.data().Content,
      }));
      setTasks(taskList);
    };

    fetchTasks();
  }, []);

  return (
    <View>
      {tasks.map((task) => (
        <Card key={task.id}>
          <Text>Titulo: {task.Title}</Text>
          <Text>Descrição: {task.Content}</Text>
        </Card>
      ))}
    </View>
  );
}