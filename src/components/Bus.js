import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import { TouchableOpacity } from 'react-native';


const BusPage = () => {
  const [fromValue, setFromValue] = useState('');
  const [toValue, setToValue] = useState('');
  //const [dateValue, setDateValue] = useState(new Date());
  const [timeValue, setTimeValue] = useState('');
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleFromValueChange = (value) => {
    setFromValue(value);
  };

  const handleToValueChange = (value) => {
    setToValue(value);
  };

  const handleDateChange = (event, selectedDate) => {
    setShowDatePicker(false);
    const currentDate = selectedDate || date;
    setDate(currentDate);
  };

  const handleTimeValueChange = (value) => {
    setTimeValue(value);
  };

  // const showDatePicker = () => {
  //   return (
  //     <DatePicker
  //       value={dateValue}
  //       mode="date"
  //       onChange={handleDateValueChange}
  //       display="default"
  //     />
  //   );
  // };

  return (
    <View style={styles.container}>
      <View style={styles.dropdownContainer}>
        <Text style={styles.label}>From</Text>
        <Picker
          selectedValue={fromValue}
          onValueChange={handleFromValueChange}
          style={styles.dropdown}
        >
          <Picker.Item label="Select From" value="" />
          <Picker.Item label="Arbutus" value="Arbutus" />
          <Picker.Item label="Arundel" value="Arundel" />
          <Picker.Item label="BWI MARC" value="BWI MARC" />
          <Picker.Item label="Catonsville" value="Catonsville" />
          <Picker.Item label="Downtown" value="Downtown" />
          <Picker.Item label="Paradise" value="Paradise" />
          <Picker.Item label="Route 40" value="Route 40" />
        </Picker>
      </View>
      <View style={styles.dropdownContainer}>
        <Text style={styles.label}>To</Text>
        <Picker
          selectedValue={toValue}
          onValueChange={handleToValueChange}
          style={styles.dropdown}
        >
          <Picker.Item label="Select To" value="" />
          <Picker.Item label="Arbutus" value="Arbutus" />
          <Picker.Item label="Arundel" value="Arundel" />
          <Picker.Item label="BWI MARC" value="BWI MARC" />
          <Picker.Item label="Catonsville" value="Catonsville" />
          <Picker.Item label="Downtown" value="Downtown" />
          <Picker.Item label="Paradise" value="Paradise" />
          <Picker.Item label="Route 40" value="Route 40" />
        </Picker>
      </View>
      <View style={styles.container}>
      <TouchableOpacity onPress={() => setShowDatePicker(true)}>
        <Text style={styles.label}>Select Date</Text>
        <Text style={styles.date}>{date.toLocaleDateString()}</Text>
      </TouchableOpacity>
      {showDatePicker && (
        <DateTimePicker
          value={date}
          mode="date"
          is24Hour={true}
          display="default"
          onChange={handleDateChange}
        />
      )}
    </View>
      <View style={styles.dropdownTime}>
        <Text style={styles.label}>Time</Text>
        <Picker
          selectedValue={timeValue}
          onValueChange={handleTimeValueChange}
          style={styles.dropdown}
        >
          <Picker.Item label="Select Time" value="" />
          <Picker.Item label="9:00 AM" value="9:00 AM" />
          <Picker.Item label="10:00 AM" value="10:00 AM" />
          <Picker.Item label="11:00 AM" value="11:00 AM" />
          <Picker.Item label="12:00 PM" value="12:00 PM" />
          <Picker.Item label="1:00 PM" value="1:00 PM" />
          <Picker.Item label="2:00 PM" value="2:00 PM" />
          <Picker.Item label="3:00 PM" value="3:00 PM" />
          <Picker.Item label="4:00 PM" value="4:00 PM" />
          <Picker.Item label="5:00 PM" value="5:00 PM" />
          <Picker.Item label="6:00 PM" value="6:00 PM" />
          <Picker.Item label="7:00 PM" value="7:00 PM" />
        </Picker>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  dropdownContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  dropdownTime: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 500,
  },
  label: {
    fontSize: 16,
    marginRight: 10,
  },
  dropdown: {
    flex: 1,
  },
  datePickerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
});

export default BusPage;   