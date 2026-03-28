import { View, Text, StyleSheet, Pressable, Image, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '@/constants/colors';
import { spacing } from '@/constants/spacing';

const pastNights = [
  {
    id: '1',
    title: 'Bermuda, 2024',
    date: '9:41 AM',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=400&fit=crop',
  },
  {
    id: '2',
    title: 'Mexico, 2021',
    date: '9:41 AM',
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=400&h=400&fit=crop',
  },
];

export default function StartScreen() {
  const router = useRouter();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.iconCircle}>
          <Ionicons name="person-outline" size={32} color={colors.primary} />
        </View>
        <Text style={styles.title}>
          Start a Night To Remember to start creating memories
        </Text>
      </View>

      <Pressable style={styles.createButton} onPress={() => router.push('/night/create')}>
        <View style={styles.buttonIconContainer}>
          <Ionicons name="moon" size={28} color={colors.primary} />
        </View>
        <Text style={styles.createButtonText}>Create A Night To Remember</Text>
      </Pressable>

      <View style={styles.pastNightsSection}>
        <Text style={styles.recentTitle}>Recent Nights</Text>
        {pastNights.map((night) => (
          <Pressable key={night.id} style={styles.recentCard}>
            <Image source={{ uri: night.image }} style={styles.recentImage} />
            <View style={styles.recentInfo}>
              <Text style={styles.recentName}>{night.title}</Text>
              <Text style={styles.recentTime}>{night.date}</Text>
            </View>
          </Pressable>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    backgroundColor: colors.primary,
    paddingTop: spacing.xxl,
    paddingBottom: spacing.xl,
    paddingHorizontal: spacing.lg,
    alignItems: 'center',
  },
  iconCircle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing.lg,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.white,
    textAlign: 'center',
    lineHeight: 24,
  },
  createButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.surface,
    marginHorizontal: spacing.lg,
    marginVertical: spacing.lg,
    paddingVertical: spacing.lg,
    paddingHorizontal: spacing.lg,
    borderRadius: 12,
  },
  buttonIconContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: spacing.lg,
  },
  createButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text,
  },
  pastNightsSection: {
    paddingHorizontal: spacing.lg,
    paddingBottom: spacing.xl,
  },
  recentTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.text,
    marginBottom: spacing.md,
  },
  recentCard: {
    backgroundColor: colors.surface,
    borderRadius: 8,
    marginBottom: spacing.md,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.md,
    flexDirection: 'row',
    alignItems: 'center',
  },
  recentImage: {
    width: 50,
    height: 50,
    borderRadius: 6,
    marginRight: spacing.md,
  },
  recentInfo: {
    flex: 1,
  },
  recentName: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.text,
  },
  recentTime: {
    fontSize: 12,
    color: colors.muted,
    marginTop: spacing.xs,
  },
});