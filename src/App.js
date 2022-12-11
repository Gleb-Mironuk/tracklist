import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Search from './components/Search';
import TrackList from './components/TrackList';
import { fetchTracks } from './store/trackSlice';
import './css/style.css';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTracks());
  },[dispatch]);
  return (
    <div className="App">
      <Search/>
      <TrackList/>
    </div>
  );
}

export default App;
