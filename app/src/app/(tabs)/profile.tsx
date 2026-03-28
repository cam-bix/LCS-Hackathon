import { View, Text, StyleSheet, Pressable, ScrollView, Image } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '@/constants/colors';
import { spacing } from '@/constants/spacing';

export default function ProfileScreen() {
  const router = useRouter();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Ionicons name="notifications-outline" size={28} color={colors.white} />
        <Ionicons name="settings-outline" size={28} color={colors.white} />
      </View>

      <View style={styles.content}>
        <View style={styles.profileCard}>
          <View style={styles.avatarContainer}>
            <Ionicons name="person-circle" size={80} color={colors.primary} />
          </View>

          <View style={styles.profileInfo}>
            <Text style={styles.profileName}>Demo name</Text>
            <Text style={styles.profileEmail}>example@gmail.ca</Text>
          </View>

          <Pressable style={styles.editButton}>
            <Text style={styles.editButtonText}>Edit Profile</Text>
          </Pressable>
        </View>

        <View style={styles.statsSection}>
          <View style={styles.statItem}>
            <Ionicons name="moon" size={24} color={colors.primary} />
            <View>
              <Text style={styles.statLabel}>Nights Out</Text>
              <Text style={styles.statValue}>8</Text>
            </View>
          </View>

          <View style={styles.statseparator} />

          <View style={styles.statItem}>
            <Ionicons name="images" size={24} color={colors.primary} />
            <View>
              <Text style={styles.statLabel}>Total Memories</Text>
              <Text style={styles.statValue}>54</Text>
            </View>
          </View>

          <View style={styles.statseparator} />

          <View style={styles.statItem}>
            <Ionicons name="people" size={24} color={colors.primary} />
            <View>
              <Text style={styles.statLabel}>Friends</Text>
              <Text style={styles.statValue}>12</Text>
            </View>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Recent Nights</Text>

          {[1, 2, 3].map((item) => (
            <View key={item} style={styles.nightCard}>
              <Image
                source={{
                  uri: `https://images.unsplash.com/photo-150750${545 + item}-b586d89ba3ee?w=80&h=80&fit=crop`,
                }}
                style={styles.nightImage}
              />
              <View style={styles.nightInfo}>
                <Text style={styles.nightTitle}>Night Out #{item}</Text>
                <Text style={styles.nightDate}>March {28 - item}, 2026</Text>
                <Text style={styles.nightStats}>12 memories • 2:30 hrs</Text>
              </View>
              <Ionicons name="chevron-forward" size={20} color={colors.muted} />
            </View>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Settings</Text>

          <Pressable style={styles.settingItem}>
            <Ionicons name="notifications-outline" size={20} color={colors.primary} />
            <Text style={styles.settingText}>Notifications</Text>
            <Ionicons name="chevron-forward" size={20} color={colors.muted} />
          </Pressable>

          <Pressable style={styles.settingItem}>
            <Ionicons name="lock-closed-outline" size={20} color={colors.primary} />
            <Text style={styles.settingText}>Privacy</Text>
            <Ionicons name="chevron-forward" size={20} color={colors.muted} />
          </Pressable>

          <Pressable style={styles.settingItem}>
            <Ionicons name="help-circle-outline" size={20} color={colors.primary} />
            <Text style={styles.settingText}>Help & Support</Text>
            <Ionicons name="chevron-forward" size={20} color={colors.muted} />
          </Pressable>

          <Pressable
            style={[styles.settingItem, styles.logoutItem]}
            onPress={() => router.push('/(auth)/login')}
          >
            <Ionicons name="log-out-outline" size={20} color="#E63946" />
            <Text style={[styles.settingText, styles.logoutText]}>Log Out</Text>
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
  profileCard: {
    backgroundColor: colors.surface,
    borderRadius: 12,
    paddingVertical: spacing.xl,
    paddingHorizontal: spacing.lg,
    alignItems: 'center',
    marginBottom: spacing.xl,
  },
  avatarContainer: {
    marginBottom: spacing.md,
  },
  profileInfo: {
    alignItems: 'center',
    marginBottom: spacing.lg,
  },
  profileName: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.text,
  },
  profileEmail: {
    fontSize: 14,
    color: colors.muted,
    marginTop: spacing.xs,
  },
  editButton: {
    backgroundColor: colors.primary,
    borderRadius: 6,
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.lg,
    width: '100%',
    alignItems: 'center',
  },
  editButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.white,
  },
  statsSection: {
    backgroundColor: colors.white,
    borderRadius: 12,
    paddingVertical: spacing.lg,
    paddingHorizontal: spacing.lg,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: spacing.xl,
  },
  statItem: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
  },
  statLabel: {
    fontSize: 12,
    color: colors.muted,
  },
  statValue: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.text,
  },
  statseparator: {
    width: 1,
    height: 40,
    backgroundColor: colors.border,
  },
  section: {
    marginBottom: spacing.xl,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text,
    marginBottom: spacing.md,
  },
  nightCard: {
    backgroundColor: colors.surface,
    borderRadius: 8,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.md,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.md,
  },
  nightImage: {
    width: 50,
    height: 50,
    borderRadius: 6,
    marginRight: spacing.md,
  },
  nightInfo: {
    flex: 1,
  },
  nightTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.text,
  },
  nightDate: {
    fontSize: 12,
    color: colors.muted,
    marginTop: spacing.xs,
  },
  nightStats: {
    fontSize: 11,
    color: colors.muted,
    marginTop: spacing.xs,
  },
  settingItem: {
    backgroundColor: colors.white,
    borderRadius: 8,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.md,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.md,
    borderColor: colors.border,
    borderWidth: 1,
  },
  settingText: {
    fontSize: 14,
    fontWeight: '500',
    color: colors.text,
    flex: 1,
    marginLeft: spacing.md,
  },
  logoutItem: {
    marginTop: spacing.lg,
  },
  logoutText: {
    color: '#E63946',
  },
});