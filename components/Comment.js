import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, Alert } from 'react-native';
import { Avatar, Icon } from 'react-native-elements';


export default function Comment() {
    const v = false
    const [pseudo, setAddPseudo] = useState("")
    const [ajout, setAjout] = useState(false)
    const [addComment, setAddComment] = useState("")
    const [modifier, setModifier] = useState(false)
    const [coments, setComents] = useState([{ id: 1, email: "Randriambinintsoa mandaniaina", name: "milay be", date: 1, min: 20 }])
    // const fetchingData = () => {
    //     fetch('https://jsonplaceholder.typicode.com/comments')
    //         .then(response => response.json())
    //         .then(json => setComents([...coments, ...json]))

    // }
    // useEffect(() => {
    //     fetchingData()

    // }, [v])

    const handleAjout = () => {

        if (ajout) {
            setAjout(false)

        }
        else { setAjout(true) }


    }
    const suppr = (comentsId) => {
        console.log(comentsId)
        const newComents = coments.filter(item => item.id != comentsId)
        setComents(newComents)
    }
    const handleChange = () => {

        if (modifier) {
            setModifier(false)
        }
        else { setModifier(true) }
    }
    const add = () => {
        if (pseudo === "" & addComment === "") {
            Alert.alert("ereur :  commentaire ou pseudo vide")
        }
        else {
            const newComents = {
                id: Math.random(),
                name: addComment,
                email: pseudo,
                date: new Date().getHours(),
                min: new Date().getMinutes()
            }

            setComents([...coments, newComents])
            setAjout(false)
        }

    }
    // const changeSstyle = () => {
    //     if (modifier){
    //         styles={

    //         }
    //     }
    // }
    return (
        <View style={styles.container}>


            <View style={styles.title}>
                <Text>
                    Listes des commentaires
                </Text>
            </View>


            {coments && (
                <ScrollView>

                    {coments.map((data) =>

                        <View style={styles.container} key={data.id}>
                            <View style={styles.contenu}>
                                <View style={styles.left}>

                                    <Avatar rounded title="MD" />
                                </View>
                                <View style={styles.right}>

                                    <View style={styles.email} >
                                        <Text style={styles.textEmail} >{data.email}</Text>
                                    </View>
                                    <View style={styles.comment}>
                                        <Text style={styles.textComents}>{data.name}</Text>
                                    </View>
                                </View> {modifier && (
                                    <View style={styles.modif}>
                                        <TouchableOpacity onPress={() => { suppr(data.id) }}>
                                            <View style={styles.supr}>
                                                <Icon name="delete" size={15} color="#fff" />
                                            </View>
                                        </TouchableOpacity>
                                        <TouchableOpacity onPress={() => { (data.id) }}>
                                            <View style={styles.edit}>
                                                <Icon name="edit" size={15} color="#fff" />
                                            </View>
                                        </TouchableOpacity>
                                    </View>)}

                                <View style={styles.modification}>
                                    <TouchableOpacity onPress={() => { handleChange() }}>
                                        <Icon name="hambourgerMenu" size={15} color="#fff" />
                                    </TouchableOpacity>

                                </View>


                            </View>

                            <View style={styles.footer}>
                                <View style={styles.test}>

                                </View>
                                <View style={styles.date}>
                                    <Text style={styles.dateTime}>{data.date} h : </Text><Text>{data.min} min</Text>
                                </View>

                                <TouchableOpacity>
                                    <View style={styles.icon}>
                                        <Icon name="like" size={15} color="#fff" />
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <View style={styles.icon}>
                                        <Icon name="comment" size={15} color="#fff" />
                                    </View>
                                </TouchableOpacity>

                            </View>

                        </View>


                    )}
                    <View style={styles.containtrait}>
                        <View style={styles.trait}></View>
                    </View>

                    {
                        !ajout && (
                            <View style={styles.btnAddcontainer}>
                                <View>

                                </View>
                                <View style={styles.btnAdd}>
                                    <TouchableOpacity onPress={() => { handleAjout() }}>
                                        <Icon name="add" size={15} color="#fff" />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        )
                    }


                    {ajout && (
                        <View>
                            <View style={styles.container}>
                                <TextInput placeholder='pseudo' style={styles.textInput} value={pseudo} onChangeText={(text) => { setAddPseudo(text) }}></TextInput>
                            </View>
                            <View style={styles.container}>
                                <TextInput placeholder='add comment' style={styles.textInput} value={addComment} onChangeText={(text) => { setAddComment(text) }}></TextInput>
                            </View>
                            <TouchableOpacity style={styles.btn_add} onPress={() => add()}>
                                <Text>Add</Text>
                            </TouchableOpacity>

                        </View>)}

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
    contenu: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 5
    },
    icon: {
        backgroundColor: "lightgrey",
        width: 45,
        height: 22,
        justifyContent: "center",
        alignItems: "center",
        marginLeft: 10,
        marginRight: 10,
        borderRadius: 25

    }
    ,
    btnAddcontainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    btnAdd: {
        width: 30,
        height: 30,
        borderRadius: 100,
        backgroundColor: "blue",
        justifyContent: "center",
        alignItems: "center",
        marginRight: 20
    },
    modif: {
        width: 30,
        display: "flex",
        marginLeft: 5,
        justifyContent: "space-around",
        alignItems: "center",
        height: 60,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: "lightgrey"
    },
    edit: {
        backgroundColor: 'green',
        alignItems: "center",
        justifyContent: "center",
        width: 20,
        height: 20,
    },
    modification: {
        backgroundColor: "lightgrey",
        marginLeft: 20,
        width: 15,
        alignItems: "center",
        borderRadius: 15,
        height: 30

    },
    modificationDeclenche: {
        backgroundColor: "lightgrey",
        width: 15,
        alignItems: "center",
        borderRadius: 15,
        height: 30
    },
    footer: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 10
    },
    test: {
        marginLeft: 15,
        marginRight: 15
    },
    left: {
        backgroundColor: "grey",
        borderRadius: 100,
        marginLeft: 15,
        marginRight: 15
    },
    date: {
        paddingLeft: 40,
        display: "flex",
        flexDirection: "row",

    },
    textEmail: {
        color: "#000000",
        fontWeight: "bold",
    },
    textComents: {
        color: "#000000",
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
        flexDirection: "column",
        backgroundColor: "lightgrey",
        height: 70,
        width: 250,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 10



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

