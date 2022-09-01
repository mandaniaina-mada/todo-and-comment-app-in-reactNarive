import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, Alert } from 'react-native';
import { Icon } from 'react-native-elements';


export default function Todo() {
    const v = false
    const [addTodo, setAddTodo] = useState("")
    const [todo, setTodo] = useState([{ id: 1, title: 'todo', completed: false }, { id: 2, title: 'test', completed: true }])
    /*const fetchingData = () => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(json => setTodo([...todo, ...json]))
        console.log(todo)

    }*/
    // useEffect(() => {
    //     fetchingData()

    // }, [v])
    const showAlert = () =>
        Alert.alert(
            "Alert Title",
            "My Alert Msg",
            [
                {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                { text: "OK", onPress: () => console.log("OK Pressed") }
            ]
        );

    const suppr = (todoId) => {

        const newTodo = todo.filter(item => item.id != todoId)
        setTodo(newTodo)
    }

    const add = () => {
        if (addTodo === "") {
            Alert.alert("veuiller inserer un todo")
            return (console.log("eror"))
        }
        else {
            const newTodo = {
                id: todo.length + 1,
                title: addTodo,
                completed: false
            }
            setTodo([...todo, newTodo])
            setAddTodo("")
        }

    }
    const setComplete = (id) => {
        const newTodo = todo.map((item,) => {
            if (item.id === id) {
                if (item.completed === false) {
                    return { ...item, completed: true }
                }
                else {
                    return { ...item, completed: false }
                }
            }
            return (item)



        })
        setTodo(newTodo)


    }

    return (
        <View >




            {todo && (
                <ScrollView>

                    {todo.map((data) =>

                        <View style={styles.container} key={data.id}>
                            <View style={styles.contain} >
                                <View>
                                    <Text style={styles.text}>{data.id}</Text>
                                </View >
                                <View style={styles.right}>

                                    <View >

                                        <Text style={styles.text} >
                                            {data.title}
                                        </Text>
                                    </View>
                                    <TouchableOpacity style={styles.check} onPress={() => setComplete(data.id)}>
                                        {data.completed && (
                                            <Icon name="done" size={15} color="#fff" />
                                        )
                                        }
                                    </TouchableOpacity>
                                    {console.log(data.completed)}

                                </View>

                                <View style={styles.left}>
                                    <TouchableOpacity onPress={() => { suppr(data.id) }}>
                                        {data.completed && (
                                            <View style={styles.supr}>
                                                <Icon name="delete" size={15} color="#fff" />
                                            </View>)}
                                    </TouchableOpacity >
                                </View>

                            </View>
                        </View>

                    )}<View style={styles.containtrait}>
                        <View style={styles.trait}></View>
                    </View>
                    <View>
                        <View style={styles.container}>
                            <TextInput placeholder='add todo' style={styles.textInput} value={addTodo} onChangeText={(text) => { setAddTodo(text) }}></TextInput>
                        </View>
                        <TouchableOpacity style={styles.btn_add} onPress={() => add()}>
                            <Text>Add</Text>
                        </TouchableOpacity>
                    </View>

                </ScrollView>
            )
            }


            <StatusBar style="auto" />
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff"
    },

    title: {
        alignItems: "center",
        height: 30
    },
    textInput: {
        height: 30,
        paddingLeft: 20,
        backgroundColor: "lightgrey",
        margin: 10,
        borderRadius: 25
    },
    containtrait: {
        justifyContent: "center",
        alignItems: "center",

    },
    trait: {
        width: 100,
        height: 1,
        backgroundColor: "grey",
        marginTop: 10,
        marginBottom: 10
    },
    contain: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "grey",
        padding: 30,
        borderWidth: 1,
        alignItems: "center",
        margin: 10,
        borderRadius: 25


    },
    btn_add: {
        paddingTop: 10,
        alignItems: "center",
    },
    check: {
        backgroundColor: 'green',
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 50,
        width: 18,
        height: 18,
        marginLeft: 15,




    },
    right: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        paddingLeft: 15,
        paddingRight: 15,



    },
    supr: {
        backgroundColor: 'red',
        alignItems: "center",
        justifyContent: "center",
        width: 20,
        height: 20,

    },
    btn: {

    },
    text: {
        color: '#fff',

    }
});

