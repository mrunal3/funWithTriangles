import { Redirect, Route, Switch } from "react-router-dom";
import Quiz from "./components/Quiz";
import TriangleArea from "./components/TriangleArea";
import Hypotenuse from "./components/Hypotenuse";
import CheckTriangle from "./components/CheckTriangle";

const routes = [
  {
    path: "/quiz",
    name: "quiz",
    component: Quiz,
  },
  {
    path: "/triangle_area",
    name: "triangle_area",
    component: TriangleArea,
  },
  {
    path: "/hypotenuse",
    name: "hypotenuse",
    component: Hypotenuse,
  },
  {
    path: "/check_triangle",
    name: "check_triangle",
    component: CheckTriangle,
  },
];

const RouteWithSubRoutes = (route) => {
  return (
    <Route
      path={route.path}
      name={route.name}
      render={(props) => <route.component {...props} routes={route.routes} />}
    />
  );
};

const Routes = () => {
  return (
    <Switch>
      {routes.map((route, i) => (
        <RouteWithSubRoutes key={i} {...route} />
      ))}
      <Redirect from="/funWithTriangles" to="/check_triangle" />
      <Redirect from="/" to="check_triangle" />
    </Switch>
  );
};

export default Routes;
