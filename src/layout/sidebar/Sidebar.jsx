import { useNavigate } from "react-router-dom";
import { arr } from "./data";
const Sidebar = () => {
  const navigatge = useNavigate();
  return (
    <div className="bg-lime-500 text-white h-screen w-60">
      <ul className="mt-12">
        {arr.map((item) => {
          return (
            <li className="p-2">
              <div
                onClick={() => navigatge(item.title)}
                className="hover:bg-lime-600 hover:cursor-pointer rounded p-2"
              >
                <h5>{item.title}</h5>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
