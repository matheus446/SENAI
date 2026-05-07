import { View, Text, StyleSheet } from "react-native";

export default function Scaffold() {
  return (
    <View style={styles.container}>

         <View style={styles.header} />

        <View style={styles.topCards}>
            <View style={[styles.card, { backgroundColor: "#2ecc71" }]} />
            <View style={[styles.card, { backgroundColor: "#3498db" }]} />
            <View style={[styles.card, { backgroundColor: "#f39c12" }]} />
        </View>

         <View style={styles.divider} />
        
                  
            <View style={styles.bottomCards}>
                <View style={[styles.card, { flex: 1, backgroundColor: "#9b59b6" }]} />
                <View style={[styles.card, { flex: 2, backgroundColor: "#1abc9c" }]} />
                <View style={[styles.card, { flex: 1, backgroundColor: "#e67e22" }]} />
        </View>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 8,
    gap: 8,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ecf0f1",
  },

  header: {
    height: 80,
    backgroundColor: "#e74c3c",
    borderRadius: 8,
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
    height: 80,
    borderRadius: 25,
    backgroundColor: "#2c3e50",
    alignSelf: "center",
  },

});