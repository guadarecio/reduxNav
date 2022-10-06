import React from 'react';
import {
  View,
  Text,
  Button,
  TextInput,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {deleteTodo} from '../redux/action';
import {edit} from '../redux/action';

const Item = ({title}) => (
  <View>
    <Text>{title}</Text>
  </View>
);

const HomeScreen = ({navigation}) => {
  const data = useSelector(state => state.reducerApp);
  const dispatch = useDispatch();
  const renderItem = ({item}) => {
    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          backgroundColor: 'white',
          margin: 5,
        }}>
        <TouchableOpacity
          onPress={() => navigation.navigate('View', item)}
          style={{paddingBottom: 5, flex: 1}}>
          <Item title={item.title} />
        </TouchableOpacity>

        <View style={{flexDirection: 'row'}}>
          <Button onPress={() => dispatch(edit(item.id))} title="Edit" />
          <Button
            onPress={() => dispatch(deleteTodo(item.id))}
            title="Delete"
          />
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView>
      <View>
        <Text>TodoApp</Text>

        <Button onPress={() => navigation.navigate('Add')} title={'Add Todo'} />

        <Text>Your TodoList!</Text>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
