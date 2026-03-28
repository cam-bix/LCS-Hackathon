import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ScrollView,
  Image,
  Dimensions,
} from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '@/constants/colors';
import { spacing } from '@/constants/spacing';
import type { Album, Photo } from '@/types/album';

const SCREEN_WIDTH = Dimensions.get('window').width;
const PHOTO_SIZE = (SCREEN_WIDTH - spacing.lg * 2 - spacing.md) / 2;

// Sample albums data (in a real app, this would come from a database)
const albumsData: Album[] = [
  {
    id: '1',
    title: 'Bermuda, 2024',
    year: '2024',
    coverImage: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=300&h=300&fit=crop',
    createdAt: 'March 15, 2024',
    photos: [
      { id: '1-1', url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=400&fit=crop' },
      { id: '1-2', url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop' },
      { id: '1-3', url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=400&fit=crop' },
      { id: '1-4', url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop' },
    ],
  },
  {
    id: '2',
    title: 'Mexico, 2021',
    year: '2021',
    coverImage: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=300&h=300&fit=crop',
    createdAt: 'July 22, 2021',
    photos: [
      { id: '2-1', url: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=400&h=400&fit=crop' },
      { id: '2-2', url: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=400&h=400&fit=crop' },
      { id: '2-3', url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop' },
    ],
  },
  {
    id: '3',
    title: 'Birthday, 2019',
    year: '2019',
    coverImage: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=300&h=300&fit=crop',
    createdAt: 'September 10, 2019',
    photos: [
      { id: '3-1', url: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=400&h=400&fit=crop' },
      { id: '3-2', url: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&h=400&fit=crop' },
      { id: '3-3', url: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=400&h=400&fit=crop' },
      { id: '3-4', url: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&h=400&fit=crop' },
      { id: '3-5', url: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=400&h=400&fit=crop' },
    ],
  },
  {
    id: '4',
    title: 'Coldplay Concert, 2019',
    year: '2019',
    coverImage: 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=300&h=300&fit=crop',
    createdAt: 'November 5, 2019',
    photos: [
      { id: '4-1', url: 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=400&h=400&fit=crop' },
      { id: '4-2', url: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&h=400&fit=crop' },
    ],
  },
];

export default function AlbumDetailScreen() {
  const params = useLocalSearchParams();
  const router = useRouter();
  
  const albumId = params.id as string;
  const album = albumsData.find((a) => a.id === albumId);

  if (!album) {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Pressable onPress={() => router.back()} style={styles.backButton}>
            <Ionicons name="chevron-back" size={28} color={colors.white} />
          </Pressable>
        </View>
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>Album not found</Text>
        </View>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Pressable onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="chevron-back" size={28} color={colors.white} />
        </Pressable>
        <Text style={styles.headerTitle} numberOfLines={1}>
          {album.title}
        </Text>
        <Pressable style={styles.moreButton}>
          <Ionicons name="ellipsis-horizontal" size={24} color={colors.white} />
        </Pressable>
      </View>

      <View style={styles.albumInfoSection}>
        <Image source={{ uri: album.coverImage }} style={styles.heroImage} />
        <View style={styles.infoOverlay}>
          <Text style={styles.albumYear}>{album.year}</Text>
          <Text style={styles.photoStats}>
            <Ionicons name="images" size={16} color={colors.white} /> {album.photos.length} Photos
          </Text>
        </View>
      </View>

      <View style={styles.content}>
        <View style={styles.albumHeader}>
          <View>
            <Text style={styles.albumTitle}>{album.title}</Text>
            <Text style={styles.albumDate}>{album.createdAt}</Text>
          </View>
          <Pressable style={styles.shareButton}>
            <Ionicons name="share-social-outline" size={24} color={colors.primary} />
          </Pressable>
        </View>

        <View style={styles.photosGrid}>
          {album.photos.map((photo) => (
            <Pressable key={photo.id} style={styles.photoCard}>
              <Image source={{ uri: photo.url }} style={styles.photoImage} />
            </Pressable>
          ))}
        </View>

        <View style={styles.actionButtons}>
          <Pressable style={styles.primaryButton}>
            <Ionicons name="download-outline" size={20} color={colors.white} />
            <Text style={styles.buttonText}>Download Album</Text>
          </Pressable>

          <Pressable style={styles.secondaryButton}>
            <Ionicons name="pencil-outline" size={20} color={colors.primary} />
            <Text style={styles.secondaryButtonText}>Edit Album</Text>
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
    fontSize: 16,
    fontWeight: '700',
    color: colors.white,
    flex: 1,
    marginHorizontal: spacing.md,
  },
  moreButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  errorContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  errorText: {
    fontSize: 16,
    color: colors.muted,
  },
  albumInfoSection: {
    height: 280,
    position: 'relative',
  },
  heroImage: {
    width: '100%',
    height: '100%',
  },
  infoOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.lg,
  },
  albumYear: {
    fontSize: 28,
    fontWeight: '700',
    color: colors.white,
  },
  photoStats: {
    fontSize: 14,
    fontWeight: '500',
    color: colors.white,
    marginTop: spacing.sm,
  },
  content: {
    padding: spacing.lg,
  },
  albumHeader: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    marginBottom: spacing.xl,
  },
  albumTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: colors.text,
  },
  albumDate: {
    fontSize: 14,
    color: colors.muted,
    marginTop: spacing.sm,
  },
  shareButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: colors.surface,
    alignItems: 'center',
    justifyContent: 'center',
  },
  photosGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: spacing.xl,
  },
  photoCard: {
    width: PHOTO_SIZE,
    height: PHOTO_SIZE,
    marginBottom: spacing.md,
    borderRadius: 8,
    overflow: 'hidden',
  },
  photoImage: {
    width: '100%',
    height: '100%',
  },
  actionButtons: {
    gap: spacing.md,
    paddingBottom: spacing.xl,
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
  buttonText: {
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
});
