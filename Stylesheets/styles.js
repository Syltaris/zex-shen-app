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
  text_shoppingCartItemName: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  text_shoppingCartItemPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'right',
  },
  text_recipesDescription: {
    fontSize: 16,
    marginLeft: 10,
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
      width: '33%',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: Colors.PRIMARY,
    },
    container_sliders: {
      flex: 0.7, 
      width: '100%', 
      justifyContent: 'center',
      alignItems: 'center'
    },
    container_shoppingCart: {
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'center',
      width: '100%',
      height: '100%',
    },
    container_recipes: {
      flex: 1,
      width: '100%',
      padding: 20,
      backgroundColor: Colors.SECONDARY,
      alignItems: 'center',
      backgroundColor: Colors.BACKGROUND,
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
  card_shoppingCart: {
    width: '95%',
    justifyContent: 'center',
  },
    card_shoppingCartItem: {
      width: '100%',
      margin: 0,
    },
  card_recipesItem: {
    width: '90%',
    justifyContent: 'center',
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
  }
});