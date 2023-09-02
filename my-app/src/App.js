import css from './App.module.css';
import Sidebar from './components/Sidebar.js'
import NavBarForm from './components/NavBarForm.js'
import ContentAPI from './components/ContentAPI.js'

function App() {
  return (
    <div className={css.App}>
      <NavBarForm />
      <Sidebar />
      <ContentAPI />
    </div>
  );
}

export default App;