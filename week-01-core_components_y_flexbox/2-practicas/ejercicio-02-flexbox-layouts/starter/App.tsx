import React from 'react';
import { View, Text, Image, Pressable, ScrollView, StyleSheet, StatusBar } from 'react-native';

function Label({ num, title }: { num: number; title: string }): React.JSX.Element {
  return <View style={styles.label}><Text style={styles.labelNumber}>Layout {num}</Text><Text style={styles.labelTitle}>{title}</Text></View>;
}

export default function App(): React.JSX.Element {
  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
      <StatusBar barStyle="light-content" backgroundColor="#0d1117" />
      <Text style={styles.title}>Ejercicio 02 — Flexbox</Text>
      <Label num={1} title="Header: space-between" />
      <View style={styles.layout1}><Text style={styles.headerTitle}>Inicio</Text><Pressable style={styles.headerBtn} onPress={() => {}}><Text style={styles.headerBtnText}>+ Nuevo</Text></Pressable></View>
      <Label num={2} title="Tab Bar: space-evenly" />
      <View style={styles.layout2}>{['Inicio', 'Buscar', 'Perfil', 'Config'].map((tab) => <View key={tab} style={styles.tabItem}><Text style={styles.tabIcon}>○</Text><Text style={styles.tabLabel}>{tab}</Text></View>)}</View>
      <Label num={3} title="Tarjeta: row + alignItems center" />
      <View style={styles.layout3}><Image source={{ uri: 'https://i.pravatar.cc/112?img=32' }} style={styles.cardAvatar} resizeMode="cover" /><View style={styles.cardTextContainer}><Text style={styles.cardName}>Fundación Manos Unidas</Text><Text style={styles.cardSubtitle}>Ayuda comunitaria</Text></View><Text style={styles.cardTimestamp}>2h</Text></View>
      <Label num={4} title="Proporciones: flex: 1 vs flex: 2" />
      <View style={styles.layout4}><View style={styles.panel1}><Text style={styles.panelText}>1/3</Text><Text style={styles.panelHint}>flex: 1</Text></View><View style={styles.panel2}><Text style={styles.panelText}>2/3</Text><Text style={styles.panelHint}>flex: 2</Text></View></View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: '#0d1117' }, content: { padding: 16, gap: 8 }, title: { fontSize: 20, fontWeight: 'bold', color: '#fff', marginBottom: 16, textAlign: 'center' },
  label: { marginTop: 16, marginBottom: 8, paddingBottom: 6, borderBottomWidth: 1, borderBottomColor: '#30363d' }, labelNumber: { fontSize: 12, color: '#61DAFB', fontWeight: 'bold', textTransform: 'uppercase' }, labelTitle: { fontSize: 14, color: '#8b949e' },
  layout1: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#161b22', padding: 16, borderRadius: 10, borderWidth: 1, borderColor: '#30363d' }, headerTitle: { fontSize: 20, fontWeight: 'bold', color: '#fff' }, headerBtn: { backgroundColor: '#21262d', paddingHorizontal: 12, paddingVertical: 6, borderRadius: 6, borderWidth: 1, borderColor: '#30363d' }, headerBtnText: { color: '#61DAFB', fontSize: 14, fontWeight: '600' },
  layout2: { flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', backgroundColor: '#161b22', paddingVertical: 12, borderRadius: 10, borderWidth: 1, borderColor: '#30363d' }, tabItem: { alignItems: 'center' }, tabIcon: { fontSize: 20, color: '#8b949e', marginBottom: 2 }, tabLabel: { fontSize: 11, color: '#8b949e' },
  layout3: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#161b22', padding: 16, borderRadius: 10, gap: 12, borderWidth: 1, borderColor: '#30363d' }, cardAvatar: { width: 56, height: 56, borderRadius: 28 }, cardTextContainer: { flex: 1 }, cardName: { fontSize: 16, fontWeight: 'bold', color: '#fff' }, cardSubtitle: { fontSize: 13, color: '#8b949e', marginTop: 2 }, cardTimestamp: { fontSize: 12, color: '#8b949e' },
  layout4: { flexDirection: 'row', height: 120, borderRadius: 10, overflow: 'hidden', borderWidth: 1, borderColor: '#30363d' }, panel1: { flex: 1, backgroundColor: '#21262d', justifyContent: 'center', alignItems: 'center' }, panel2: { flex: 2, backgroundColor: '#161b22', justifyContent: 'center', alignItems: 'center' }, panelText: { fontSize: 24, fontWeight: 'bold', color: '#fff' }, panelHint: { fontSize: 12, color: '#8b949e', marginTop: 4 },
});
