import { icons } from "@/constants";
import { router } from "expo-router";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Map from "./Map";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { useRef } from "react";

const RideLayout = ({
  title,
  children,
  snapPoints,
}: {
  children: React.ReactNode;
  title: string;
  snapPoints?:string[]

}) => {
  const bottomSheetRef = useRef<BottomSheet>();

  return (
    // Allows swiping of screen and show something underneath it
    <GestureHandlerRootView>
      <View className="flex-1 bg-white">
        <View className="flex flex-col h-screen bg-blue-500">
          <View className="flex flex-row absolute z-10 top-16 items-center justify-start px-5">
            <TouchableOpacity onPress={() => router.back()}>
              <View className="w-10 h-10 bg-white rounded-full items-center justify-center">
                <Image
                  source={icons.backArrow}
                  resizeMode="contain"
                  className="w-6 h-6"
                />
              </View>
            </TouchableOpacity>
            <Text className="text-xl font-JakartaSemiBold ml-5">
              {title || "Go Back"}
            </Text>
          </View>
          <Map />
        </View>
        {/* Making the bottom sheet like for swiping up for uber */}
        <BottomSheet
        //   keyboardBehavior="fillParent"
          ref={bottomSheetRef}
          snapPoints={snapPoints || ["50%", "85%"]}
          index={0}
        >
          {/* BottomSheetScrollView is used for scrolling but this(BottomSheetView) is fixed and always starts from the 40% */}
          <BottomSheetView style={{ flex: 1, padding: 20 }}>
            {children}
          </BottomSheetView>
        </BottomSheet>
      </View>
    </GestureHandlerRootView>
  );
};

export default RideLayout;
