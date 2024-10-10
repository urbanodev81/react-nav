import { StatusBar } from "expo-status-bar";
import { View, Text, Button } from "react-native";

export default function GalleryScreen({ navigation}: any){

    function navToGallery(){
        navigation.navigate('Home');
    }
    return (
        <View style={{flex:1}}>
            <Text>Gallery Works</Text>
            <Button title="Go Home" onPress={navToGallery} />
            <StatusBar style="auto" />
        </View>
    )
}