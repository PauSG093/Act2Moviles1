import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    ContentBody: {
        backgroundColor: 'black',  
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 50,
        paddingTop: 10,
    },
    ContentInput: {
        marginTop: 10,
        gap: 10,
    },
    TextButton: {
        color: 'white',  
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'justify',  
    },
    inputText: {
        backgroundColor: 'orange',  
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 10,
        borderWidth: 2,  
        borderColor: 'white', 
    },
    BotonEnviar: {
        backgroundColor: 'green',  
        paddingVertical: 15,
        borderRadius: 25,
        marginTop: 30,
        borderWidth: 2,  
        borderColor: 'white',  
    },
    title: {
        textAlign: 'justify', 
        fontWeight: 'bold',
        fontSize: 20,
        color: 'white',  
        backgroundColor: 'red',  
        padding: 10,
        borderWidth: 2,  
        borderColor: 'white',  
    },
    primerboton: {
        marginTop: 100,
        alignItems: 'center',
        justifyContent: 'center',
    },
    imagen: {
        width: 100,
        height: 100,
        borderRadius: 10,
    }

})
export default styles