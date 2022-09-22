import React from 'react'
import { View, Text, Button } from 'react-native'
import { useNavigation } from "@react-navigation/native";
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
import User from "./User/user";
import Admin from "./Admin/admin";

function Selecter({route}) {
    const {user} = route.params;
    const auth = getAuth();
    const navigation = useNavigation();

    if (user.rol === "Admin") {
        navigation.navigate("Admin");
    } else {
        navigation.navigate("User");
    }
}

export default Selecter