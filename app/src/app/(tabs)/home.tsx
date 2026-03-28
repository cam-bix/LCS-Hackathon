import { StyleSheet, Text, View, Pressable, Image, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '@/constants/colors';
import { spacing } from '@/constants/spacing';

const memories = [
  {
    id: '1',
    title: 'Bermuda, 2024',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600',
  },
  {
    id: '2',
    title: 'Mexico, 2021',
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=600',
  },
  {
    id: '3',
    title: 'Birthday, 2019',
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600',
  },
  {
    id: '4',
    title: 'Coldplay, 2019',
    image: 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=600',
  },
];

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.screen}>
      <View style={styles.topBar}>
        <Ionicons name="notifications-outline" size={28} color={colors.white} />
        <Ionicons name="person-outline" size={28} color={colors.white} />
      </View>

      <ScrollView style={styles.content}>
        <Pressable
          style={styles.startCard}
          onPress={() => router.push('/(tabs)/start')}
        >
          <View style={styles.moonCircle}>
            <Ionicons name="moon" size={34} color={colors.primary} />
          </View>
          <Text style={styles.startText}>Start a Night Out</Text>
        </Pressable>

        <Text style={styles.recentTitle}>Recent Memories</Text>
        <View style={styles.grid}>
          {memories.map((memory) => (
            <View key={memory.id} style={styles.memoryCard}>
              <Image source={{ uri: memory.image }} style={styles.memoryImage} />
              <View style={styles.labelPill}>
                <Text style={styles.labelText}>{memory.title}</Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.background,
  },
  topBar: {
    backgroundColor: colors.primary,
    height: 82,
    paddingHorizontal: spacing.lg,
    paddingTop: 36,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  content: {
    flex: 1,
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.lg,
  },
  startCard: {
    backgroundColor: colors.surface,
    borderRadius: 18,
    paddingVertical: 18,
    paddingHorizontal: 18,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 22,
  },
  moonCircle: {
    width: 58,
    height: 58,
    borderRadius: 29,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 14,
  },
  startText: {
    fontSize: 16,
    fontWeight: '500',
    color: colors.text,
  },
  recentTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.muted,
    marginBottom: spacing.md,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingBottom: spacing.xl,
  },
  memoryCard: {
    width: '47%',
    marginBottom: 18,
  },
  memoryImage: {
    width: '100%',
    height: 150,
    borderRadius: 8,
    marginBottom: 8,
  },
  labelPill: {
    alignSelf: 'center',
    backgroundColor: colors.surface,
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  labelText: {
    fontSize: 11,
    color: colors.text,
  },
});