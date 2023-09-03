import css from './App.module.css';
import Sidebar from './components/Sidebar.js'
import NavBarForm from './components/NavBarForm.js'
import ContentAPIHooks from './components/ContentAPIHooks.js'

function App() {
  return (
    <div className={css.App}>
      <NavBarForm />
      <Sidebar />
      <ContentAPIHooks />
    </div>
  );
}

export default App;