import { StatusBar } from "expo-status-bar";
import { View, Text, Button } from "react-native";

export default function HomeScreen({navigation}: any){

    function navToGallery(){
        navigation.navigate('Gallery');
    }
    
    return (
        <View style={{flex:1}}>
            <Text>Home Works</Text>
            <Button 
                title="Go Gallery" 
                onPress={navToGallery} />
            <StatusBar style="auto" />
        </View>
    );
}