import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  calendarContainer: {
    borderRadius: 10,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    padding: 8,
  },
  TextStyle: {
    fontSize: 18,
    fontWeight: '500',
    fontStyle: 'normal',
    lineHeight: 24,
    letterSpacing: -0.17,
    textAlign: 'center',
    marginTop: 20,
  },
  yearSelectedStyle: {
    height: 60,
    width: 60,
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    fontSize: 21,
    textAlign: 'center',
    paddingVertical: 10,
    marginRight: 10,
  },
  monthElement: {
    height: 40,
    width: 40,
    textAlign: 'center',
    paddingVertical: 10,
    marginHorizontal: 5,
    borderRadius: 25,
    marginVertical: 5,
  },
  marginVertical20: { marginVertical: 20 },
  monthYearContainer: {
    alignSelf: 'center',
    width: 300,
    paddingHorizontal: 20,
  },
  yearElement: {
    width: 60,
    alignSelf: 'center',
    textAlign: 'center',
    paddingVertical: 10,
    marginRight: 10,
    borderRadius: 25,
  },
  marginHorizontal30: { marginHorizontal: 30 },
  monthView: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginHorizontal: 20,
  },
  dateView: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  dateElement: {
    justifyContent: 'center',
    borderRadius: 25,
    padding: 3,
    height: 40,
    width: 40,
  },
  textAlignCenter: {
    textAlign: 'center',
  },
  arrowIcon: {
    height: 32,
    width: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
  alignItemsCenter: { alignItems: 'center' },
  alignItemsStart: { alignItems: 'flex-start' },
  dayMonthView: {
    height: 40,
    flexDirection: 'row',
    paddingHorizontal: 30,
    alignItems: 'center',
    marginBottom: 16,
  },
  activeMonthTitle: {
    flex: 2,
    textAlign: 'center',
    fontSize: 16,
  },
});

export default styles;
