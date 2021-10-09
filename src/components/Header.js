import { Link, useHistory } from "react-router-dom";
import { useEffect, useState } from "react";

const Header = () => {
  const history = useHistory();
  const [activeTab, setActiveTab] = useState("");

  useEffect(() => {
    history.listen((location, action) => {
      setActiveTab(location.pathname);
    });
    setActiveTab(history.location.pathname);
  }, []);

  return (
    <header>
      <h1>fun with triangles</h1>
      <nav>
        <Link
          to={"/check_triangle"}
          selected={activeTab === `/check_triangle`}
          className={activeTab === `/check_triangle` ? "active_tab" : ""}
        >
          Is Triangle?
        </Link>
        <Link
          to={"/quiz"}
          selected={activeTab === `/quiz`}
          className={activeTab === `/quiz` ? "active_tab" : ""}
        >
          Quiz
        </Link>
        <Link
          to={"/hypotenuse"}
          selected={activeTab === `/hypotenuse`}
          className={activeTab === `/hypotenuse` ? "active_tab" : ""}
        >
          Hypotenuse
        </Link>
        <Link
          to={"/triangle_area"}
          selected={activeTab === `/triangle_area`}
          className={activeTab === `/triangle_area` ? "active_tab" : ""}
        >
          Area of Triangle
        </Link>
      </nav>
    </header>
  );
};
export default Header;
