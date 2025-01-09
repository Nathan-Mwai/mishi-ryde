import { router } from 'expo-router'
import { useRef } from 'react'
import {  Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Swiper from 'react-native-swiper'

const Onboarding = () => {
  const swiperRef = useRef<Swiper>(null)
  return (
    <SafeAreaView className='flex h-full items-center justify-between bg-white'>
      <TouchableOpacity
      onPress={()=> {
        router.replace('/(auth)/sign-up')
      }}
      className='w-full flex justify-end items-end p-5'
      >
        <Text className='text-black text-md font-JakartaBold'>
          Skip
        </Text>
      </TouchableOpacity>
      <Swiper
      ref={swiperRef}
      loop={false}
      dot={<View className='w-[32px] h-[4px] mx-1 bg-[#E2E8F0] rounded-full'/>}
      activeDot={<View className='w-[32px] h-[4px] mx-1 bg-[#0286FF] rounded-full' />}
      >

      </Swiper>
    </SafeAreaView>
  )
}

export default Onboarding