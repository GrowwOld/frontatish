import React from 'react';
import { View, Text, Animated, FlatList } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Ripple from 'react-native-material-ripple';
import { ColorType } from '../../common/types';
import { withColors } from '../../themes';
import getStyles from './styles';

import { TabviewProps, TabViewState, routeType } from './types';

class TabView extends React.Component<TabviewProps, TabViewState> {
  Colors: ColorType;

  styles: any;

  flatListRef: any;

  constructor(props: TabviewProps) {
    super(props);
    const { defaultRoute, routes } = this.props;
    this.state = {
      sliderTranslateX: new Animated.Value(0),
      tabPosition:
        defaultRoute && defaultRoute >= 0 && defaultRoute < routes.length
          ? defaultRoute
          : 0,
      containerWidth: 0,
      tabWidth: 0,
    };
    this.Colors = props.Colors;
    this.styles = getStyles(this.Colors);
  }

  componentDidUpdate(prevProps: TabviewProps, prevState: TabViewState) {
    const { tabPosition } = this.state;
    if (prevState.tabPosition !== tabPosition) {
      this.flatListRef?.scrollToIndex({ index: tabPosition });
    }
  }

  calcTabWidth = ({
    nativeEvent: {
      layout: { width },
    },
  }: {
    nativeEvent: { layout: { width: number } };
  }) => {
    const { routes } = this.props;
    this.setState({
      containerWidth: width,
      tabWidth: width / routes.length,
    });
  };

  switchTabByPress = (newTabPosition: number) => {
    const { tabPosition, sliderTranslateX, tabWidth } = this.state;

    if (newTabPosition !== tabPosition) {
      Animated.spring(sliderTranslateX, {
        toValue: newTabPosition * tabWidth,
        useNativeDriver: true,
      }).start();

      this.setState({ tabPosition: newTabPosition });
    }
  };

  renderChildComponent = ({
    item,
    index,
  }: {
    item: routeType;
    index: number;
  }) => {
    const { containerWidth } = this.state;
    return (
      <View style={{ width: containerWidth }} key={index}>
        {item.component}
      </View>
    );
  };

  onSwipe = (event: { nativeEvent: { contentOffset?: { x?: number } } }) => {
    const x = event.nativeEvent?.contentOffset?.x;
    const { sliderTranslateX, containerWidth, tabPosition } = this.state;
    const { routes } = this.props;
    const sliderNewX = x!! / routes.length; // 1 full width swipe = 1 tab width animation

    Animated.spring(sliderTranslateX, {
      toValue: sliderNewX,
      useNativeDriver: true,
    }).start();

    const newTabPosition = Math.floor(x!! / containerWidth);

    // x%containerWidth==0, when swipe is complete
    if (x!! % containerWidth === 0 && newTabPosition !== tabPosition) {
      this.setState({ tabPosition: newTabPosition });
    }
  };

  setFlatListRef = (ref: any) => {
    this.flatListRef = ref;
  };

  keyExtractor = (item: routeType, index: number) => item.title + index;

  render() {
    const {
      routes,
      activeTabColor,
      inactiveTabColor,
      activeUnderlineStyle,
      fullWidthLineStyle,
      tabTextStyle,
      showfullWidthLine,
      style,
    } = this.props;
    const {
      sliderTranslateX,
      tabPosition,
      tabWidth,
      containerWidth,
    } = this.state;
    const { styles } = this;
    return (
      <View style={style}>
        <View style={styles.tabsRoot} onLayout={this.calcTabWidth}>
          {routes.map((route, index) => (
            <Ripple
              style={{ flex: 1 }}
              onPress={() => this.switchTabByPress(index)}
            >
              <Text
                style={[
                  styles.tabText,
                  tabTextStyle,
                  {
                    color:
                      index === tabPosition ? activeTabColor : inactiveTabColor,
                  },
                ]}
              >
                {route.title}
              </Text>
            </Ripple>
          ))}
        </View>
        <View
          style={[
            styles.fullWidthLine,
            fullWidthLineStyle,
            showfullWidthLine ? null : { backgroundColor: Colors.transparent },
          ]}
        >
          <Animated.View
            style={[
              styles.sliderLine,
              activeUnderlineStyle,
              {
                backgroundColor: activeTabColor,
                width: tabWidth,
                transform: [{ translateX: sliderTranslateX }],
              },
            ]}
          />
        </View>
        <FlatList
          data={routes}
          renderItem={this.renderChildComponent}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          extraData={containerWidth}
          style={styles.container}
          onScroll={this.onSwipe}
          ref={this.setFlatListRef}
          keyExtractor={this.keyExtractor}
        />
      </View>
    );
  }
}

TabView.defaultProps = {
  activeTabColor: '#00D09C',
  inactiveTabColor: '#44475B',
};

export default withColors(TabView);
