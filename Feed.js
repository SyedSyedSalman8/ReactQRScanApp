import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default class Feed extends React.Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.TextStyle}> User Details are as follows: </Text>
        <Text style={styles.TextStyle}>
          Name: {JSON.stringify(navigation.getParam("name", "NA"))}
        </Text>
        <Text style={styles.TextStyle}>
          Email: {JSON.stringify(navigation.getParam("email", "NA"))}
        </Text>
        <Text style={styles.TextStyle}>
          Mobile: {JSON.stringify(navigation.getParam("mobile", "NA"))}
        </Text>
        <Text style={styles.TextStyle}>
          Age: {JSON.stringify(navigation.getParam("age", "NA"))}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#003f5c",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    fontWeight: "bold",
    fontSize: 50,
    color: "#fb5b5a",
    marginBottom: 40,
  },
  inputView: {
    width: "80%",
    backgroundColor: "#465881",
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: "center",
    padding: 20,
  },
  inputText: {
    height: 50,
    color: "white",
  },
  forgot: {
    color: "white",
    fontSize: 11,
  },
  loginBtn: {
    width: "80%",
    backgroundColor: "#fb5b5a",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 10,
  },
  loginText: {
    color: "white",
  },
  TextStyle: {
    color: "white",
  },
});
