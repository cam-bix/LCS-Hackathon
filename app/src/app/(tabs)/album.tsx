import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ScrollView,
  Image,
  Dimensions,
} from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '@/constants/colors';
import { spacing } from '@/constants/spacing';
import type { Album } from '@/types/album';

const SCREEN_WIDTH = Dimensions.get('window').width;
const CARD_WIDTH = (SCREEN_WIDTH - spacing.lg * 2 - spacing.md) / 2;

const albums: Album[] = [
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

export default function AlbumScreen() {
  const router = useRouter();

  const handleAlbumPress = (album: Album) => {
    router.push(`/album/${album.id}` as any);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Ionicons name="notifications-outline" size={28} color={colors.white} />
        <Ionicons name="person-outline" size={28} color={colors.white} />
      </View>

      <View style={styles.content}>
        <View style={styles.titleSection}>
          <Text style={styles.screenTitle}>Your Memories</Text>
          <Text style={styles.albumCount}>{albums.length} Albums</Text>
        </View>

        <View style={styles.albumsGrid}>
          {albums.map((album) => (
            <Pressable
              key={album.id}
              style={styles.albumCard}
              onPress={() => handleAlbumPress(album)}
            >
              <Image source={{ uri: album.coverImage }} style={styles.albumImage} />
              
              <View style={styles.albumOverlay}>
                <View style={styles.albumInfo}>
                  <Text style={styles.albumTitle} numberOfLines={2}>
                    {album.title}
                  </Text>
                  <View style={styles.photoCount}>
                    <Ionicons name="images" size={14} color={colors.white} />
                    <Text style={styles.photoCountText}>{album.photos.length}</Text>
                  </View>
                </View>
              </View>
            </Pressable>
          ))}
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
    height: 82,
    paddingHorizontal: spacing.lg,
    paddingTop: 36,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  content: {
    padding: spacing.lg,
  },
  titleSection: {
    marginBottom: spacing.xl,
  },
  screenTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: colors.text,
  },
  albumCount: {
    fontSize: 14,
    fontWeight: '500',
    color: colors.muted,
    marginTop: spacing.sm,
  },
  albumsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingBottom: spacing.xl,
  },
  albumCard: {
    width: CARD_WIDTH,
    height: CARD_WIDTH,
    marginBottom: spacing.md,
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: colors.surface,
    elevation: 3,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  albumImage: {
    width: '100%',
    height: '100%',
  },
  albumOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    top: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    justifyContent: 'flex-end',
    padding: spacing.md,
  },
  albumInfo: {
    gap: spacing.sm,
  },
  albumTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.white,
  },
  photoCount: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
  },
  photoCountText: {
    fontSize: 12,
    fontWeight: '600',
    color: colors.white,
  },
});