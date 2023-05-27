import BlogsList from "./components/BlogsList";
import BlogsProvider from "./components/BlogsContext";

function App() {

//	const [someState, setSomeState] = useState("")

  return (
    <div className="App">

			<BlogsProvider>
				<BlogsList />
			</BlogsProvider>

    </div>
  );
}

export default App;