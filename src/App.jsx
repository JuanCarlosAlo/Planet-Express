import { BrowserRouter } from "react-router-dom";
import Header from "./components/header/Header";
import Router from "./router/Router";
import { GlobalStyle } from "./styles/globalStyles";

const App = () => {
	return (
		<>
		<BrowserRouter>
			<GlobalStyle/>
			<Header/>
			<Router/>
		</BrowserRouter>
		</>
	)
};

export default App;
