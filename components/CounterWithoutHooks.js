import React, { Component } from "react";
import { Image, Text, View } from "react-native";

export class CounterWithoutHooks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      showHiddeText: false,
      showAnnoyedText: false,
    };
  }

  componentDidMount() {
    if (this.props.count > 20) {
      this.setState({ showHiddeText: true });
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (
      this.props.count >= 10 &&
      this.props.count !== prevProps.count &&
      this.props.count < 30
    ) {
      this.setState({ showHiddeText: true });
    }
    if (this.props.count >= 30 && this.props.count !== prevProps.count) {
      this.setState({ showHiddeText: false, showAnnoyedText: true });
    }
  }
  componentWillUnmount() {
    alert("ciao 👋");
  }

  render() {
    return (
      <View>
        {!this.state.showAnnoyedText && (
          <Text>
            {`How many times you clicked? ${this.props.count} powered by React Class`}{" "}
          </Text>
        )}
        {this.state.showHiddeText && (
          <Image
            style={{ width: 300, height: 200 }}
            source={{
              uri: "https://media3.giphy.com/media/vmtxnxveVUodG/giphy.gif",
            }}
          />
        )}

        {this.state.showAnnoyedText && (
          <View>
            <Text> Please go on with your life</Text>
            <Image
              style={{ width: 300, height: 200 }}
              source={{
                uri:
                  "https://media.giphy.com/media/BY8ORoRpnJDXeBNwxg/source.gif",
              }}
            />
          </View>
        )}
      </View>
    );
  }
}
