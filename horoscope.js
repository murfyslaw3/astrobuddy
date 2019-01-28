import React, {Component} from 'react';
import {Platform, StatusBar, StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import {Button, Card} from "react-native-elements";
import horoscopeinfo from './horoscopeinfo';
import {withNavigation} from "react-navigation";

type Props = {};
class horoscope extends Component<Props> {
    render() {
        return (
            <View style={styles.container}>
                <View style={{flex:.02}}>
                    <StatusBar
                        barStyle="light-content"
                    />
                </View>
                <View style={styles.header}>

                    <Text style={styles.text}  > Horoscope </Text>
                </View >

                <ScrollView style={{flex:9/10,}}>


                    <View style={styles.card} onPress={()=> this.props.navigation.navigate('horoscopeinfo')}>

                        <Image style={{ top:7,marginLeft:30,}} source={require('./images/aries.png')}>
                        </Image>
                        <Text style={styles.cardHeader} onPress={()=> this.props.navigation.navigate('horoscopeinfo')}> ARIES</Text>

                    </View>
                    <View style={styles.card} onPress={()=> this.props.navigation.navigate('horoscopeinfo')}>

                        <Image style={{ top:7,marginLeft:30,}} source={require('./images/taurus.png')}>
                        </Image>
                        <Text style={styles.cardHeader} onPress={()=> this.props.navigation.navigate('horoscopeinfo')}> TAURUS</Text>

                    </View>
                    <View style={styles.card} onPress={()=> this.props.navigation.navigate('horoscopeinfo')}>

                        <Image style={{ top:7,marginLeft:30,}} source={require('./images/gemini.png')}>
                        </Image>
                        <Text style={styles.cardHeader} onPress={()=> this.props.navigation.navigate('horoscopeinfo')}> GEMINI</Text>

                    </View>
                    <View style={styles.card} onPress={()=> this.props.navigation.navigate('horoscopeinfo')}>

                        <Image style={{ top:7,marginLeft:30,}} source={require('./images/cancer.png')}>
                        </Image>
                        <Text style={styles.cardHeader} onPress={()=> this.props.navigation.navigate('horoscopeinfo')}> CANCER</Text>

                    </View>
                    <View style={styles.card} onPress={()=> this.props.navigation.navigate('horoscopeinfo')}>

                        <Image style={{ top:7,marginLeft:30,}} source={require('./images/leo.png')}>
                        </Image>
                        <Text style={styles.cardHeader} onPress={()=> this.props.navigation.navigate('horoscopeinfo')}> LEO</Text>

                    </View>
                    <View style={styles.card} onPress={()=> this.props.navigation.navigate('horoscopeinfo')}>

                        <Image style={{ top:7,marginLeft:30,}} source={require('./images/virgo.png')}>
                        </Image>
                        <Text style={styles.cardHeader} onPress={()=> this.props.navigation.navigate('horoscopeinfo')}> VIRGO</Text>

                    </View>
                    <View style={styles.card} onPress={()=> this.props.navigation.navigate('horoscopeinfo')}>

                        <Image style={{ top:7,marginLeft:30,}} source={require('./images/libra.png')}>
                        </Image>
                        <Text style={styles.cardHeader} onPress={()=> this.props.navigation.navigate('horoscopeinfo')}> LIBRA</Text>

                    </View>
                    <View style={styles.card} onPress={()=> this.props.navigation.navigate('horoscopeinfo')}>

                        <Image style={{ top:7,marginLeft:30,}} source={require('./images/scorpio2.png')}>
                        </Image>
                        <Text style={styles.cardHeader} onPress={()=> this.props.navigation.navigate('horoscopeinfo')}> SCORPIO</Text>

                    </View>
                    <View style={styles.card} onPress={()=> this.props.navigation.navigate('horoscopeinfo')}>

                        <Image style={{ top:7,marginLeft:30,}} source={require('./images/sagittarius.png')}>
                        </Image>
                        <Text style={styles.cardHeader} onPress={()=> this.props.navigation.navigate('horoscopeinfo')}> SAGITTARIUS</Text>

                    </View>
                    <View style={styles.card} onPress={()=> this.props.navigation.navigate('horoscopeinfo')}>

                        <Image style={{ top:7,marginLeft:30,}} source={require('./images/capricorn.png')}>
                        </Image>
                        <Text style={styles.cardHeader} onPress={()=> this.props.navigation.navigate('horoscopeinfo')}> CAPRICORN</Text>

                    </View>
                    <View style={styles.card} onPress={()=> this.props.navigation.navigate('horoscopeinfo')}>

                        <Image style={{ top:7,marginLeft:30,}} source={require('./images/aquarius.png')}>
                        </Image>
                        <Text style={styles.cardHeader} onPress={()=> this.props.navigation.navigate('horoscopeinfo')}> AQUARIUS</Text>

                    </View>
                    <View style={styles.card} onPress={()=> this.props.navigation.navigate('horoscopeinfo')}>

                        <Image style={{ top:7,marginLeft:30,}} source={require('./images/pisces.png')}>
                        </Image>
                        <Text style={styles.cardHeader} onPress={()=> this.props.navigation.navigate('horoscopeinfo')}> PISCES</Text>

                    </View>



                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: '#011638',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        color: 'white',
    },
    instructions: {
        textAlign: 'center',
        color: 'white',
        marginBottom: 5,
    },
    header: {
        flex:1/10,
        height: 20,
        borderBottomColor: '#6369D1',
        borderBottomWidth:1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text:{
        fontSize: 25,
        color:'#6369D1',
    },
    cardHeader:{
        fontSize: 30,
        color:'#FAF3F4',
        // textAlign: 'center',
        // justifyContent: 'center',
        // flexDirection: 'column',
        top:23,
        marginRight:30,

    },
    card:{
        backgroundColor:'#2F405C',
        height: 80,
        // marginLeft: 10,
        // marginRight: 10,
        margin: 10,
        flexDirection: 'row',
        // textAlign: 'center',
        // alignItems: 'space-between',
        justifyContent: 'space-between',

    }
});

export default withNavigation(horoscope)
