import './App.css';
// component
import LeftAlbumTool from './component/LeftAlbumTool';
import RightAlbumTool from './component/RightAlbumTool';
// style
import styles from '../src/component/component.module.css'

// img
import ring from '../src/assets/icons/albumRingImg.png';

function App() {
  const num = 25;
  return (
    <div className="App">
      <LeftAlbumTool />
      <div className={styles.albumRings}>
          {Array.from({length : num}).map((_, i) => (
            <img key={i} className={styles.ring} src={ring} />
          ))}
      </div>
      <RightAlbumTool />
    </div>
  );
}

export default App;
