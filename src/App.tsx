import "styles/global.scss";
import { useRoutes } from "react-router-dom";

import routes from "routes";

function App(): JSX.Element {
  const content = useRoutes(routes);

  return <div className="App">{content}</div>;
}

export default App;
