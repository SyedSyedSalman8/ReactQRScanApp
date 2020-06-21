import React from "react";
import { StyleSheet, Text, View, Button, TextInput, Alert } from "react-native";

export default class Home extends React.Component {
  state = { email: "", password: "", dataSource: "" };
  componentDidMount() {
    return fetch(
      "https://my-json-server.typicode.com/syedsyedsalman8/qrcode-react/auth"
    )
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState(
          {
            isLoading: false,
            dataSource: responseJson,
          },
          function () {
            console.log(this.state.dataSource.length);
          }
        );
      })
      .catch((error) => {
        console.error(error);
      });
  }
  login() {
    console.log("array length " + this.state.dataSource.length);
    const data = [
      { key: 1, label: "Service1" },
      { key: 2, label: "Service2" },
      { key: 3, label: "Service3" },
    ];
    var jsonData = {
      services: [
        { id: 1, name: "salman" },
        { id: 2, name: "Embassies" },
      ],
    };

    var data1 = this.state.dataSource.map(function (item) {
      return {
        key: item.id,
        label: item.username,
        pass: item.password,
        name: item.name,
        email: item.email,
        mobile: item.mobile,
        age: item.age,
      };
    });
    var a = 0;
    console.log("length: " + data1.length);
    for (let j = 0; j < data1.length; j++) {
      console.log(
        "key and label: " +
          data1[j].key +
          data1[j].label +
          data1[j].pass +
          data1[j].mobile +
          data1[j].age
      );
      if (
        data1[j].label == this.state.email &&
        data1[j].pass == this.state.password
      ) {
        console.log("logged in");
        this.props.navigation.navigate("Feed", {
          id: data1[j].key,
          name: data1[j].name,
          email: data1[j].email,
          mobile: data1[j].mobile,
          age: data1[j].age,
        });
      } else {
        a = a + 1;
        //console.log(data1[j].key);
      }
    }
    if (a == data1.length) {
      Alert.alert("Invalid Creds!");
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.logo}>Qr Code</Text>

        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="Email..."
            placeholderTextColor="#003f5c"
            onChangeText={(text) => this.setState({ email: text })}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            secureTextEntry
            style={styles.inputText}
            placeholder="Password..."
            placeholderTextColor="#003f5c"
            onChangeText={(text) => this.setState({ password: text })}
          />
        </View>
        <View style={styles.loginBtn}>
          <Button title="Login" onPress={this.login.bind(this)} />
        </View>
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
});
