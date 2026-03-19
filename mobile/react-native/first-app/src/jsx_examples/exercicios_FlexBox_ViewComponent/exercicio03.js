// import { StyleSheet, View }  from "react-native";

// export default function ExercicioView03() {
//   return (
//     <View style={styles.container}>
//       <View style={styles.red}/>
//       <View style={styles.blue}/>
//       <View style={styles.green}/>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container:{
//     flex: 1,
//     flexDirection:"row",
//     justifyContent:"space-between",
//     alignItems:"center"
//   },

//   red:{
//     width:70,
//     height:70,
//     backgroundColor:"red"
//   },

//   blue:{
//     width:70,
//     height:70,
//     backgroundColor:"blue"
//   },

//   green:{
//     width:70,
//     height:70,
//     backgroundColor:"green"
//   }
// });

import { StyleSheet, View } from "react-native";

export default function ExercicioView03() {
  return (
    <View style={styles.container}>
      <View style={styles.redBox}></View>
      <View style={styles.blueBox}></View>
      <View style={styles.greenBox}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%" // garante largura total
  },

  redBox: {
    width: 70,
    height: 70,
    backgroundColor: "red",
  },

  blueBox: {
    width: 70,
    height: 70,
    backgroundColor: "blue",
  },

  greenBox: {
    width: 70,
    height: 70,
    backgroundColor: "green",
  },
});