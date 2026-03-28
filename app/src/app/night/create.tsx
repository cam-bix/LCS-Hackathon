import { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ScrollView,
  Switch,
  TextInput,
} from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '@/constants/colors';
import { spacing } from '@/constants/spacing';

export default function CreateNightScreen() {
  const router = useRouter();
  const [isRandomInterval, setIsRandomInterval] = useState(true);
  const [interval, setInterval] = useState('');
  const [hours, setHours] = useState('');
  const [minutes, setMinutes] = useState('');
  const [memoriesCount, setMemoriesCount] = useState('5');

  const handleStart = () => {
    router.push('/night/active');
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Pressable onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="chevron-back" size={28} color={colors.primary} />
        </Pressable>
      </View>

      <View style={styles.content}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Set Interval</Text>
          
          <View style={styles.toggleRow}>
            <Text style={styles.toggleLabel}>Random Interval</Text>
            <Switch
              value={isRandomInterval}
              onValueChange={setIsRandomInterval}
              trackColor={{ false: colors.surface, true: colors.primary }}
              thumbColor={isRandomInterval ? colors.white : colors.muted}
            />
          </View>

          {!isRandomInterval && (
            <View style={styles.inputWrapper}>
              <TextInput
                style={styles.input}
                placeholder="Enter interval in minutes"
                placeholderTextColor={colors.muted}
                keyboardType="number-pad"
                value={interval}
                onChangeText={setInterval}
              />
            </View>
          )}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Set Length of Event</Text>
          
          <View style={styles.timeInputRow}>
            <View style={styles.timeInput}>
              <TextInput
                style={styles.numberInput}
                placeholder="HH"
                placeholderTextColor={colors.muted}
                keyboardType="number-pad"
                maxLength={2}
                value={hours}
                onChangeText={setHours}
              />
              <Text style={styles.timeUnit}>Hours</Text>
            </View>

            <View style={styles.timeSeparator}>
              <Text style={styles.colonText}>:</Text>
            </View>

            <View style={styles.timeInput}>
              <TextInput
                style={styles.numberInput}
                placeholder="MM"
                placeholderTextColor={colors.muted}
                keyboardType="number-pad"
                maxLength={2}
                value={minutes}
                onChangeText={setMinutes}
              />
              <Text style={styles.timeUnit}>Minutes</Text>
            </View>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Number of Memories</Text>
          
          <View style={styles.optionsGrid}>
            {['5', '10', '15', '20+'].map((option) => (
              <Pressable
                key={option}
                style={[
                  styles.optionCard,
                  memoriesCount === option && styles.optionCardSelected,
                ]}
                onPress={() => setMemoriesCount(option)}
              >
                <Ionicons
                  name={memoriesCount === option ? 'radio-button-on' : 'radio-button-off'}
                  size={24}
                  color={memoriesCount === option ? colors.primary : colors.muted}
                />
                <Text
                  style={[
                    styles.optionText,
                    memoriesCount === option && styles.optionTextSelected,
                  ]}
                >
                  {option} Memories
                </Text>
              </Pressable>
            ))}
          </View>
        </View>

        <Pressable style={styles.startButton} onPress={handleStart}>
          <View style={styles.moonIcon}>
            <Ionicons name="moon" size={24} color={colors.white} />
          </View>
          <Text style={styles.startButtonText}>Start a Night Out</Text>
        </Pressable>
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
    paddingTop: spacing.lg,
    paddingHorizontal: spacing.lg,
    paddingBottom: spacing.md,
    backgroundColor: colors.primary,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    padding: spacing.lg,
  },
  section: {
    marginBottom: spacing.xl,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.text,
    marginBottom: spacing.md,
  },
  toggleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.surface,
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.md,
    borderRadius: 8,
  },
  toggleLabel: {
    fontSize: 16,
    fontWeight: '500',
    color: colors.text,
  },
  inputWrapper: {
    marginTop: spacing.md,
  },
  input: {
    backgroundColor: colors.surface,
    borderRadius: 8,
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.md,
    fontSize: 16,
    color: colors.text,
  },
  timeInputRow: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
  timeInput: {
    flex: 1,
    alignItems: 'center',
  },
  numberInput: {
    backgroundColor: colors.surface,
    borderRadius: 8,
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.md,
    fontSize: 24,
    fontWeight: '700',
    color: colors.text,
    textAlign: 'center',
    minWidth: 80,
  },
  timeUnit: {
    fontSize: 12,
    color: colors.muted,
    marginTop: spacing.sm,
  },
  timeSeparator: {
    marginHorizontal: spacing.sm,
    marginBottom: spacing.md,
  },
  colonText: {
    fontSize: 28,
    fontWeight: '700',
    color: colors.text,
  },
  optionsGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  optionCard: {
    width: '48%',
    backgroundColor: colors.surface,
    borderRadius: 8,
    paddingVertical: spacing.lg,
    paddingHorizontal: spacing.md,
    alignItems: 'center',
    marginBottom: spacing.md,
    borderWidth: 2,
    borderColor: 'transparent',
  },
  optionCardSelected: {
    borderColor: colors.primary,
    backgroundColor: colors.white,
  },
  optionText: {
    fontSize: 14,
    fontWeight: '500',
    color: colors.muted,
    marginTop: spacing.sm,
  },
  optionTextSelected: {
    color: colors.primary,
    fontWeight: '700',
  },
  startButton: {
    backgroundColor: colors.primary,
    borderRadius: 8,
    paddingVertical: spacing.lg,
    paddingHorizontal: spacing.lg,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: spacing.xl,
  },
  moonIcon: {
    marginRight: spacing.md,
  },
  startButtonText: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.white,
  },
});