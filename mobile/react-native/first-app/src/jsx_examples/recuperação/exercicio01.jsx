import { View, StyleSheet } from "react-native";

export default function Recuperacao01() {
  return (
    <View style={styles.container}>

      
      <View style={styles.header} />

      
      <View style={styles.body}>

       
        <View style={styles.sidebar} />

       
        <View style={styles.main}>

          
          <View style={styles.topCards}>
            <View style={[styles.card, { backgroundColor: "green" }]} />
            <View style={[styles.card, { backgroundColor: "blue" }]} />
          </View>

         
          <View style={styles.divider} />

          
          <View style={styles.bottomCards}>
            <View style={[styles.card, { flex: 1, backgroundColor: "red" }]} />
            <View style={[styles.card, { flex: 2, backgroundColor: "orange" }]} />
            <View style={[styles.card, { flex: 1, backgroundColor: "purple" }]} />
          </View>

        </View>
      </View>

      
      <View style={styles.footer} />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
    gap: 8,
    backgroundColor: "#1a1a1a",
  },

  header: {
    height: 60,
    backgroundColor: "#2c3e50",
    borderRadius: 8,
  },

  footer: {
    height: 50,
    backgroundColor: "#2c3e50",
    borderRadius: 8,
  },

  body: {
    flex: 1,
    flexDirection: "row",
    gap: 8,
  },

  sidebar: {
    width: 80,
    backgroundColor: "#95a5a6",
    borderRadius: 8,
  },

  main: {
    flex: 1,
    gap: 8,
  },

  topCards: {
    flex: 1,
    flexDirection: "row",
    gap: 8,
  },

  bottomCards: {
    flex: 1,
    flexDirection: "row",
    gap: 8,
  },

  card: {
    flex: 1,
    borderRadius: 8,
  },

  divider: {
    width: 50,
    height: 8,
    borderRadius: 25,
    backgroundColor: "#34495e",
    alignSelf: "center",
  },
});