import { View, Text, StyleSheet, Pressable, ScrollView, Image } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '@/constants/colors';
import { spacing } from '@/constants/spacing';

const summaryMemories = [
  {
    id: '1',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=200&h=200&fit=crop',
  },
  {
    id: '2',
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=200&h=200&fit=crop',
  },
  {
    id: '3',
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=200&h=200&fit=crop',
  },
  {
    id: '4',
    image: 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=200&h=200&fit=crop',
  },
];

export default function SummaryNightScreen() {
  const router = useRouter();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Pressable onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="chevron-back" size={28} color={colors.white} />
        </Pressable>
        <Text style={styles.headerTitle}>Night Summary</Text>
        <View style={styles.placeholder} />
      </View>

      <View style={styles.content}>
        <View style={styles.titleCard}>
          <Text style={styles.summaryTitle}>Your Night to Remember</Text>
          <Text style={styles.dateText}>March 28, 2026</Text>
        </View>

        <View style={styles.statsSection}>
          <View style={styles.statCard}>
            <Ionicons name="images" size={28} color={colors.primary} />
            <Text style={styles.statValue}>12</Text>
            <Text style={styles.statLabel}>Memories</Text>
          </View>

          <View style={styles.statCard}>
            <Ionicons name="time" size={28} color={colors.primary} />
            <Text style={styles.statValue}>2:30</Text>
            <Text style={styles.statLabel}>Duration</Text>
          </View>

          <View style={styles.statCard}>
            <Ionicons name="people" size={28} color={colors.primary} />
            <Text style={styles.statValue}>5</Text>
            <Text style={styles.statLabel}>People</Text>
          </View>
        </View>

        <View style={styles.memoriesSection}>
          <Text style={styles.sectionTitle}>Memories Captured</Text>
          <View style={styles.memoriesGrid}>
            {summaryMemories.map((memory) => (
              <Image
                key={memory.id}
                source={{ uri: memory.image }}
                style={styles.memoryImage}
              />
            ))}
          </View>
        </View>

        <View style={styles.actionSection}>
          <Pressable style={styles.primaryButton}>
            <Ionicons name="download-outline" size={20} color={colors.white} />
            <Text style={styles.primaryButtonText}>Download Memories</Text>
          </Pressable>

          <Pressable style={styles.secondaryButton}>
            <Ionicons name="share-social-outline" size={20} color={colors.primary} />
            <Text style={styles.secondaryButtonText}>Share Night</Text>
          </Pressable>

          <Pressable
            style={styles.homeButton}
            onPress={() => router.push('/(tabs)/home')}
          >
            <Text style={styles.homeButtonText}>Back to Home</Text>
          </Pressable>
        </View>
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
    paddingBottom: spacing.lg,
    paddingHorizontal: spacing.lg,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.white,
  },
  placeholder: {
    width: 40,
  },
  content: {
    padding: spacing.lg,
  },
  titleCard: {
    backgroundColor: colors.surface,
    borderRadius: 8,
    paddingVertical: spacing.lg,
    paddingHorizontal: spacing.lg,
    marginBottom: spacing.xl,
    alignItems: 'center',
  },
  summaryTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: colors.text,
  },
  dateText: {
    fontSize: 14,
    color: colors.muted,
    marginTop: spacing.sm,
  },
  statsSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: spacing.xl,
    gap: spacing.md,
  },
  statCard: {
    flex: 1,
    backgroundColor: colors.white,
    borderRadius: 8,
    paddingVertical: spacing.lg,
    paddingHorizontal: spacing.md,
    alignItems: 'center',
    borderColor: colors.border,
    borderWidth: 1,
  },
  statValue: {
    fontSize: 20,
    fontWeight: '700',
    color: colors.primary,
    marginTop: spacing.sm,
  },
  statLabel: {
    fontSize: 12,
    color: colors.muted,
    marginTop: spacing.xs,
  },
  memoriesSection: {
    marginBottom: spacing.xl,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text,
    marginBottom: spacing.md,
  },
  memoriesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.md,
  },
  memoryImage: {
    width: '23%',
    aspectRatio: 1,
    borderRadius: 8,
  },
  actionSection: {
    gap: spacing.md,
    marginBottom: spacing.xl,
  },
  primaryButton: {
    backgroundColor: colors.primary,
    borderRadius: 8,
    paddingVertical: spacing.md,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: spacing.md,
  },
  primaryButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.white,
  },
  secondaryButton: {
    backgroundColor: colors.white,
    borderRadius: 8,
    paddingVertical: spacing.md,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: colors.primary,
    borderWidth: 2,
    gap: spacing.md,
  },
  secondaryButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.primary,
  },
  homeButton: {
    backgroundColor: colors.surface,
    borderRadius: 8,
    paddingVertical: spacing.md,
    alignItems: 'center',
    justifyContent: 'center',
  },
  homeButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text,
  },
});