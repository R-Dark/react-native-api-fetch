import React, { Component } from "react";
import { Text, Image, View, Linking } from "react-native";
import Card from "./Card"
import CardSection from "./CardSection"
import Button from "./Button"


class  AlbumDetail extends Component {
  render() {
    const { title, artist, thumbnail_image, image, url } = this.props.album
    return(
      <Card>
        <CardSection>
          <View style={styles.thumbnailContainerStyle}>
            <Image source={{ uri: thumbnail_image }}  style={styles.thumbnailStyle} />
          </View>
          <View style={styles.headerContentStyle}>
            <Text style={styles.headerTextStyle}>{title}</Text>
            <Text>{artist}</Text>
          </View>
        </CardSection>
        <CardSection>
          <Image source={{ uri: image}} style={styles.imageStyle}/>
        </CardSection>
        <CardSection>
          <Button onPress={() => Linking.openURL(url)}>
            Buy Now
          </Button>
        </CardSection>
      </Card>
    )
  }
}

const styles = {
  headerContentStyle: {
    justifyContent: 'space-around',
    flexDirection: 'column'
  },
  thumbnailStyle: {
    height: 50,
    width: 50,
  },
  thumbnailContainerStyle: {
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
    marginRight: 10
  },
  headerTextStyle: {
    fontSize: 18
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null
  }
  }

export default AlbumDetail
