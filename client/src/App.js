import './App.css';
import MyComponent from './components/MyComponent';
import StateProvider from './context/StateProvider';

function App() {
  return (
    <div className="App">
      <StateProvider>
        <MyComponent />
      </StateProvider>
    </div>
  );
}

export default App;
