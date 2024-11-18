import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  StatusBar,
  ImageBackground,
} from "react-native";

const FacebookLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Implementasi login ke API Facebook
    console.log("Login dengan:", email, password);
  };

  return (
    <ImageBackground
      source={require("./pexels-veeterzy-303383.jpg")}
      style={styles.backgroundImage}
    >
      <ScrollView style={styles.container}>
        <KeyboardAvoidingView behavior="padding" style={styles.centeredView}>
          <View style={styles.header}>
            <Text style={styles.headerText}>Login Fedry X 3ztstore</Text>
          </View>
          <View style={styles.loginBox}>
            <TextInput
              style={styles.input}
              placeholder="Email atau Nomor Telepon"
              value={email}
              onChangeText={setEmail}
              placeholderTextColor="#666"
            />
            <TextInput
              style={styles.input}
              placeholder="Kata Sandi"
              secureTextEntry={true}
              value={password}
              onChangeText={setPassword}
              placeholderTextColor="#666"
            />
            <Button title="Masuk" onPress={handleLogin} color="#4A90E2" />
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
      <View style={styles.footer}>
        <Text style={styles.footerText}>Edited by Fedry Faurrozy</Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  container: {
    flex: 1,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  header: {
    padding: 15,
    backgroundColor: "rgba(0, 0, 0, 0.3)", // Mengubah background menjadi hitam transparan
    alignItems: "center",
    borderRadius: 10,
    marginBottom: 50,
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight || 20 : 40,
    width: 300,
    height: 60,
    borderWidth: 1,
    borderColor: "rgba(74, 144, 226, 0.3)",
  },
  headerText: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  loginBox: {
    width: 300,
    height: 300,
    padding: 20,
    backgroundColor: "rgba(0, 0, 0, 0.3)", // Mengubah background menjadi hitam transparan
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.5,
    elevation: 6,
    borderWidth: 1,
    borderColor: "rgba(74, 144, 226, 0.3)",
    justifyContent: "center",
  },
  input: {
    backgroundColor: "#F5F8FA",
    padding: 12,
    marginBottom: 15,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#4A90E2",
    fontSize: 16,
  },
  footer: {
    padding: 10,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    alignItems: "center",
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
  footerText: {
    color: "#fff",
    fontSize: 14,
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
});

export default FacebookLogin;
