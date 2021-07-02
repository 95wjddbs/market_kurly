import React, {useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';

const MyPage = () => {
  return (
    <SafeAreaView style={{backgroundColor: 'white'}}>
      <ScrollView>
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <Text>마이컬리</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
});

export default MyPage;
