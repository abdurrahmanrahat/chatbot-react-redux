import { Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-semibold mb-4">Enter into Student Info System</h1>
      <Link to="/chatbot">
        <button className="px-4 py-2 bg-black text-white rounded-md">Enroll Now!</button>
      </Link>
    </div>
  );
}

export default App;
