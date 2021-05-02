import React from 'react';
import {
  View,
  Platform,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  KeyboardAvoidingView,
  ImageBackground
} from 'react-native';
import PropTypes from 'prop-types';
import { Header } from '@react-navigation/stack';
import { Colors } from '../../theme/index';
import Text from './Text';
import Logo from './Logo';

const propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
};

const LoginView = ({  children }) => {
  const { container, content, titleContainer } = styles;

  return (
    <SafeAreaView style={container}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        {...Platform.select({
          ios: {
            enabled: true,
            behavior: 'padding',
            keyboardVerticalOffset: Header.HEIGHT + 20,
          },
        })}
      >

        <View style={titleContainer}>
         <Logo />
        </View>
        <ScrollView
          style={{ marginHorizontal: 8 }}
          contentContainerStyle={content}
          keyboardShouldPersistTaps="handled"
        >
          {children}
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: Colors.black,
  },
  titleContainer: {
    marginTop: 20,
    display:"flex",
    justifyContent:"center",
    alignItems:"center"
  },
  content: {
    flexGrow: 1,
    justifyContent: 'center',
  },
});

LoginView.propTypes = propTypes;

export default LoginView;
