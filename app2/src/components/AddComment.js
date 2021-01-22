import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableWithoutFeedback as TWF,
    Alert
} from 'react-native'
import {FontAwesome} from '@expo/vector-icons';

class AddComment extends Component{
    state={
        comment: '',
        editMode:false
    }

    handleAddComment = () => {
        Alert.alert('Adicionado', this.state.comment )
    }

    render() {

        let commentArea = null
        if (this.state.editMode){
            commentArea = (
                <View style={styles.container} >
                    <TextInput placeholder = 'Pode comentar ...' 
                        style={styles.input}
                        autoFocus={true}
                        value={this.state.comment}
                        onChangeText={ comment => this.setState({ comment: comment})}
                        onSubmitEditing={this.handleAddComment}
                    />
                    <TWF onPress={ () => this.setState({editMode:false})}>
                        <FontAwesome name='times' size={15} color='#000' />
                    </TWF>
                </View>
            )
        }else{
            commentArea=(
                <TWF onPress={ () => this.setState({editMode: true} )}>
                    <View style={styles.container}>
                        <Text style={styles.caption}>Adicione um comentario...</Text>
                    </View>
                </TWF>

            )
        }

        return(
            <View style={{flex:1}}>
                {commentArea}
            </View>
        )

    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection: 'row',
        alignItems: 'center',
        margin: 10,
              
    },
    caption: {
        marginLeft: 10,
        fontSize:12,
        color: '#000',
        fontWeight: 'bold'
    },
    input: {
        width:'90%',
    }

});

export default AddComment;