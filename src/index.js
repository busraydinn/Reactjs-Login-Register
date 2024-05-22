import ReactDOM from "react-dom/client";
import App from "./App";
function Index()
{
    return(
        <App/>
    )
}
export default Index;
const rooot=ReactDOM.createRoot(document.getElementById("root"));
rooot.render(<Index/>)