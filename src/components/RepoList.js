import React from 'react';
import { FlatList, StyleSheet } from 'react-native';

import RepoItem from './RepoItem';

// const ds = new FlatList.DataSource({ rowHasChanged: (r1, r2) => r1.id !== r2.id });

const RepoList = (props) => {
  const { repos, selected, selectRepo } = props;
  // const dataSource = ds.cloneWithRows(repos);

  return (
    <FlatList
      data={repos}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item: repo }) => (
        <RepoItem
          isSelected={repo.id === selected}
          repo={repo}
          selectRepo={selectRepo}
        />
      )}
      extraData={selected}
      contentContainerStyle={styles.list}
    />
  );
};

export const styles = StyleSheet.create({
  list: {
    paddingVertical: 40, // (48 - 8 of item padding)
  },
});

export default RepoList;
