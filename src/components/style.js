import { StyleSheet } from 'react-native';

export default {
  header: {
    view: {
      height: 44,
      paddingLeft: 14,
      justifyContent: 'center',
      backgroundColor: '#F2F2F2'
    },
    text: {
      fontWeight: '800',
      fontSize: 16
    }
  },
  section: {
    container: {
      alignItems: 'center',
      justifyContent: 'center',
      right: 0,
      backgroundColor: '#eee',
      width: 26
    },
    item: {
      color: '#247DE4',
      fontSize: 14
    }
  },
  cell: {
    view: {
      height: 44,
      paddingLeft: 14,
      justifyContent: 'center',
      backgroundColor: '#FFF',
      borderStyle: 'solid',
      borderBottomColor: '#CCC',
      borderBottomWidth: StyleSheet.hairlineWidth
    },
    text: {}
  }
};
