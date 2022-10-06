import React from 'react';
import {Text, View} from 'react-native';
import {useSelector} from 'react-redux';

const ViewScreen = ({route}) => {
  console.log(route);
  const data = useSelector(state => state.reducerApp);

  return (
    <View>
      <Text>{route.params.title}</Text>
      <Text>{route.params.description}</Text>
      <Text>{route.params.creationDate}</Text>
    </View>
  );
};

export default ViewScreen;
