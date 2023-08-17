import css from './App.module.css';
import Sidebar from './components/Sidebar.js'

function App() {
  return (
    <div className={css.App}>
      <Sidebar />
    </div>
  );
}

export default App;