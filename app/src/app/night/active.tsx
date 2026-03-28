import { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ScrollView,
  Image,
  FlatList,
  Dimensions,
} from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '@/constants/colors';
import { spacing } from '@/constants/spacing';

const SCREEN_WIDTH = Dimensions.get('window').width;
const COLUMN_SIZE = (SCREEN_WIDTH - spacing.lg * 2 - spacing.md) / 2;

const currentMemories = [
  {
    id: '1',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=300&h=300&fit=crop',
  },
  {
    id: '2',
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=300&h=300&fit=crop',
  },
];

export default function ActiveNightScreen() {
  const router = useRouter();
  const [memoriesLeft, setMemoriesLeft] = useState(3);
  const [showMenu, setShowMenu] = useState(false);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.headerTitle}>Night in progress</Text>
          <Text style={styles.headerSubtitle}>{memoriesLeft} Memories left</Text>
        </View>
        <Pressable
          style={styles.cameraButton}
          onPress={() => {
            /* Handle camera/add memory */
          }}
        >
          <Ionicons name="camera" size={28} color={colors.white} />
        </Pressable>
      </View>

      <View style={styles.content}>
        <Text style={styles.gridTitle}>Memories Collected</Text>
        
        <View style={styles.memoriesGrid}>
          {currentMemories.map((memory) => (
            <View key={memory.id} style={styles.memoryItem}>
              <Image source={{ uri: memory.image }} style={styles.memoryImage} />
            </View>
          ))}
        </View>

        <View style={styles.actionButtons}>
          <Pressable style={styles.actionButton} onPress={() => {}}>
            <Ionicons name="arrow-up" size={20} color={colors.primary} />
            <Text style={styles.actionButtonText}>Recently added</Text>
          </Pressable>

          <Pressable
            style={[styles.actionButton, styles.actionButtonDanger]}
            onPress={() => {}}
          >
            <Ionicons name="close-circle-outline" size={20} color={colors.white} />
            <Text style={[styles.actionButtonText, styles.actionButtonTextDanger]}>
              Skip Memory
            </Text>
          </Pressable>
        </View>

        <Text style={styles.currentTitle}>Your night so far:</Text>

        <View style={styles.summaryCard}>
          <Image
            source={{
              uri: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=300&h=200&fit=crop',
            }}
            style={styles.summaryImage}
          />

          <View style={styles.summaryActions}>
            <Pressable style={styles.summaryButton}>
              <Ionicons name="eye-outline" size={18} color={colors.primary} />
              <Text style={styles.summaryButtonText}>Look at new memories</Text>
            </Pressable>

            <Pressable style={styles.summaryButton}>
              <Ionicons name="pencil" size={18} color={colors.primary} />
              <Text style={styles.summaryButtonText}>Edit memories</Text>
            </Pressable>
          </View>
        </View>

        <View style={styles.endSection}>
          <Pressable style={styles.endButton} onPress={() => router.push('/night/summary')}>
            <Ionicons name="exit-outline" size={20} color={colors.white} />
            <Text style={styles.endButtonText}>End your night out? →</Text>
          </Pressable>

          <Pressable style={styles.editButton} onPress={() => {}}>
            <Ionicons name="pencil-outline" size={20} color={colors.primary} />
            <Text style={styles.editButtonText}>Edit your night out? ✏️</Text>
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
  headerTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.white,
  },
  headerSubtitle: {
    fontSize: 14,
    fontWeight: '500',
    color: colors.white,
    marginTop: spacing.xs,
  },
  cameraButton: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: colors.primary,
    borderWidth: 2,
  },
  content: {
    padding: spacing.lg,
  },
  gridTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text,
    marginBottom: spacing.md,
  },
  memoriesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: spacing.lg,
  },
  memoryItem: {
    width: COLUMN_SIZE,
    height: COLUMN_SIZE,
    marginBottom: spacing.md,
    borderRadius: 8,
    overflow: 'hidden',
  },
  memoryImage: {
    width: '100%',
    height: '100%',
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: spacing.lg,
    gap: spacing.md,
  },
  actionButton: {
    flex: 1,
    backgroundColor: colors.white,
    borderRadius: 8,
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.sm,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  actionButtonDanger: {
    backgroundColor: colors.primary,
  },
  actionButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.primary,
    marginLeft: spacing.sm,
  },
  actionButtonTextDanger: {
    color: colors.white,
  },
  currentTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text,
    marginBottom: spacing.md,
  },
  summaryCard: {
    backgroundColor: colors.white,
    borderRadius: 8,
    overflow: 'hidden',
    marginBottom: spacing.lg,
  },
  summaryImage: {
    width: '100%',
    height: 150,
  },
  summaryActions: {
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.md,
    gap: spacing.sm,
  },
  summaryButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.md,
  },
  summaryButtonText: {
    fontSize: 14,
    fontWeight: '500',
    color: colors.primary,
    marginLeft: spacing.md,
  },
  endSection: {
    gap: spacing.md,
    marginBottom: spacing.xl,
  },
  endButton: {
    backgroundColor: colors.primary,
    borderRadius: 8,
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.lg,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  endButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.white,
    marginLeft: spacing.md,
  },
  editButton: {
    backgroundColor: colors.white,
    borderRadius: 8,
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.lg,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: colors.primary,
    borderWidth: 2,
  },
  editButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.primary,
    marginLeft: spacing.md,
  },
});