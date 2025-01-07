import {  StatusBar, Text } from 'react-native';


import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  return (
    <SafeAreaView className='flex-1 items-center justify-center bg-white'>
      <Text className='font-bold my-10 mx-15 text-red-500'>
        My trial was successful
      </Text>
      <Text> Hi from the phone?</Text>
      <StatusBar style="auto"/>
    </SafeAreaView>
  );
}
