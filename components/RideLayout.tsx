import { View, Text } from 'react-native'
import { GestureHandlerRootView } from "react-native-gesture-handler" 

const RideLayout = ({children}: {children : React.ReactNode}) => {
  return (
    // Allows swiping of screen and show something underneath it
    <GestureHandlerRootView>
      <Text>TOP OF THE LAYOUT</Text>
      {children}
      <Text>BOTTOM OF THE LAYOUT</Text>
    </GestureHandlerRootView>
  )
}

export default RideLayout