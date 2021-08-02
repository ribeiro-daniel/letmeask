import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AuthContextProvider } from "./contexts/AuthContextProvider";
import { AdminRoom } from "./pages/AdminRoom";

/** Pages */
import { Home } from "./pages/Home";
import { NewRoom } from "./pages/NewRoom";
import { Room } from "./pages/Room";

function App() {
  return (
    <Router>
      <AuthContextProvider>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/rooms/new" component={NewRoom} />
          <Route path="/rooms/:id" component={Room} />
          <Route path="/admin/rooms/:id" component={AdminRoom} />
        </Switch>
      </AuthContextProvider>
    </Router>
  );
}

export default App;
