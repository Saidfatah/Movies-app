import React from 'react';
import { ScrollView, SafeAreaView } from 'react-native';
import PropTypes from 'prop-types';
import { withTheme } from '../../theme/index';

const propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(
      PropTypes.node,
    ),
  ]).isRequired,
  onScroll: PropTypes.func,
  transparency: PropTypes.bool,
  opacity: PropTypes.number,
};

const defaultProps = {
  transparency: false,
  onScroll: () => {},
  opacity:1,
};

const Container = ({
  theme,
  onScroll,
  children,
  transparency,
  opacity
}) => (
  <SafeAreaView style={{ flex: 1,opacity, backgroundColor: !transparency ? theme.background : 'rgba(0, 0, 0, 0.7)' }}>
    <ScrollView
      scrollEventThrottle={1}
      onScroll={({ nativeEvent }) => onScroll(nativeEvent.contentOffset.y)}
      style={{ flex: 1 }}
    >
      {children}
    </ScrollView>
  </SafeAreaView>
);

Container.propTypes = propTypes;
Container.defaultProps = defaultProps;

export default withTheme(Container);
