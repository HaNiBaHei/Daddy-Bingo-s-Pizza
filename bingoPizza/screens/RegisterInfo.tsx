import React  from 'react';
import { StyleSheet, Dimensions, TextInput} from 'react-native';


import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;

export default function TabOneScreen({ navigation }: RootTabScreenProps<'LogInTab'>) {
  return (
    <View style={styles.container}>
      <Text style={styles.baseText}>Hello</Text>
      <View style={styles.roundedrec}/>
          
        
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FF6D6D',
  },
  baseText: {
    fontSize: 20,

  },
  roundedrec: {
    alignItems:'center',
    justifyContent:'center',
    width:screenWidth*.8,
    height:screenHeight*.5,
    backgroundColor:'white',
    borderRadius:50,
    elevation: 10,
    
  },
  login_sign: {
    borderWidth:1,
    borderColor:'rgba(0,0,0,0)',
    alignItems:'center',
    justifyContent:'center',
    width:screenWidth*45/100,
    height:screenHeight*5/100,
    backgroundColor:'#FF6D6D',
    borderRadius:50,
    
  },
  logbox: {
    borderWidth:1,
    borderColor:'rgba(0,0,0,0)',
    alignItems:'center',
    justifyContent:'center',
    width:screenWidth*45/100,
    height:screenHeight*5/100,
    backgroundColor:'#FF6D6D',
    borderRadius:50,
  },
  signbox: {
    borderWidth:1,
    borderColor:'rgba(0,0,0,0)',
    alignItems:'center',
    justifyContent:'center',
    width:screenWidth*45/100,
    height:screenHeight*5/100,
    backgroundColor:'#FF6D6D',
    borderRadius:50,
  }

});
