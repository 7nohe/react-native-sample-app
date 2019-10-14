import React from "react";
import { AppLoading } from "expo";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import {
  Container,
  Header,
  Title,
  Content,
  Footer,
  FooterTab,
  Button,
  Left,
  Right,
  Body,
  Icon,
  Text,
  Card,
  CardItem,
  Thumbnail
} from "native-base";
import { Image } from "react-native";

// 画像読み込み
function getImages() {
  return fetch("https://picsum.photos/v2/list")
    .then(res => res.json())
    .catch(err => console.error(err));
}

type Photo = {
  download_url: string;
  id: string;
  author: string;
};
type Props = {};
type State = { isReady: boolean; images: Photo[] };

export default class App extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
      images: []
    };
  }

  async componentDidMount() {
    const images = await getImages();
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      ...Ionicons.font
    });
    // console.log(images);
    this.setState({ isReady: true });
    this.setState({ images });
  }

  render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    }

    return (
      <Container>
        <Header>
          <Body>
            <Title>My App</Title>
          </Body>
        </Header>
        <Content>
          {this.state.images.map(image => (
            <Card key={image.id}>
              <CardItem>
                <Left>
                  <Thumbnail
                    source={{
                      uri: `https://na.ui-avatars.com/api/?name=${image.author.replace(
                        "¥s",
                        "+"
                      )}`
                    }}
                  />
                  <Body>
                    <Text>My Image</Text>
                    <Text note>{image.author}</Text>
                  </Body>
                </Left>
              </CardItem>
              <CardItem cardBody>
                <Image
                  source={{ uri: image.download_url }}
                  style={{ height: 200, width: null, flex: 1 }}
                />
              </CardItem>
              <CardItem>
                <Left>
                  <Button transparent>
                    <Icon active name="thumbs-up" />
                    <Text>12 Likes</Text>
                  </Button>
                </Left>
                <Body>
                  <Button transparent>
                    <Icon active name="chatbubbles" />
                    <Text>4 Comments</Text>
                  </Button>
                </Body>
                <Right>
                  <Text>11h ago</Text>
                </Right>
              </CardItem>
            </Card>
          ))}
        </Content>
        <Footer>
          <FooterTab>
            <Button active>
              <Icon name="home" />
            </Button>
            <Button>
              <Icon name="bookmark" />
            </Button>
            <Button>
              <Icon name="person" />
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}
