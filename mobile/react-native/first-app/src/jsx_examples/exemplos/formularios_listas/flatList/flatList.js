import { FlatList, View, StyleSheet, Text,} from "react-native";


export default function FlatListExemplo() {
  const alunos = [
    { id: "1", nome: "Ana", nota: 9.5 },
    { id: "2", nome: "Daniel", nota: 9.5 },
    { id: "3", nome: "Celso", nota: 9.5 },
    { id: "4", nome: "Marlon", nota: 9.5 },
    { id: "5", nome: "Felipe", nota: 9.5 },
  ];

  return (
    <View style={styleSheet.container}>
      <Text style={styleSheet.titulo}>Flatlist</Text>
      <View style={styleSheet.exemplo}>
        <Text style={styleSheet.subtitulo}>1. Flatlist basico</Text>
        <Flatlist
            data={alunos}
            keyExtractor={(item) => item.id}
            renderItem={({ item: aluno}) => (
                <CardItem nome={aluno.nome} nota={aluno.nota}/>
            )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
container: {
flex: 1,
alignItems: "center",
backgroundColor: "#f5f5f5",
paddingTop: 60,
},
titulo: {
fontSize: 20,
fontWeight: "bold",
marginBottom: 20,
},
subtitulo: {
fontSize: 14,
fontWeight: "bold",
color: "#4285f4",
marginBottom: 8,
},

exemploLista: {
width: "80%",
// height: 250,
padding: 16,
marginBottom: 16,
backgroundColor: "#fff",
borderRadius: 8,
},
linha: {
flexDirection: "row",
justifyContent: "space-between",
padding: 10,
backgroundColor: "#f5f5f5",
marginBottom: 4,
borderRadius: 4,
},
});


