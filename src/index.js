import React, { Component } from 'react';
import ReactNativeAlphabetListView from 'react-native-alphabet-list-view';
import style from './components/style';
import ListItem from './components/list-item';
import ListHeader from './components/list-header';
import SectionItem from './components/section-item';


export default class extends Component {
  render() {
    return (
      <ReactNativeAlphabetListView
        cell={ListItem}
        cellHeight={44}
        sectionHeaderHeight={44}
        sectionListStyle={style.section.container}
        sectionListItem={SectionItem}
        sectionHeader={ListHeader}
        {...this.props}
      />
    );
  }
}
