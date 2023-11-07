//Still not implemented in real code so please don't remove this file
import { accordionAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(accordionAnatomy.keys);

const baseStyle = definePartsStyle({
  // define the part you're going to style
  colors: {
    background: '#191919',
  },
  container: {
    bg: '#272727',
    borderRadius: '40px', // change the backgroundColor of the container
  },
  button: {
    textColor: 'white',
    fontWeight: '700',
    textSize: '20px',
    alignContent: 'center',
    height: '72px',
    textDecoration: 'none',
    _focus: {
      textDecoration: 'underline',
      textDecorationColor: '#a81f25',
      textDecorationThickness: '2px',
      textUnderlineOffset: '15px',
    },
  },
  panel: {
    textColor: 'white',
    textWeight: '400',
    textSize: '18px',
    alignContent: 'center',
  },
});

export const accordionTheme = defineMultiStyleConfig({ baseStyle });
