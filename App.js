import React from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';
import {LearnMoreLinks} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <LearnMoreLinks />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
