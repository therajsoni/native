import { useRef } from "react"
import { StyleSheet , View , Animated ,Button } from "react-native"

const App = () => {

  const boxOpacityAnimationValue = useRef<any>(new Animated.Value(0)).current;
  const handleFadeInBox = () => {
    Animated.timing(boxOpacityAnimationValue , {
     duration : 1000, 
     toValue : 1,
     delay : 200,
     useNativeDriver : true
    }).start()
  }

  const handleFadeOutBox = () => {
    Animated.timing(boxOpacityAnimationValue , {
      duration : 500, 
      toValue : 0,
      useNativeDriver : true
     }).start()
  }

  const handleCallbackMethod1 = () => {
    Animated.timing(boxOpacityAnimationValue,{
      duration : 200,
      toValue : 1,
      useNativeDriver : true
    }).start(()=>{
      // setValue
      // boxOpacityAnimationValue.setVaue(0)
      Animated.timing(boxOpacityAnimationValue,{
        duration : 500,
        toValue : 0,
        useNativeDriver : true
      }).start()
    })
  }

  const handleCallbackMethod2 = () => {
    Animated.timing(boxOpacityAnimationValue,{
      duration : 200,
      toValue : 0,
      useNativeDriver : true
    }).start(()=>{
      // setValue
      boxOpacityAnimationValue.setVaue(1)
    })
  }

  const opacityStyle = {
    opacity : boxOpacityAnimationValue
  }

  return (
    <View style={styles.container}>
<Animated.View style={[styles.box , opacityStyle]} >
<Button onPress={handleFadeInBox} title="Add Fabe Red" color="black" />
<Button onPress={handleFadeOutBox} title="Out Fabe Red" color="green" />
<Button onPress={handleCallbackMethod1} title="callback Frontend" color="yellow" />
<Button onPress={handleCallbackMethod2} title="callback Backend" color="yellow" />
</Animated.View>
    </View>
  )
}

const styles = StyleSheet.create({
  container : {
  backgroundColor : "#fff",
  alignItems : 'center',
  justifyContent : 'center' 
  },
  box : {
  width : 200,
  height : 200,
  backgroundColor : 'red' ,
  marginBottom : 40
  }
})

export default App