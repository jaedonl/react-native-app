import { Modal, View, Text, TextInput, Button, TouchableOpacity, Image, StyleSheet } from 'react-native'
import { Picker } from '@react-native-picker/picker';
import * as ImagePicker from 'expo-image-picker';
import React, { useState, useEffect } from 'react';

type EditAccountModalProps = {
    visible: boolean;
    // currentProfile: { 
    //     username?: string; 
    //     age?: number;
    //     gender?: GenderValue;
    //     location?: string;
    //     avatar?: string;
    // };
    onClose: () => void;
    // onSave: (
    //     updatedProfile: { 
    //         username: string; 
    //         age: number;
    //         gender: string;
    //         location: string;
    //         avatar: string;
    //     }
    // ) => void;
};

type GenderValue = '' | 'male' | 'female' | 'other'

const EditAccountModal = ({ 
    visible, 
    // currentProfile, 
    onClose, 
    // onSave
}: EditAccountModalProps) => {
    const [username, setUsername] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState<GenderValue>('');
    const [location, setLocation] = useState('');
    const [avatar, setAvatar] = useState('');

    // useEffect(() => {
    //     setUsername(currentProfile.username || '');
    //     setAge(currentProfile.age ? currentProfile.age.toString() : '');
    //     setGender(currentProfile.gender || '');
    //     setLocation(currentProfile.location || '');
    //     setAvatar(currentProfile.avatar || '');
    // }, [visible, currentProfile]);

    const pickImage = async () => {
        // Request permission to access media library
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
            alert('Permission to access media library is required!');
            return;
        }
        // Launch image library to pick an image
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ['images'],
            allowsEditing: true,
            quality: 1,
        });
        if (!result.canceled && result.assets && result.assets.length > 0) {
            setAvatar(result.assets[0].uri);
        }
    };

    // const handleSave = () => {
    //     const updatedProfile = {
    //         username,
    //         age: Number(age),
    //         gender,
    //         location,
    //         avatar
    //     };
    //     onSave(updatedProfile);
    //     onClose();
    // };

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={visible}
            onRequestClose={onClose}
        >
            <View style={styles.modalOverlay}>
                <View style={styles.modalContent}>
                    <Text style={styles.title}>Edit Account Settings</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Username"
                        value={username}
                        onChangeText={setUsername}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Age"
                        value={age}
                        onChangeText={setAge}
                        keyboardType="numeric"
                    />
                    <Picker
                        selectedValue={gender}
                        style={styles.input}
                        onValueChange={(itemValue) => setGender(itemValue)}
                    >
                        <Picker.Item label="Select Gender" value="" />
                        <Picker.Item label="Male" value="male" />
                        <Picker.Item label="Female" value="female" />
                        <Picker.Item label="Other" value="other" />
                    </Picker>
                    <TextInput
                        style={styles.input}
                        placeholder="Location"
                        value={location}
                        onChangeText={setLocation}
                    />
                    <Text style={styles.label}>Avatar</Text>
                    {avatar ? (
                        <Image source={{ uri: avatar }} style={styles.avatar} />
                    ) : (
                        <Text style={styles.noAvatarText}>No avatar selected</Text>
                    )}
                    <Button title="Upload Avatar" onPress={pickImage} />

                    {/* <Button title="Save" onPress={handleSave} /> */}
                    <TouchableOpacity onPress={onClose} style={styles.closeButton}>
                        <Text style={styles.closeText}>Cancel</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    modalOverlay: {
      flex: 1,
      justifyContent: 'flex-end',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
      backgroundColor: '#fff',
      padding: 20,
      borderTopLeftRadius: 12,
      borderTopRightRadius: 12,
    },
    title: {
      fontSize: 18,
      marginBottom: 15,
      fontWeight: '600',
    },
    input: {
      height: 40,
      borderColor: '#ccc',
      borderWidth: 1,
      borderRadius: 6,
      marginVertical: 10,
      paddingHorizontal: 10,
    },
    label: {
      fontSize: 16,
      fontWeight: '500',
      marginTop: 10,
    },
    avatar: {
      width: 100,
      height: 100,
      borderRadius: 50,
      marginVertical: 10,
    },
    noAvatarText: {
      marginVertical: 10,
      color: '#777',
    },
    closeButton: {
      marginTop: 10,
      alignItems: 'center',
    },
    closeText: {
      color: 'blue',
    },
});

export default EditAccountModal