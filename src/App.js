import CounterViews from "./Features/counter/CounterViews";
import PostViews from "./Features/posts/PostViews";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>development toolkit</h1>
      <CounterViews />
      <PostViews />
    </div>
  );
}

export default App;
