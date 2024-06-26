import { Dimensions, StyleSheet, Text, TouchableOpacity } from 'react-native';

export default Button = ({ onPress, text, size, theme }) => {
  const buttonStyles = [styles.button];
  const textStyles = [styles.text];

  if (size === 'double') {
    buttonStyles.push(styles.buttonDouble);
  }

  if (theme === 'secondary') {
    buttonStyles.push(styles.buttonSecondary);
    textStyles.push(styles.textSecondary);
  } else if (theme === 'accent') {
    buttonStyles.push(styles.buttonAccent);
  }

  return (
    <TouchableOpacity style={buttonStyles} onPress={onPress}>
      <Text style={textStyles}>{text}</Text>
    </TouchableOpacity>
  );
};

const screen = Dimensions.get('window');
const buttonWidth = screen.width / 4;

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#333333',
    borderRadius: Math.floor(buttonWidth),
    flex: 1,
    height: Math.floor(buttonWidth - 10),
    justifyContent: 'center',
    margin: 5,
  },
  text: {
    color: '#fff',
    fontSize: 24,
  },
  textSecondary: {
    color: '#060606',
  },
  buttonDouble: {
    alignItems: 'flex-start',
    flex: 0,
    paddingLeft: 40,
    width: screen.width / 2 - 10,
  },
  buttonSecondary: {
    backgroundColor: '#a6a6a6',
  },
  buttonAccent: {
    backgroundColor: '#ffc107',
  },
});
