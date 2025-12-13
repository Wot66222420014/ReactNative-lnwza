import { Link } from "expo-router";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <ScrollView style={{ margin: 20 }}>
      <View style={styles.container}>
        <Link href="/page2" style={styles.link}>
          <Text style={styles.linkText}>ไปหน้าที่ 2</Text>
        </Link>
        <Link href="/ex01" style={styles.link}>
          <Text style={styles.linkText}>ex01</Text>
        </Link>
        <Link href="/ex02" style={styles.link}>
          <Text style={styles.linkText}>ex02</Text>
        </Link>
        <Link href="/ex03" style={styles.link}>
          <Text style={styles.linkText}>ex03</Text>
        </Link>
        <Link href="/ex04" style={styles.link}>
          <Text style={styles.linkText}>ex04</Text>
        </Link>
        <Link href="/ex05" style={styles.link}>
          <Text style={styles.linkText}>ex05</Text>
        </Link>
        <Link href="/ex06" style={styles.link}>
          <Text style={styles.linkText}>ex06</Text>
        </Link>
        <Link href="/ex07" style={styles.link}>
          <Text style={styles.linkText}>ex07</Text>
        </Link>
        <Link href="/ex08" style={styles.link}>
          <Text style={styles.linkText}>ex08</Text>
        </Link>
        <Link href="/ex09" style={styles.link}>
          <Text style={styles.linkText}>ex09</Text>
        </Link>
        <Link href="/ex10" style={styles.link}>
          <Text style={styles.linkText}>ex10</Text>
        </Link>
        <Link href="/ex11" style={styles.link}>
          <Text style={styles.linkText}>ex11</Text>
        </Link>
        <Link href="/ex12" style={styles.link}>
          <Text style={styles.linkText}>ex12</Text>
        </Link>
        <Link href="/test-components" style={styles.link}>
          <Text style={styles.linkText}>Test Components</Text>
        </Link>
        <Link href="/travel" style={styles.link}>
          <Text style={styles.linkText}>Travel</Text>
        </Link>
        <Link href="/resort" style={styles.link}>
          <Text style={styles.linkText}>resort</Text>
        </Link>
        <Link href="/health" style={styles.link}>
          <Text style={styles.linkText}>Health</Text>
        </Link>
        <Link href="/home" style={styles.link}>
          <Text style={styles.linkText}>Home</Text>
        </Link>
      
      
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  link: {
    margin: 10,
    padding: 10,
    backgroundColor: "#2196F3",
    borderRadius: 5,
  },
  linkText: { color: "#fff", fontSize: 16, textAlign: "center" },
});
