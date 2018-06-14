import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactNativeAlphabetListView from 'react-native-alphabet-list-view';
import style from './components/style';
import ListItem from './components/list-item';
import ListHeader from './components/list-header';
import SectionItem from './components/section-item';


export default class extends Component {
  static propTypes = {
    items: PropTypes.array
  };
  static defaultProps = {
    items: []
  };

  render() {
    const { items } = this.props;
    return (
      <ReactNativeAlphabetListView
        data={items}
        cell={ListItem}
        cellHeight={44}
        sectionHeaderHeight={44}
        sectionListStyle={style.section.container}
        sectionListItem={SectionItem}
        sectionHeader={ListHeader}
      />
    );
  }
}
