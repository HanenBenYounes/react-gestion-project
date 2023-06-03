import { useState, useEffect } from "react";
import { SlClose } from "react-icons/sl";
import { BsPen } from "react-icons/bs";

const Edit = ({ data, showModal, setShowModal }) => {
  const [info, setInfo] = useState({});
  const [image, setImage] = useState("");

  const handleChange = (e) => {
    console.log("handle change", e.target.files);
    setImage(e.target.files[0]);
  };
  const handleClose = (e) => {
    console.log(e.target.id);
    if (e.target.id === "wrapper") setShowModal(false);
  };
  useEffect(() => {
    if (data || data !== {}) {
      setInfo({
        username: data.username,
        password: data.password,
        phone: data.phone,
        email: data.email,
        location: data.location,
        pic: data.pic,
      });
    } else {
      setInfo({
        username: "username",
        password: "password",
        phone: "phone",
        email: "email",
        location: "location",
        pic: "pic",
      });
    }
  }, []);
  if (!showModal) return null;
  console.log(showModal);
  console.log("info", info);
  return (
    <div
      className="fixed flex justify-center items-center inset-0 bg-black bg-opacity-25 backdrop-blur-sm"
      onClick={handleClose}
      id="wrapper"
    >
      <div className="flex flex-col w-[1000px]">
        <button
          className="text-white text-xl place-self-end mb-2"
          onClick={() => setShowModal(false)}
        >
          <SlClose />
        </button>
        <div className="flex justify-center items-center bg-white p-0 flex-row rounded-2xl">
          <div className={"w-full  h-full p-10"}>
            <div className="w-full m-2">
              <div className="w-full m-2">
                <div class="avatar-upload">
                  <div class="avatar-edit">
                    <input
                      type="file"
                      onChange={handleChange}
                      id="imageUpload"
                      accept=".png, .jpg, .jpeg"
                    />
                    <label
                      htmlFor="imageUpload"
                      className="bg-light border border-2 ps-1 rounded-circle"
                    >
                      <BsPen />{" "}
                    </label>
                  </div>
                  <div class="avatar-preview">
                    <img
                      className="border border-4"
                      id="imagePreview"
                      src={image ? URL.createObjectURL(image) : <p>loading</p>}
                    />
                  </div>
                </div>
              </div>
              <div className="relative m-2">
                <input
                  type="text"
                  id="username"
                  className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-2 border-gray-200 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                />
                <label
                  htmlFor="username"
                  className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                >
                  {info ? info.username : <p> username</p>}
                </label>
              </div>
              <div className="relative m-2">
                <input
                  type="number"
                  id="phone"
                  className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-2 border-gray-200 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                />
                <label
                  htmlFor="phone"
                  className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                >
                  {info ? info.phone : <p> phone</p>}
                </label>
              </div>
              <div className="relative m-2">
                <input
                  type="email"
                  id="email"
                  className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-2 border-gray-200 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                />
                <label
                  htmlFor="email"
                  className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                >
                  {info ? info.email : <p> email</p>}
                </label>
              </div>
              <div className="relative m-2">
                <input
                  type="text"
                  id="location"
                  className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-2 border-gray-200 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                />
                <label
                  htmlFor="location"
                  className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                >
                  {info ? info.location : <p> location</p>}
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Edit;
