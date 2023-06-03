import { useNavigate } from "react-router-dom";
import { arr } from "./data";
const Sidebar = () => {
  const navigatge = useNavigate();
  return (
    <div className="border-r-2 border-lime-500 text-black h-screen w-40">
      <ul className="mt-12">
        {arr.map((item) => {
          return (
            <li className="p-2">
              <div
                onClick={() => navigatge(item.title)}
                className="hover:bg-lime-500 hover:cursor-pointer hover:text-white rounded p-2"
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
