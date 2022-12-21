import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {useAppDispatch, useAppSelector} from '../hooks/reduxHook';
import {handleFetchPhoto} from '../redux/photoRedux/actions';
import {handleFetchAlbum} from '../redux/albumRedux/albumSlice';

const HomeScreen = () => {
  const dispatch = useAppDispatch();
  const photos = useAppSelector(state => state.photos);
  const albums = useAppSelector(state => state.albums);

  const [changeState, setChangeState] = useState('photo');

  const _renderItem = ({item, index}: any) => {
    return (
      <View
        style={{
          paddingBottom: 15,
          backgroundColor: '#fff',
          marginVertical: 10,
          borderRadius: 10,
          marginBottom:
            changeState == 'photo'
              ? photos.data.length - 1 == index
                ? 110
                : 15
              : albums.data.length - 1 == index
              ? 110
              : 15,
        }}>
        <Image
          source={{uri: item.url}}
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
          {item.url}
        </Text>
      </View>
    );
  };

  return (
    <View>
      <FlatList
        style={{
          padding: 15,
          height: '100%',
          backgroundColor: '#f6f6f6',
        }}
        data={changeState == 'photo' ? photos.data : albums.data}
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
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          backgroundColor: '#fff',
          padding: 15,
          position: 'absolute',
          bottom: 0,
          width: '100%',
        }}>
        <TouchableOpacity
          onPress={() => {
            setChangeState('album');
            dispatch(handleFetchAlbum());
          }}
          style={styles.button}>
          <Text style={{color: '#fff'}}>Fetch Albums</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setChangeState('photo');
            dispatch(handleFetchPhoto());
          }}
          style={[styles.button, {backgroundColor: '#5772c2'}]}>
          <Text style={{color: '#fff'}}>Fetch Photos</Text>
        </TouchableOpacity>
      </View>
    </View>
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
