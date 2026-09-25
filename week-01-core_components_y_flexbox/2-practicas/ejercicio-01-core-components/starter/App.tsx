import React from 'react';
import { View, Text, Image, Pressable, ScrollView, StyleSheet, StatusBar } from 'react-native';

export default function App(): React.JSX.Element {
  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
      <StatusBar barStyle="light-content" backgroundColor="#0d1117" />
      <View style={styles.card}>
        <Image source={{ uri: 'https://i.pravatar.cc/240?img=12' }} style={styles.avatar} resizeMode="cover" />
        <Text style={styles.name}>María González</Text>
        <Text style={styles.role}>Coordinadora de voluntariado</Text>
        <Text style={styles.bio} numberOfLines={3}>Acompaño proyectos comunitarios y conecto personas que quieren transformar su entorno.</Text>
        <View style={styles.statsRow}>
          <View style={styles.stat}><Text style={styles.statNumber}>12</Text><Text style={styles.statLabel}>Campañas</Text></View>
          <View style={styles.stat}><Text style={styles.statNumber}>248</Text><Text style={styles.statLabel}>Voluntarios</Text></View>
          <View style={styles.stat}><Text style={styles.statNumber}>6</Text><Text style={styles.statLabel}>Años</Text></View>
        </View>
        <Pressable style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]} onPress={() => console.log('Perfil seguido')}>
          <Text style={styles.buttonText}>Seguir perfil</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: '#0d1117' },
  content: { flexGrow: 1, justifyContent: 'center', alignItems: 'center', padding: 24 },
  card: { width: '100%', backgroundColor: '#161b22', borderRadius: 16, padding: 24, alignItems: 'center', borderWidth: 1, borderColor: '#30363d' },
  avatar: { width: 120, height: 120, borderRadius: 60, marginBottom: 16, borderWidth: 3, borderColor: '#61DAFB' },
  name: { fontSize: 22, fontWeight: 'bold', color: '#fff', marginBottom: 4 },
  role: { fontSize: 14, color: '#61DAFB', marginBottom: 12 },
  bio: { fontSize: 14, color: '#8b949e', textAlign: 'center', lineHeight: 22, marginBottom: 20 },
  statsRow: { flexDirection: 'row', justifyContent: 'space-around', width: '100%', borderTopWidth: 1, borderTopColor: '#30363d', paddingTop: 20, marginBottom: 20 },
  stat: { alignItems: 'center' },
  statNumber: { fontSize: 20, fontWeight: 'bold', color: '#fff' },
  statLabel: { fontSize: 12, color: '#8b949e', marginTop: 2 },
  button: { backgroundColor: '#61DAFB', paddingVertical: 12, borderRadius: 24, width: '100%', alignItems: 'center' },
  buttonPressed: { opacity: 0.7 },
  buttonText: { color: '#0d1117', fontSize: 16, fontWeight: 'bold' },
});
