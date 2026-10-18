
import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  TextInput,
  StyleSheet,
} from 'react-native';
import { useFonts } from 'expo-font';

const coreCourses = [
  'CS 504 Software Engineering',
  'CS 506 Programming for Computing',
  'CS 519 Cloud Computing Overview',
  'CS 533 Computer Architecture',
  'CS 547 Secure Systems and Programs',
  'CS 622 Discrete Math and Algorithms for Computing',
  'DS 510 Artificial Intelligence for Data Science',
  'DS 620 Machine Learning & Deep Learning',
];

const depthCourses = [
  'CS 624 Full-Stack Development - Mobile App',
  'CS 628 Full-Stack Development - Web App',
];

const capstoneCourses = [
  'CS687 Computer Science Capstone',
];

const CourseSection = ({ title, credits, courses }) => (
  <View style={styles.section}>
    <Text style={styles.sectionTitle}>
      {title} ({credits} credits)
    </Text>
    {courses.map((course) => (
      <Text key={course} style={styles.course}>
        {course}
      </Text>
    ))}
  </View>
);

const App = () => {
  const [favoriteCourse, setFavoriteCourse] = useState('');

  // Load the custom Helvetica font
  const [fontsLoaded, fontError] = useFonts({
    HelveticaCustom: require('/workspaces/cs624-pe-worthington/PE02-CoreComponents/assets/fonts/HelveticaNeueLight.otf'),
    HelveticaRoman: require('/workspaces/cs624-pe-worthington/PE02-CoreComponents/assets/fonts/HelveticaNeueRoman.otf'),
  });

  if (fontError) {
    throw fontError;
  }

  // Wait until the font is ready before rendering
  if (!fontsLoaded) {
    return null;
  }

  return (
    <ScrollView
      style={styles.screen}
      contentContainerStyle={styles.content}
      keyboardShouldPersistTaps="handled"
    >
      <View style={styles.header}>
        <Image
          source={require('./assets/images/icon.png')}
          style={styles.logo}
          resizeMode="contain"
        />

        <Text style={styles.title}>
          Master of Science in Computer Science Course Guide
        </Text>

        <Text style={styles.subtitle}>
          City University of Seattle
        </Text>
      </View>

      <View style={styles.favoriteCard}>
        <Text style={styles.label}>
          Which course did you like?
        </Text>

        <TextInput
          style={styles.input}
          placeholder="e.g., CS624"
          placeholderTextColor="#64748b"
          value={favoriteCourse}
          onChangeText={setFavoriteCourse}
          autoCapitalize="characters"
          accessibilityLabel="Favorite course"
        />

        {favoriteCourse.trim() ? (
          <Text style={styles.favoriteText}>
            Your favorite: {favoriteCourse.trim()}
          </Text>
        ) : null}
      </View>

      <CourseSection
        title="Core Requirements"
        credits={24}
        courses={coreCourses}
      />

      <CourseSection
        title="Depth of Study"
        credits={6}
        courses={depthCourses}
      />

      <CourseSection
        title="Capstone"
        credits={3}
        courses={capstoneCourses}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#0b1220',
  },

  content: {
    padding: 20,
    paddingTop: 44,
    paddingBottom: 48,
  },

  header: {
    alignItems: 'center',
    marginBottom: 28,
  },

  logo: {
    width: 110,
    height: 110,
    marginBottom: 14,
  },

  title: {
    fontFamily: 'HelveticaCustom',
    fontSize: 28,
    color: '#f8fafc',
    textAlign: 'center',
  },

  subtitle: {
    fontFamily: 'HelveticaCustom',
    fontSize: 15,
    color: '#94a3b8',
    marginTop: 6,
  },

  favoriteCard: {
    backgroundColor: '#172338',
    borderRadius: 18,
    padding: 20,
    marginBottom: 22,
  },

  label: {
    fontFamily: 'HelveticaCustom',
    fontSize: 16,
    color: '#e2e8f0',
    marginBottom: 12,
  },

  input: {
    fontFamily: 'HelveticaCustom',
    borderWidth: 1,
    borderColor: '#334155',
    backgroundColor: '#0f172a',
    borderRadius: 10,
    padding: 14,
    fontSize: 16,
    color: '#f8fafc',
  },

  favoriteText: {
    fontFamily: 'HelveticaCustom',
    marginTop: 12,
    color: '#60a5fa',
  },

  section: {
    backgroundColor: '#172338',
    borderRadius: 18,
    padding: 20,
    marginBottom: 20,
  },

  sectionTitle: {
    fontFamily: 'HelveticaCustom',
    fontSize: 21,
    color: '#60a5fa',
    borderBottomWidth: 1,
    borderBottomColor: '#334155',
    paddingBottom: 12,
    marginBottom: 12,
  },

  course: {
    fontFamily: 'HelveticaCustom',
    fontSize: 15,
     
    color: '#e2e8f0',
    lineHeight: 25,
    paddingVertical: 6,
  },

  link: {
    fontFamily: 'HelveticaCustom',
    textAlign: 'center',
    color: '#38bdf8',
    padding: 14,
  },
});

export default App;
