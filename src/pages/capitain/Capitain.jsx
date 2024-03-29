import { useEffect, useState } from "react";
import axios from "../../api/axios";
import Edit from "../../components/Edit";

const Capitain = () => {
  const [captains, setCaptains] = useState([]);
  const [capToEdit, setCapToEdit] = useState(undefined);
  const [showModal, setShowModal] = useState(false);
  const [captain, setCaptain] = useState({
    username: undefined,
    password: undefined,
    phone: undefined,
    email: undefined,
    location: undefined,
    pic: undefined,
  });
  const handleChange = ({ currentTarget: input }) => {
    setCaptain({ ...captain, [input.name]: input.value });
  };
  const handleEditModal = (cap) => {
    if (cap) {
      setCapToEdit(cap);
      setShowModal(true);
    }
    setShowModal(true);
  };
  const handledelete = (id) => {
    console.log(id);
    axios
      .delete(`delete-capitain/${id}`)
      .then((res) => {
        alert(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    axios.get("fetch-capitain").then((res) => {
      setCaptains(res.data);
    });
  }, []);
  return (
    <div className="flex flex-col items-end">
      <button
        className="relative inline-flex items-center justify-center p-0.5 mb-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-black focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 m-8 mr-5"
        onClick={handleEditModal}
      >
        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:transparent rounded-md group-hover:bg-opacity-0">
          Add Captain
        </span>
      </button>
      <div className="overflow-hidden w-11/12 rounded-lg border border-gray-200 shadow-md m-5">
        <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
          <thead class="bg-gray-50">
            <tr>
              <th scope="col" class="px-6 py-4 font-medium text-gray-900">
                Name
              </th>
              <th scope="col" class="px-6 py-4 font-medium text-gray-900">
                Phone
              </th>
              <th scope="col" class="px-6 py-4 font-medium text-gray-900">
                location
              </th>

              <th scope="col" class="px-6 py-4 font-medium text-gray-900"></th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-100 border-t border-gray-100">
            {captains?.map((cap, i) => {
              return (
                <>
                  <tr class="hover:bg-gray-50">
                    <th class="flex gap-3 px-6 py-4 font-normal text-gray-900">
                      <div class="relative h-10 w-10">
                        <img
                          class="h-full w-full rounded-full object-cover object-center"
                          src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                          alt=""
                        />
                        <span class="absolute right-0 bottom-0 h-2 w-2 rounded-full bg-green-400 ring ring-white"></span>
                      </div>
                      <div class="text-sm">
                        <div class="font-medium text-gray-700">
                          {cap.username}
                        </div>
                        <div class="text-gray-400">{cap.email}</div>
                      </div>
                    </th>
                    <td class="px-6 py-4">{cap.phone}</td>
                    <td class="px-6 py-4">
                      <span class="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-green-600">
                        <span class="h-1.5 w-1.5 rounded-full bg-green-600"></span>
                        {cap.location}
                      </span>
                    </td>
                    <td class="px-6 py-4">
                      <div class="flex justify-end gap-4">
                        <a
                          x-data="{ tooltip: 'Delete' }"
                          href="#"
                          onClick={() => handledelete(cap._id)}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="h-6 w-6"
                            x-tooltip="tooltip"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                            />
                          </svg>
                        </a>
                        <a
                          x-data="{ tooltip: 'Edite' }"
                          href="#"
                          onClick={() => handleEditModal(cap)}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="h-6 w-6"
                            x-tooltip="tooltip"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                            />
                          </svg>
                        </a>
                      </div>
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
      <div>
        <Edit
          data={capToEdit}
          setShowModal={setShowModal}
          showModal={showModal}
        />
      </div>
    </div>
  );
};

export default Capitain;
