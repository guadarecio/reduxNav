import {View, Text, Button, TextInput} from 'react-native';
import React, {useState} from 'react';
import {add} from '../redux/action';
import {useDispatch} from 'react-redux';

const AddTodos = ({}) => {
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [creationDate, setCreationDate] = useState();

  const dispatch = useDispatch();

  const newTodo = {
    id: Date.now(),
    title,
    description,
    creationDate: '12.02',
    done: false,
  };

  return (
    <View>
      <Text>AddTodos</Text>
      <Text>Title</Text>
      <TextInput
        onChangeText={text => setTitle(text)}
        value={title}
        placeholder="Write your Title"
      />
      <Text>Description</Text>
      <TextInput
        onChangeText={text => setDescription(text)}
        value={description}
        placeholder="Write your Description"
      />
      <Text>Date</Text>
      <TextInput
        onChangeText={text => setCreationDate(text)}
        value={creationDate}
        placeholder="Write your Date"
      />
      <Button onPress={() => dispatch(add(newTodo))} title="Save todo" />
    </View>
  );
};

export default AddTodos;
