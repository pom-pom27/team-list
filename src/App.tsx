import "./app.scss";
import Homepage from "./pages/homepage/Homepage";
interface IApp {}

const App = ({}: IApp) => {
  return (
    <div className="app">
      <Homepage />
    </div>
  );
};

export default App;
