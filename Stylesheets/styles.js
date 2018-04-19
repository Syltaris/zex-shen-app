import { StyleSheet } from 'react-native';

export const Colors = {
  'PRIMARY': '#203040',
  'SECONDARY': '#3D9970',
  'BACKGROUND' : '#F5FCFF',
  'FONT_GREY' : '#333333',
  'ICON_PRIMARY' : "#FFF",
  'TRANSPARENT_BLACK': "rgba(0,0,0,0.5)"
}

export default styles = StyleSheet.create({
  text_header: {
    fontSize: 18,
    fontWeight: 'bold',
    margin: 10,
  },
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.BACKGROUND,
  },
    container_drawerItems: {
      width: '100%',
    },
    container_bottomNav:{
      flex: 0.10,
      flexDirection: 'row',
      width: '100%',
      backgroundColor: Colors.PRIMARY,
    },
    container_bottomNavButtons: {
      width: '25%',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: Colors.PRIMARY,
    },
  containerReverse: {
      flex: 1,
      width: '100%',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      alignItems: 'center',
      backgroundColor: Colors.BACKGROUND,
  },
  card_profileItem: {
    width: '92.5%',
    flexDirection: 'row',
  },
  modal_transparentBlack: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.TRANSPARENT_BLACK,
  },
  drawer_top: {
    width: '100%',
    height: 150,
    backgroundColor: Colors.PRIMARY,
  },
  button_fullWidth: {
    width: '100%',
    padding: 20,
    backgroundColor: Colors.SECONDARY,
    alignItems: 'center',
    justifyContent: 'center'
  },
  login_container_end: {
    flex: 1,
    height: 500,
    justifyContent: 'space-evenly',
    backgroundColor: Colors.PRIMARY,
    alignItems: 'center',
  },
    login_input_field_group: {
      width: '100%'
    },
    login_input_field: {
      backgroundColor: 'white',
      width: '100%'
    },
  logo_container: {
    alignItems: 'center',
    backgroundColor: 'white',
    width: 270,
    height: 270,
    borderRadius: 135,
  },
    logo_style: {
      width: 200,
      height: 230,
      margin: 25,
    },
  login_button_container: {
    width: '100%',
    backgroundColor: Colors.PRIMARY,
  },    
    login_button_style:{
      marginTop: 5,
      marginBottom: 5,
      backgroundColor: "#2070E8",
      borderRadius: 35,
    },
});