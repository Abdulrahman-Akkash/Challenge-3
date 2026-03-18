import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView, StatusBar } from 'react-native';

// Her bir yazılımcı için ayrı bir bileşen
const ProfileCard = ({ name, expertise, level, color }) => {
  const [isAvailable, setIsAvailable] = useState(true);

  return (
    <View style={[styles.card, !isAvailable && styles.cardBusy]}>
      <View style={[styles.avatarContainer, { backgroundColor: color }]}>
        <Text style={styles.avatarText}>{name.charAt(0)}</Text>
      </View>
      
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.expertise}>{expertise} • {level}</Text>
        
        <View style={[styles.badge, isAvailable ? styles.badgeOpen : styles.badgeClosed]}>
          <Text style={styles.badgeText}>
            {isAvailable ? "● Uygun" : "● Meşgul"}
          </Text>
        </View>
      </View>

      <TouchableOpacity 
        style={[styles.button, !isAvailable && styles.buttonDisabled]} 
        onPress={() => setIsAvailable(false)}
        disabled={!isAvailable}
      >
        <Text style={styles.buttonText}>{isAvailable ? "İşe Al" : "Dolu"}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default function App() {
  // İşte bol bol dummy data!
  const developers = [
    { id: 1, name: "Ahmet Yılmaz", expertise: "Frontend", level: "Senior", color: "#4A90E2" },
    { id: 2, name: "Zeynep Kaya", expertise: "Backend", level: "Mid", color: "#E67E22" },
    { id: 3, name: "Can Demir", expertise: "Mobile", level: "Junior", color: "#2ECC71" },
    { id: 4, name: "Elif Sönmez", expertise: "DevOps", level: "Senior", color: "#9B59B6" },
    { id: 5, name: "Mert Bulut", expertise: "UI/UX", level: "Mid", color: "#F1C40F" },
    { id: 6, name: "Selin Aras", expertise: "Cybersecurity", level: "Senior", color: "#E74C3C" },
    { id: 7, name: "Bora Tekin", expertise: "Data Science", level: "Junior", color: "#34495E" },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Text style={styles.header}>Yazılımcı Kadrosu 🚀</Text>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        {developers.map((dev) => (
          <ProfileCard 
            key={dev.id} 
            name={dev.name} 
            expertise={dev.expertise} 
            level={dev.level} 
            color={dev.color}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F0F2F5' },
  header: {
    fontSize: 26,
    fontWeight: '800',
    color: '#1A202C',
    textAlign: 'center',
    marginVertical: 20,
  },
  scrollContent: { paddingBottom: 30, alignItems: 'center' },
  card: {
    width: '90%',
    backgroundColor: '#FFF',
    borderRadius: 15,
    padding: 15,
    marginBottom: 15,
    flexDirection: 'row', // Yatay hizalama
    alignItems: 'center',
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 3,
  },
  cardBusy: { opacity: 0.6, backgroundColor: '#F8F9FA' },
  avatarContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarText: { color: '#FFF', fontSize: 20, fontWeight: 'bold' },
  infoContainer: { flex: 1, marginLeft: 15 },
  name: { fontSize: 17, fontWeight: '700', color: '#2D3748' },
  expertise: { fontSize: 13, color: '#718096', marginVertical: 2 },
  badge: { alignSelf: 'flex-start', paddingHorizontal: 8, paddingVertical: 2, borderRadius: 10 },
  badgeOpen: { backgroundColor: '#D1FAE5' },
  badgeText: { fontSize: 11, fontWeight: '600', color: '#065F46' },
  badgeClosed: { backgroundColor: '#FEE2E2' },
  button: {
    backgroundColor: '#4A90E2',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 8,
  },
  buttonDisabled: { backgroundColor: '#CBD5E0' },
  buttonText: { color: '#FFF', fontWeight: 'bold', fontSize: 13 },
});