import React from "react";
import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";

export default class Feed extends React.Component {
  state = {
    id: "",
    dataSource: "",
  };

  componentDidMount() {
    return fetch(
      "https://my-json-server.typicode.com/syedsyedsalman8/qrcode-react/rewardPoints"
    )
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState(
          {
            isLoading: false,
            dataSource: responseJson,
          },
          function () {
            console.log("length " + this.state.dataSource.length);
          }
        );
      })
      .catch((error) => {
        console.error(error);
      });
  }
  rewardPoints() {
    console.log("Inside rewards id " + this.state.id);

    var data1 = this.state.dataSource.map(function (item) {
      return {
        id: item.id,
        points: item.points,
        authId: item.authId,
      };
    });
    console.log("datalength: " + data1.length);
    for (let j = 0; j < data1.length; j++) {
      if (data1[j].authId == this.state.id) {
        alert(data1[j].points + " points");
      }
    }
  }

  render() {
    const { navigation } = this.props;
    id = JSON.stringify(navigation.getParam("id", "NA"));
    console.log(" id " + id);
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
        <View style={styles.Button}>
          <Button
            title="Reward Points"
            onPress={this.rewardPoints.bind(this, (this.state.id = id))}
          >
            <Text style={styles.loginText}>Login</Text>
          </Button>
        </View>
        <View style={styles.loginBtn}>
          <TouchableOpacity
            onPress={() =>
              this.props.navigation.navigate("QRScan", {
                id: id,
              })
            }
          >
            <Text style={styles.loginText}>Scan QR</Text>
          </TouchableOpacity>
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
  TextStyle: {
    color: "white",
  },
});
