import React, { useEffect, useState } from "react";
import { Avatar, Button, Card, Text } from "react-native-paper";
import { db } from "../config/firebase";
import { collection, getDocs } from "firebase/firestore";
import { View } from "react-native-web";

const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;

const Task = ({ navigation }) => {
  const [tasks, setTasks] = React.useState([]);

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
          <Card.Content>
            <Text variant="titleLarge">{task.Title}</Text>
            <Text variant="bodyMedium">{task.Content}</Text>
          </Card.Content>
          <Card.Actions>
            <Button
              onPress={() => {
                navigation.navigate("");
              }}
            >
              Editar
            </Button>
          </Card.Actions>
        </Card>
      ))}
    </View>
  );

  // <Card>
  //   <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} />
  //   <Card.Content>
  //     <Text variant="titleLarge">{title}</Text>
  //     <Text variant="bodyMedium">Card content</Text>
  //   </Card.Content>

  //   <Card.Actions>
  //     <Button>Cancel</Button>
  //     <Button>Ok</Button>
  //   </Card.Actions>
  // </Card>
};

export default Task;
