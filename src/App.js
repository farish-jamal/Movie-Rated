
import './App.css';
import NavBarTv from './components/NavBarTv';
import SimpleBottomNavigation from './components/NavFooter';

function App() {
  return (
    <>
    <NavBarTv />
    <div className="app">
      <SimpleBottomNavigation />
    </div>
    </>
  );
}

export default App;
