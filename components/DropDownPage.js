import { Box } from 'native-base';
import React, { useState } from 'react';
  import { StyleSheet } from 'react-native';
  import { Dropdown } from 'react-native-element-dropdown';
import { SIZE } from '../constants';


  const data = [
    { label: 'Patient Continuation Form', value: 4 },
    { label: 'Patient Form', value: 5 },
    { label: 'Clinical Doctor white page', value: 0 },
    { label: 'CASA Record Form', value: 1 },
    { label: 'Clinical Assessment page', value: 2 },
    { label: 'DFRPatient', value:3 },
   
  ];

  const DropDownPage = ({value,setValue}) => {
    return (
     <Box shadow={2}>
       <Dropdown
        style={styles.dropdown}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={data}
        showsVerticalScrollIndicator={false}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder="Choose Form"
        searchPlaceholder="Search ..."
        value={value}
        onChange={item => {
          setValue(item.value);
        }}
        // renderLeftIcon={() => (
        //   <AntDesign style={styles.icon} color="black" name="Safety" size={20} />
        // )}
        containerStyle={styles.containerStyle}
      />
     </Box>
    );
  };

  export default DropDownPage;
  const styles = StyleSheet.create({
    dropdown: {
      margin: 20,
      height: 40,
      width:330,
      backgroundColor:"white",
      borderRadius:5,
      paddingHorizontal:10,
    },
    icon: {
      marginRight: 5,
    },
    placeholderStyle: {
      fontSize: SIZE.h3,
    },
    selectedTextStyle: {
      fontSize:  SIZE.h3,
    },
    iconStyle: {
      width: 20,
      height: 20,
    },
    inputSearchStyle: {
      height: 40,
      fontSize:  SIZE.h3,
    //   backgroundColor:'red',
      borderRadius:10,

    },containerStyle:{
        // backgroundColor:'red',
        borderRadius:20,
    }
  });