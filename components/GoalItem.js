import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

function GoalItem(props) {
  return (
    // onDeleteItem 프로퍼티를 통해 사용한 함수에서 내장된 bind 메서드를 호출하는 방법
    // bind : 나중에 실행할 함수를 미리 조정할 수 있게 함
    // 첫번째 인자 : 곧 실행될 함수의 this 키워드
    // 두번째 인자 : 곧 호출될 함수에서 수신하는 첫 매개변수
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "#ddd" }}
        onPress={props.onDeleteItem.bind(this, props.id)}
        style={({ pressed }) => pressed && styles.pressedItem} // 구조분해할당을 사용해 객체의 일부인 pressed를 사용
      >
        <Text style={styles.goalText}>{props.text}</Text>
      </Pressable>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  pressedItem: {
    opacity: 0.5,
  },
  goalText: {
    color: "white",
    padding: 8,
  },
});
