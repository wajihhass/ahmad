import Counter from './Counter'
//import Todo from './features/todoSlice'       // './Todo'    //import todoReducer from './features/todoSlice' 
import Todo from './Todo'
import './App.css';

function App() {
  return (
    <div className="App">
      <Counter />
      <Todo />
    </div>
  );
}

export default App;