import React, { Component } from "react";
import { Image, Text, View } from "react-native";

export class CounterWithoutHooks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      showHiddeText: false,
    };
  }

  componentDidMount() {
    if (this.props.count > 20) {
      this.setState({ showHiddeText: true });
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.props.count > 1 && this.props.count !== prevProps.count) {
      this.setState({ showHiddeText: true });
    }
  }
  componentWillUnmount() {
    alert("ciao 👋");
  }

  render() {
    return (
      <View>
        <Text> {this.props.count} </Text>
        {this.state.showHiddeText ? (
          <Image
            style={{ width: 300, height: 200 }}
            source={{
              uri: "https://media3.giphy.com/media/vmtxnxveVUodG/giphy.gif",
            }}
          />
        ) : (
          <Image
            style={{ width: 300, height: 200 }}
            source={{
              uri: "https://media.giphy.com/media/l0HlBO7eyXzSZkJri/source.gif",
            }}
          />
        )}
      </View>
    );
  }
}
