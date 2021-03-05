import './App.css';
import MyComponent from './components/MyComponent';
import Display from './components/Display';
import StateProvider from './context/StateProvider';

function App() {
  return (
    <div className="App">
      <StateProvider>
        <MyComponent />
        <Display />
      </StateProvider>
    </div>
  );
}

export default App;
