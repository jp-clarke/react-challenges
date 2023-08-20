import css from './App.module.css';
import Sidebar from './components/Sidebar.js'
import NavBarSimple from './components/NavBarSimple.js'

function App() {
  return (
    <div className={css.App}>
      <NavBarSimple />
      <Sidebar />
    </div>
  );
}

export default App;