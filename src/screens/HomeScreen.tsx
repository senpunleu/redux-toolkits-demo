import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from '../hooks/reduxHook';
import {handleFetchNews} from '../redux/newsRedux/actions';

const HomeScreen = () => {
  const dispatch = useAppDispatch();
  const news = useAppSelector(state => state.news);

  useEffect(() => {
    dispatch(handleFetchNews());
  }, []);
  const _renderItem = ({item, index}: any) => {
    return (
      <View
        style={{
          paddingBottom: 15,
          backgroundColor: '#fff',
          marginVertical: 10,
          borderRadius: 10,
        }}>
        <Image
          source={{uri: item.thumbnail}}
          style={{
            height: 200,
            width: '100%',
            backgroundColor: '#ddd',
            borderRadius: 10,
          }}
        />
        <Text
          style={{
            margin: 15,
            marginBottom: 0,
          }}>
          {item.title}
        </Text>
      </View>
    );
  };

  return (
    <FlatList
      style={{
        padding: 15,
        height: '100%',
        backgroundColor: '#f6f6f6',
      }}
      data={news.loading ? [] : news.data.data}
      renderItem={_renderItem}
      ListEmptyComponent={() => {
        return (
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text>No data found!</Text>
          </View>
        );
      }}
    />
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  button: {
    height: 50,
    width: '48%',
    backgroundColor: '#5794c2',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
