// PerfilAluno.js
import React from 'react';
import { Text, View } from 'react-native';

export default function PerfilAluno({ nome, turma, matricula }) {
  return (
    <View>
      <Text>Nome: {nome}</Text>
      <Text>Turma: {turma}</Text>
      <Text>Matrícula: {matricula}</Text>
    </View>
  );
}


//app.js
import React from 'react';
import { View } from 'react-native';
import PerfilAluno from './PerfilAluno';

export default function App() {
  return (
    <View>
      <PerfilAluno 
        nome="Carlos" 
        turma="DS-2025" 
        matricula="00123" 
      />
    </View>
  );
}