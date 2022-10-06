import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import AddTodos from '../../screens/AddTodos';
import EditTodos from '../../screens/EditTodos';
import HomeScreen from '../../screens/HomeScreen';
import ViewScreen from '../../screens/ViewScreen';

const MyDrawer = createDrawerNavigator();

function Drawer() {
  return (
    <MyDrawer.Navigator>
      <MyDrawer.Screen name="Home" component={HomeScreen} />
      <MyDrawer.Screen name="Add" component={AddTodos} />
      <MyDrawer.Screen name="Edit" component={EditTodos} />
      <MyDrawer.Screen name="View" component={ViewScreen} />
    </MyDrawer.Navigator>
  );
}

export default Drawer;
