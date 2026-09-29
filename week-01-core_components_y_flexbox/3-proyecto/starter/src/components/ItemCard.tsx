import React from 'react';
import { View, Text, Image, Pressable, StyleSheet } from 'react-native';
import { Ong } from '../types';

interface ItemCardProps { item: Ong; onPress: (item: Ong) => void; }

export function ItemCard({ item, onPress }: ItemCardProps): React.JSX.Element {
  return (
    <Pressable style={({ pressed }) => [styles.card, pressed && styles.cardPressed]} onPress={() => onPress(item)} accessibilityRole="button" accessibilityLabel={`Ver ${item.name}`}>
      <Image source={{ uri: item.imageUri }} style={styles.cardImage} resizeMode="cover" />
      <View style={styles.cardBody}>
        <View style={styles.titleRow}><Text style={styles.cardName}>{item.name}</Text><Text style={styles.category}>{item.category}</Text></View>
        <Text style={styles.mission}>{item.mission}</Text>
        <View style={styles.metaRow}><Text style={styles.meta}>📍 {item.location}</Text><Text style={styles.meta}>{item.impact}</Text></View>
        <View style={styles.actionRow}><Text style={styles.actionText}>Conocer la fundación</Text><Text style={styles.arrow}>›</Text></View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: { backgroundColor: '#161b22', borderRadius: 14, marginBottom: 14, overflow: 'hidden', borderWidth: 1, borderColor: '#30363d' },
  cardPressed: { opacity: 0.78, transform: [{ scale: 0.99 }] },
  cardImage: { width: '100%', height: 150 },
  cardBody: { padding: 16, gap: 8 },
  titleRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', gap: 8 },
  cardName: { flex: 1, fontSize: 18, fontWeight: 'bold', color: '#fff' },
  category: { fontSize: 11, color: '#0d1117', backgroundColor: '#61DAFB', paddingHorizontal: 8, paddingVertical: 4, borderRadius: 10 },
  mission: { fontSize: 14, color: '#c9d1d9' },
  metaRow: { flexDirection: 'row', justifyContent: 'space-between', gap: 8 },
  meta: { flex: 1, fontSize: 12, color: '#8b949e' },
  actionRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 4, paddingTop: 10, borderTopWidth: 1, borderTopColor: '#30363d' },
  actionText: { color: '#61DAFB', fontSize: 14, fontWeight: '600' }, arrow: { color: '#61DAFB', fontSize: 24, lineHeight: 20 },
});
