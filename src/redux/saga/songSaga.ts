import axios from "axios";
import { FETCH_SONGS,SONGS_LOADER, SONGS_ERROR } from "../slice/songSlice";
import { call, put, takeEvery } from "redux-saga/effects";

type Song = {
   
    title: string,
    artist: string,
    album: string,
    gener: string,
    year: number
}

const  BASE_URL = "http://localhost:5000/api/v1";

function* fetchSongs() {
  try {
        yield put({
          type: SONGS_LOADER
        })
    const res: Song[] = yield call(axios.get, `${BASE_URL}/songs`);

    yield put({
      type: FETCH_SONGS,
      payload: res?.data
      
    });
  } catch (error) {
    console.log(error);
    yield put({type: SONGS_ERROR,payload:error?.message})
  }
}
function* addSong(action:any){
  try {
    console.log("sumit --- >",action.payload);
     const {data} = yield call(axios.post,`${BASE_URL}/addsong`,action.payload)
    console.log( "at addsong ", data);

  }
   catch (error) {
    console.log(error.message);
  }

}
function* rootSaga() {
    yield takeEvery('FETCH_SONGS', fetchSongs)
    yield takeEvery('ADD_SONG',addSong)
}

export default rootSaga;