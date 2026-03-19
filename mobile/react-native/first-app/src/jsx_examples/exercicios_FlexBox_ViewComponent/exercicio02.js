import { StyleSheet, View } from "react-native";


export default function ExercicioView02() {
  return (
    <View style={styles.container}>
      <View style={styles.redBox}/>
      <View style={styles.blueBox}/>
      <View style={styles.greenBox}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"center",
    gap:18
  },

  redBox:{width:80,height:80,backgroundColor:"red"},
  blueBox:{width:80,height:80,backgroundColor:"blue"},
  greenBox:{width:80,height:80,backgroundColor:"green"}
});