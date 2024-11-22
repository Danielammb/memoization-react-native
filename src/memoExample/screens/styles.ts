import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  counterContainer: {
    height: 160,
  },
  counterStatus: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  contentContainer: {
    //flex: 1,
  },
  text: {
    color: 'black',
    fontSize: 26,
    fontWeight: 'bold',
  },
  plusButton: {
    height: 48,
    width: 48,
    borderRadius: 16,
    backgroundColor: '#d4fc3c',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    marginLeft: 16,
    marginTop: 16,
  },
  plusText: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
