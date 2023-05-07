import './app.css';

const name = 'name'
const getAge = () => {
  return 18
}

// 列表渲染
const songs = [
  { id: 1, name: '痴心绝对' },
  { id: 2, name: '像我这样的人' },
  { id: 3, name: '南山南' }
]



const style = {
  color: 'red',
  fontSize: '20px'
}


function BasicTest() {
  return (
    <div className="App">
      <span style={style}>this is span</span>
      <span className='active'>this is span</span>

      <ul>
        { songs.map(song => <li key={song.id}>{ song.name }</li>) }
      </ul>

      <br />

      { name }
      { getAge() }
    </div>
  );
}

export default BasicTest;
