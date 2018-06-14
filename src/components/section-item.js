import { Text } from 'react-native';
import style from './style';

export default class extends Component {
  render() {
    const { title } = this.props;
    return (
      <Text style={style.section.item}>{title}</Text>
    );
  }
}
