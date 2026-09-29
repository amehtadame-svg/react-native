import React from 'react';
import { Alert, View, Text, ScrollView, StyleSheet, SafeAreaView, StatusBar } from 'react-native';
import { Ong } from '../types';
import { ItemCard } from '../components/ItemCard';
import { MOCK_ITEMS } from '../data/mockData';

export function HomeScreen(): React.JSX.Element {
  function handleItemPress(item: Ong): void {
    Alert.alert(item.name, `${item.mission}\n\n${item.impact}`);
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor="#0d1117" />
      <View style={styles.header}><Text style={styles.eyebrow}>DIRECTORIO SOCIAL</Text><Text style={styles.headerTitle}>Fundaciones que inspiran</Text><Text style={styles.headerSubtitle}>Conoce iniciativas que están transformando Colombia.</Text></View>
      <ScrollView style={styles.listContainer} contentContainerStyle={styles.listContent} showsVerticalScrollIndicator={false}>
        <Text style={styles.sectionTitle}>Organizaciones destacadas</Text>
        {MOCK_ITEMS.map((item) => <ItemCard key={item.id} item={item} onPress={handleItemPress} />)}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#0d1117' },
  header: { paddingHorizontal: 20, paddingVertical: 22, borderBottomWidth: 1, borderBottomColor: '#30363d' },
  eyebrow: { fontSize: 11, letterSpacing: 1.5, color: '#61DAFB', fontWeight: 'bold', marginBottom: 8 },
  headerTitle: { fontSize: 28, lineHeight: 34, fontWeight: 'bold', color: '#fff' },
  headerSubtitle: { fontSize: 14, lineHeight: 20, color: '#8b949e', marginTop: 8 },
  listContainer: { flex: 1 }, listContent: { padding: 20, paddingBottom: 32 },
  sectionTitle: { color: '#c9d1d9', fontSize: 16, fontWeight: '600', marginBottom: 14 },
});
