import React,{ useCallback,useState } from 'react';
import { Text, View, ScrollView, TextInput, Button, StatusBar} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import RadioButton from './components/RadioButton';
import Header from './components/Header';
import Footer from './components/Footer';
import styles from './style/style';

export default function App() {
  const [weight, setWeight] = useState(0);
  const [BAL, setBAL] = useState(0);
  const [gender, setGender] = useState('male');

  const genders = [
    {
      label: "Male",
      value: 'male',
    },
    {
      label: "Female",
      value: 'female',
    },
  ];

  const [bottleOpen, setBottleOpen] = useState(false);
  const [bottleValue, setBottleValue] = useState(3);
  const [bottleItems, setBottleItems] = useState([
    {label: '1 bottle',value: 1},
    {label: '2 bottles',value: 2},
    {label: '3 bottles',value: 3},
    {label: '4 bottles',value: 4},
    {label: '5 bottles',value: 5},
  ]);

  const [timeOpen, setTimeOpen] = useState(false);
  const [timeValue, setTimeValue] = useState(1);
  const [timeItems, setTimeItems] = useState([
    {label: '1 hour',value: 1},
    {label: '2 hours',value: 2},
    {label: '3 hours',value: 3},
    {label: '4 hours',value: 4},
    {label: '5 hours',value: 5},
  ]);

  DropDownPicker.setListMode("SCROLLVIEW");

  const onBottleOpen = useCallback(() => {
    setTimeOpen(false);
  }, []);

  const onTimeOpen = useCallback(() => {
    setBottleOpen(false);
  }, []);

  function calculate() {
    let result = 0;
    const litres = bottleValue * 0.33;
    const grams = litres * 8 * 4.5;
    const burning = weight / 10;
    const gramsL = grams - burning * timeValue;
     if (gender === 'male') {
       result = gramsL / (weight * 0.7);
     } else {
       result = gramsL / (weight * 0.6);
     };

     if (result < 0) {
       result = 0;
     };

     if (!weight) {
      alert(
        "Please enter your weight.",
      );
      result = 0;
    }
    setBAL(result);
  
  }

  function getTextColor() {
    if(BAL < 0.3) {
      return styles.resultGreen;
    } else if (0.6 > BAL > 0.3) {
      return styles.resultYellow;
    } else if (BAL > 0.6) {
      return styles.resultRed;
    } 
  }


  return (
    <ScrollView style={styles.container}>
      <StatusBar barStyle='dark-content'></StatusBar>
      <Header/>
      <Text style={styles.title}>Weight</Text>
      <TextInput onChangeText={text => setWeight(text)} keyboardType='decimal-pad' style={styles.input} placeholder="Your weight in kilograms"></TextInput>
      <Text style={styles.title}>Bottles</Text>
      <View style={{zIndex: 10}}>
        <DropDownPicker
        open={bottleOpen}
        onOpen={onBottleOpen}
        value={bottleValue}
        items={bottleItems}
        setOpen={setBottleOpen}
        setValue={setBottleValue}
        setItems={setBottleItems}
        style={styles.picker}
        />
      </View>
      <Text style={styles.title}>Time</Text>
      <View style={{zIndex: 9}}>
      <DropDownPicker
        open={timeOpen}
        onOpen={onTimeOpen}
        value={timeValue}
        items={timeItems}
        setOpen={setTimeOpen}
        setValue={setTimeValue}
        setItems={setTimeItems}
        style={styles.picker}
      />
      </View>
      <Text style={styles.title}>Gender</Text>
      <RadioButton genders={genders} onPress={(value) => setGender(value)}/>
      <Text style={getTextColor()}>{BAL.toFixed(2)}</Text>
      <View style={styles.button}>
        <Button title='Calculate' onPress={calculate} color='#fff'></Button>
      </View>
      <Footer/>
    </ScrollView>
  );
}


