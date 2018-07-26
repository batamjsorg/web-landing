import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'footer': {
    'height': [{ 'unit': 'px', 'value': 200 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'bottom': [{ 'unit': 'px', 'value': 0 }],
    'width': [{ 'unit': '%H', 'value': 1 }],
    'background': '#FAF1DB',
    // For browsers that do not support gradients
    'background': 'linear-gradient(to right, #FAF1DB, #F68B55)',
    // Standard syntax (must be last)
    'color': 'white'
  }
});
