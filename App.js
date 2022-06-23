import * as React from "react";
import { StatusBar } from "expo-status-bar";
import { Searchbar, IconButton, MD3Colors } from "react-native-paper";
import { Alert, Modal, StyleSheet, Text, Pressable, View, TouchableOpacity, ScrollView, Button, TextInput, SafeAreaView} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { MaterialCommunityIcons, MaterialIcons, Octicons, Entypo} from "@expo/vector-icons";

function Feed({ navigation }) {
  const [searchQuery, setSearchQuery] = React.useState("");

  const onChangeSearch = (query) => setSearchQuery(query);
  return (
    <View style={styles.container}>
      <View style={styles.searchandbutton}>
        <View style={styles.searchbar}>
          <Searchbar placeholder="Search" onChangeText={onChangeSearch} value={searchQuery}/>
        </View>
        <View style={styles.button}>
          <TouchableOpacity onPress={() => navigation.navigate("สร้างการประชุม")}>
            <Text style={{ color: "#FFF" }}>สร้างใหม่</Text>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate("การประชุมใหญ่สามัญเจ้าของร่วม ประจำปี 2564")}>
        <Text style={styles.text2}>ประชุมคณะกรรมการนิติบุคคลครั้งที่ 20</Text>
      </TouchableOpacity>
    </View>
  );
}

function Profile() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Profile !!</Text>
    </View>
  );
}

function Notifications({ navigation }) {
  const [searchQuery, setSearchQuery] = React.useState("");

  const onChangeSearch = (query) => setSearchQuery(query);
  return (
    <View style={styles.container}>
      <View style={styles.searchandbutton}>
        <View style={styles.searchbar}>
          <Searchbar placeholder="Search" onChangeText={onChangeSearch} value={searchQuery}/>
        </View>
        <View style={styles.button}>
          <TouchableOpacity onPress={() => navigation.navigate("สร้างโครงการ")}>
            <Text style={{ color: "#FFF" }}>สร้างใหม่</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Meeting"
        component={Feed}
        options={{
          tabBarLabel: "การประชุม",
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="meeting-room" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Event"
        component={Notifications}
        options={{
          tabBarLabel: "โครงการ",
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Octicons name="project" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: "โปรไฟล์",
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account-circle-outline" color={color} size={size}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function Details({ navigation }) {

  return (
    <ScrollView style={styles.container3}>
      <View style={styles.containerB}>
        <TouchableOpacity onPress={() => navigation.navigate("Home")} style={styles.button}>
          <Text style={styles.buttontext}>กลับ</Text>
        </TouchableOpacity>
        <Text style={styles.text}>สการประชุมใหญ่สามัญเจ้าของร่วม ประจำปี 2564</Text>
        <View style={styles.centeredView}>
        <Entypo 
          name="dots-three-vertical"  
          size={20} 
          onPress={() => navigation.navigate("Home")} style={styles.right}
        />
    </View>
      </View>
      <Text style={styles.text2}>ไฟล์แนบ</Text>
      <View style={styles.center}>
        <TouchableOpacity onPress={() => alert("Hello, world!")} style={styles.button2}>
          <Text style={styles.buttontext2}>เพิ่มไฟล์</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.text2}>แท็ก</Text>
      <View style={styles.center}>
        <TouchableOpacity onPress={() => alert("Hello, world!")} style={styles.button2}>
          <Text style={styles.buttontext2}>เพิ่มแท็ก</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.center}>
        <TouchableOpacity onPress={() => alert("Hello, world!")} style={styles.button3}>
          <Text style={styles.buttontext3}>บันทึก</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </ScrollView>
  );
}

function DetailsScreen() {
  const [text, onChangeText] = React.useState("");
  const [text2, onChangeText2] = React.useState("");

  return (
    <ScrollView style={styles.container2}>
      <Text style={styles.text2}>ชื่อการประชุม</Text>
      <View style={styles.center}>
        <SafeAreaView style={styles.containerSafeArea}>
          <TextInput style={styles.input} onChangeText={onChangeText} value={text}
          />
        </SafeAreaView>
      </View>
      <Text style={styles.text2}>รายละเอียดการประชุม</Text>
      <View style={styles.center}>
        <SafeAreaView style={styles.containerSafeArea}>
          <TextInput style={styles.input} onChangeText={onChangeText2} value={text2} multiline numberOfLines={10}/>
        </SafeAreaView>
      </View>
      <Text style={styles.text2}>ไฟล์แนบ</Text>
      <View style={styles.center}>
        <TouchableOpacity onPress={() => alert("Hello, world!")} style={styles.button2}>
          <Text style={styles.buttontext2}>เพิ่มไฟล์</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.text2}>แท็ก</Text>
      <View style={styles.center}>
        <TouchableOpacity onPress={() => alert("Hello, world!")} style={styles.button2}>
          <Text style={styles.buttontext2}>เพิ่มแท็ก</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.center}>
        <TouchableOpacity onPress={() => alert("Hello, world!")} style={styles.button3}>
          <Text style={styles.buttontext3}>บันทึก</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </ScrollView>
  );
}

function DetailsScreen1() {
  const [text, onChangeText] = React.useState("");
  const [text2, onChangeText2] = React.useState("");

  return (
    <ScrollView style={styles.container2}>
      <Text style={styles.text2}>ชื่อโครงการ</Text>
      <View style={styles.center}>
        <SafeAreaView style={styles.containerSafeArea}>
          <TextInput style={styles.input} onChangeText={onChangeText} value={text}/>
        </SafeAreaView>
      </View>
      <Text style={styles.text2}>รายละเอียดโครงการ</Text>
      <View style={styles.center}>
        <SafeAreaView style={styles.containerSafeArea}>
          <TextInput style={styles.input} onChangeText={onChangeText2} value={text2} multiline numberOfLines={10}/>
        </SafeAreaView>
      </View>
      <Text style={styles.text2}>ไฟล์แนบ</Text>
      <View style={styles.center}>
        <TouchableOpacity onPress={() => alert("Hello, world!")} style={styles.button2}>
          <Text style={styles.buttontext2}>เพิ่มไฟล์</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.text2}>แท็ก</Text>
      <View style={styles.center}>
        <TouchableOpacity onPress={() => alert("Hello, world!")} style={styles.button2} >
          <Text style={styles.buttontext2}>เพิ่มแท็ก</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.center}>
        <TouchableOpacity onPress={() => alert("Hello, world!")} style={styles.button3} >
          <Text style={styles.buttontext3}>บันทึก</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </ScrollView>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={MyTabs} options={{ headerShown: false }}/>
        <Stack.Screen name="การประชุมใหญ่สามัญเจ้าของร่วม ประจำปี 2564" component={Details} options={{ headerShown: false }}/>
        <Stack.Screen name="สร้างการประชุม" component={DetailsScreen} />
        <Stack.Screen name="สร้างโครงการ" component={DetailsScreen1} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  center: {
    width: "100%",
    paddingLeft: 18,
    paddingRight: 18,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  container2: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: "#fff",
  },
  container3: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: 30,
    marginBottom: 40,
  },
  containerB: {
    width: "100%",
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },

  containerSafeArea: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 20,
  },
  button1: {
    marginTop: 20,
    marginLeft: 20,
    width: "25%",
    height: 40,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "#058AFA",
    elevation: 3,
    backgroundColor: "white",
  },
  buttontext: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "#fff",
  },
  button2: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    marginBottom: 20,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "#058AFA",
    elevation: 3,
    backgroundColor: "white",
  },
  buttontext2: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "#058AFA",
  },
  button3: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "#058AFA",
    elevation: 3,
    backgroundColor: "#058AFA",
    width: "100%",
    marginBottom: 10,
  },
  buttontext3: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
  text: {
    marginTop: 20,
    marginLeft: 8,
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "#058AFA",
  },
  text2: {
    color: "black",
    fontSize: 18,
    marginHorizontal: 20,
    marginBottom: 10,
    textAlign: "left",
    fontWeight: "bold",
  },
  input: {
    width: "100%",
    padding: 10,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "black",
  },
  searchandbutton: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 30,
  },
  searchbar: {
    width: "75%",
    padding: 5,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    width: "25%",
    backgroundColor: "#058AFA",
    borderRadius: 5,
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  right: {
    marginRight: 2,
    color: "#058AFA",
  },
});
