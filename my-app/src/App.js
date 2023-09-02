import css from './App.module.css';
import Sidebar from './components/Sidebar.js'
import NavBarForm from './components/NavBarForm.js'
import ContentHooks from './components/ContentHooks.js'

function App() {
  return (
    <div className={css.App}>
      <NavBarForm />
      <Sidebar />
      <ContentHooks />
    </div>
  );
}

export default App;