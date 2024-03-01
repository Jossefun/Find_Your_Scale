import { createDrawerNavigator } from "@react-navigation/drawer";
import AboutStack from "./aboutStack";
import About from "../screens/about";
import HomeStack from "./homeStack";
import { Component } from "react/cjs/react.production.min";

const Drawer = createDrawerNavigator();

const MyDrawer = () => {
    return (
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={HomeStack} />
        <Drawer.Screen name="About" component={AboutStack} />
      </Drawer.Navigator>
    );
  };
  
  export default MyDrawer;