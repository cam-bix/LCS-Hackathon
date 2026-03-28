import { useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { Link } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '@/constants/colors';
import { spacing } from '@/constants/spacing';

export default function RegisterScreen() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isAgeConfirmed, setIsAgeConfirmed] = useState(false);
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  function handleRegister() {
    console.log('Register pressed', {
      username,
      email,
      password,
      isAgeConfirmed,
      acceptedTerms,
    });
  }

  return (
    <KeyboardAvoidingView
      style={styles.screen}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <View style={styles.container}>
        <View style={styles.iconWrapper}>
          <Ionicons name="person-outline" size={46} color={colors.primary} />
        </View>

        <Text style={styles.title}>
          Create A Night To Remember account to start creating memories
        </Text>

        <View style={styles.form}>
          <View style={styles.inputContainer}>
            <View style={styles.inputLabelRow}>
              <Ionicons name="person-outline" size={14} color={colors.primary} />
              <Text style={styles.inputLabel}>Username</Text>
            </View>
            <TextInput
              value={username}
              onChangeText={setUsername}
              placeholder="Demo_name"
              placeholderTextColor={colors.muted}
              autoCapitalize="none"
              autoCorrect={false}
              style={styles.input}
            />
          </View>

          <View style={styles.inputContainer}>
            <View style={styles.inputLabelRow}>
              <Ionicons name="mail-outline" size={14} color={colors.primary} />
              <Text style={styles.inputLabel}>Email</Text>
            </View>
            <TextInput
              value={email}
              onChangeText={setEmail}
              placeholder="example@gmail.ca"
              placeholderTextColor={colors.muted}
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
              style={styles.input}
            />
          </View>

          <View style={styles.inputContainer}>
            <View style={styles.inputLabelRow}>
              <Ionicons name="lock-closed-outline" size={14} color={colors.primary} />
              <Text style={styles.inputLabel}>Password</Text>
            </View>
            <TextInput
              value={password}
              onChangeText={setPassword}
              placeholder="Password123"
              placeholderTextColor={colors.muted}
              secureTextEntry
              autoCapitalize="none"
              autoCorrect={false}
              style={styles.input}
            />
          </View>

          <Pressable style={styles.checkRow} onPress={() => setIsAgeConfirmed(!isAgeConfirmed)}>
            <Text style={styles.checkText}>I am 16 years of age or older</Text>
            <Ionicons
              name={isAgeConfirmed ? 'checkbox' : 'square-outline'}
              size={20}
              color={colors.primary}
            />
          </Pressable>

          <Pressable style={styles.checkRow} onPress={() => setAcceptedTerms(!acceptedTerms)}>
            <Text style={styles.checkText}>
              I have read and agreed to the Terms and Conditions
            </Text>
            <Ionicons
              name={acceptedTerms ? 'checkbox' : 'square-outline'}
              size={20}
              color={colors.primary}
            />
          </Pressable>

          <Pressable style={styles.button} onPress={handleRegister}>
            <Text style={styles.buttonText}>Create Account</Text>
          </Pressable>

          <Text style={styles.footerText}>
            Already have an account?{' '}
            <Link href="/(auth)/login" style={styles.linkText}>
              Sign In
            </Link>
          </Text>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.background,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 28,
    paddingTop: 90,
  },
  iconWrapper: {
    marginBottom: spacing.lg,
  },
  title: {
    textAlign: 'center',
    fontSize: 24,
    lineHeight: 32,
    fontWeight: '500',
    color: colors.text,
    maxWidth: 320,
    marginBottom: 36,
  },
  form: {
    width: '100%',
    maxWidth: 320,
  },
  inputContainer: {
    backgroundColor: colors.surface,
    borderRadius: 4,
    paddingHorizontal: 12,
    paddingTop: 8,
    paddingBottom: 8,
    marginBottom: 12,
  },
  inputLabelRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 2,
    gap: 6,
  },
  inputLabel: {
    fontSize: 11,
    color: colors.primary,
  },
  input: {
    fontSize: 15,
    color: colors.text,
    paddingVertical: 2,
  },
  checkRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 14,
    gap: 12,
  },
  checkText: {
    flex: 1,
    fontSize: 12,
    color: colors.text,
  },
  button: {
    backgroundColor: colors.primary,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    marginTop: 6,
    marginBottom: 12,
  },
  buttonText: {
    color: colors.white,
    fontSize: 15,
    fontWeight: '600',
  },
  footerText: {
    textAlign: 'center',
    fontSize: 12,
    color: colors.text,
  },
  linkText: {
    textDecorationLine: 'underline',
    color: colors.text,
  },
});