import { Text, TouchableOpacity } from 'react-native';
import style from './style';


export default class extends Component {
  render() {
    const { countryName, phoneCode } = this.props.item;
    return (
      <TouchableOpacity style={style.cell.view}>
        <Text style={style.cell.text}>{countryName}({phoneCode})</Text>
      </TouchableOpacity>
    );
  }
}
