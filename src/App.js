import Info from './components/info'
import './App.css'

function App() {
  return (
    <div className="App">
      <Info />
      <div className="info">
        {/* класс не применися т.к. не было 
        импорта css файла в данный модуль */}
        <h1>App component heading</h1>
        {/* оба компонента будут зелеными т.к. в info css мы обращаемся к h1 */}
        <h2>Heading in the App component</h2>
        {/* самое смешное что наш стиль для h2 из файла info.modules 
        применится  т.к. мы используем селектор по
        html тегу*/}
        <button className="my-button">App component button</button>
        {/* Так как мы привязали Info.css к файлу Info.js наш файл со с
      тилями привязался глобально и теперь мы можем использовать их везде */}
      </div>
    </div>
  )
}

export default App
