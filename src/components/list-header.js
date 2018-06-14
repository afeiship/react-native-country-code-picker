import { View } from 'react-native';
import style from './style';

export default class extends Component {
  render() {
    const { title } = this.props;
    return (
      <View style={style.header.view}>
        <Text style={style.header.text}>{ title }</Text>
      </View>
    );
  }
}
