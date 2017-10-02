import React from 'react';
import { render } from 'react-dom';
// import { Provider } from 'react-redux';
import App from 'grommet/components/App';
import Card from 'grommet/components/Card';
import Hero from 'grommet/components/Hero';
import Image from 'grommet/components/Image';
import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';
import Tiles from 'grommet/components/Tiles';
import Tile from 'grommet/components/Tile';
import Header from 'grommet/components/Header';
import Title from 'grommet/components/Title';
import Search from 'grommet/components/Search';
import Footer from 'grommet/components/Footer';
import Menu from 'grommet/components/Menu';
import Anchor from 'grommet/components/Anchor';
import Paragraph from 'grommet/components/Paragraph';

// import store from './store';
// import Root from './config/Root';

render(
  <App>
    <Header fixed>
      <Title>
        Sample Title
      </Title>
      <Box
        flex
        justify="end"
        direction="row"
        responsive={false}
      >
        <Search
          inline
          fill
          size="medium"
          placeHolder="Search"
          dropAlign={{ right: 'right' }}
        />
      </Box>
    </Header>
    <Hero
      background={<Image src="http://grommet.io/img/carousel-1.png" fit="cover" full />}
      backgroundColorIndex="dark"
      size="large"
    >
      <Box
        direction="row"
        justify="center"
        align="center"
      >
        <Box
          basis="1/2"
          align="end"
          pad="medium"
        />
        <Box
          basis="1/2"
          align="start"
          pad="medium"
        >
          <Heading margin="none">
            Sample Heading
          </Heading>
        </Box>
      </Box>
    </Hero>
    <Tiles fill>
      <Tile>
        <Card
          thumbnail="http://grommet.io/img/carousel-1.png"
          label="Sample Label"
          heading="Sample Heading"
          description="Sample description providing more details."
        />
      </Tile>
      <Tile>
        <Card
          thumbnail="http://grommet.io/img/carousel-1.png"
          label="Sample Label"
          heading="Sample Heading"
          description="Sample description providing more details."
        />
      </Tile>
      <Tile>
        <Card
          thumbnail="http://grommet.io/img/carousel-1.png"
          label="Sample Label"
          heading="Sample Heading"
          description="Sample description providing more details."
        />
      </Tile>
      <Tile>
        <Card
          thumbnail="http://grommet.io/img/carousel-1.png"
          label="Sample Label"
          heading="Sample Heading"
          description="Sample description providing more details."
        />
      </Tile>
    </Tiles>
    <Footer
      justify="between"
      size="large"
    >
      <Title>
        <s />
        Title
      </Title>
      <Box
        direction="row"
        align="center"
        pad={{ between: 'medium' }}
      >
        <Paragraph margin="none">
          © 2016 Grommet Labs
        </Paragraph>
        <Menu
          direction="row"
          size="small"
          dropAlign={{ right: 'right' }}
        >
          <Anchor href="#">
            Support
          </Anchor>
          <Anchor href="#">
            Contact
          </Anchor>
          <Anchor href="#">
            About
          </Anchor>
        </Menu>
      </Box>
    </Footer>
  </App>,
  document.getElementById('root'),
);
