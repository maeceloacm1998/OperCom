import React from "react";
import { View, Text, Image } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";

import { NameUser } from "../NameUser";

import { Container, Background } from "./styled";

import fundo from "../../assets/fundo.png";

export function DrawerCustom({ ...props }) {
  const { state } = props;
  const { routes, index } = state;

  const focusedRoute = routes[index];
  console.log("Rota que eu estou", focusedRoute);

  return (
    <DrawerContentScrollView {...props}>
      <Background source={fundo} />

      <Container>
        <NameUser />
        <DrawerItem
          {...props}
          label="Home"
          icon={({}) => <FontAwesome color="#FFF" size={25} name="home" />}
          onPress={() => props.navigation.navigate("Home")}
          pressColor="#473C8B"
          activeTintColor="#FFF"
          activeBackgroundColor="#ae00ff30"
          inactiveTintColor="#FFF"
          focused={focusedRoute.name == "Home" ? true : false}
        />
        <DrawerItem
          {...props}
          label="Extrato"
          icon={({}) => <FontAwesome color="#FFF" size={25} name="money" />}
          onPress={() => props.navigation.navigate("Extrato")}
          pressColor="#ae00ff30"
          activeTintColor="#FFF"
          activeBackgroundColor="#ae00ff30"
          inactiveTintColor="#FFF"
          focused={focusedRoute.name == "Extrato" ? true : false}
        />
        <DrawerItem
          {...props}
          label="Perfil"
          icon={({}) => (
            <FontAwesome color="#FFF" size={25} name="user-circle" />
          )}
          onPress={() => props.navigation.navigate("Perfil")}
          pressColor="#ae00ff30"
          activeTintColor="#FFF"
          activeBackgroundColor="#ae00ff30"
          inactiveTintColor="#FFF"
          focused={focusedRoute.name == "Perfil" ? true : false}
        />
        <DrawerItem
          {...props}
          label="Mais"
          icon={() => <FontAwesome name="plus-circle" size={25} color="#FFF" />}
          onPress={() => props.navigation.navigate("Config")}
          pressColor="#ae00ff30"
          activeTintColor="#FFF"
          activeBackgroundColor="#ae00ff30"
          inactiveTintColor="#FFF"
          focused={focusedRoute.name == "Config" ? true : false}
        />
        <DrawerItem
          {...props}
          label="Sair do App"
          icon={({}) => <FontAwesome name="sign-in" size={25} color="#FFF" />}
          onPress={() => props.navigation.navigate("Dale")}
          pressColor="#ae00ff30"
          activeTintColor="#FFF"
          activeBackgroundColor="#ae00ff30"
          inactiveTintColor="#FFF"
        />
      </Container>
    </DrawerContentScrollView>
  );
}
