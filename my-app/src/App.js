import css from './App.module.css';
import Sidebar from './components/Sidebar.js'
// import NavBarSimple from './components/NavBarSimple.js'
import NavBarForm from './components/NavBarForm.js'
import Content from './components/Content.js'

function App() {
  return (
    <div className={css.App}>
      {/* <NavBarSimple /> */}
      <NavBarForm />
      <Sidebar />
      <Content />
    </div>
  );
}

export default App;