//import a a library to help create a component
import React, { Component } from "react"
import { Text, View } from "react-native"
import Header from "./src/components/Header"
import AlbumList from "./src/components/AlbumList"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      headerText: "albums"
    }
  }
  render() {
    return (
      <View>
        <Header headerText={this.state.headerText} />
        <AlbumList />
      </View>
    )
  }
}

export default App
