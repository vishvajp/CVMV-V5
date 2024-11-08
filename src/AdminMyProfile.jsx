import React, { useEffect, useState } from "react";
import "./AdminMyProfile.css";
import man from "./image/man.jpg";
import axios from "axios";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const AdminMyProfile = ({ baseUrl }) => {
  const [selectedBtnName, setSelectedBtnName] = useState("My Profile");
  const [selectedButton, setSelectedButton] = useState(0);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [conPasswordVisible, setConPasswordVisible] = useState(false);

  const [sinAdminData, setSinAdminData] = useState();

  const handleSelectButton = (e, index) => {
    setSelectedBtnName(e.target.value);
    setSelectedButton(index);
  };

  const adminToken = localStorage.getItem("token");
  // const adminToken = sessionStorage.getItem("token");

  const myprofileDetail = [{ name: "My Profile" }, { name: "Edit Profile" }];

  useEffect(() => {
    const handleSingleAdmin = async () => {
      try {
        const specAdmin = await axios.post(
          `${baseUrl}Tsit_Cvmv_Get_My_Details/${adminToken}`
        );

        // console.log(specAdmin);
        if (specAdmin.status === 200) {
          setSinAdminData(specAdmin.data.message);
        }
      } catch (err) {
        console.log(err);
      }
    };
    handleSingleAdmin();
  }, []);

  // console.log(sinAdminData);
  return (
    <div>
      <div className="row" style={{ padding: "30px" }}>
        <div className="col-lg-4 col-md-12  ">
          {
            <div className="d-flex flex-column myprofile-button-div">
              {myprofileDetail.map((btn, index) => (
                <div key={index} className="d-flex" style={{ width: "100%" }}>
                  <button
                    style={{
                      color: selectedButton === index ? "red" : "gray",
                      backgroundColor:
                        selectedButton === index ? "white" : "white",
                    }}
                    onClick={(e) => handleSelectButton(e, index)}
                    key={index}
                    value={btn.name}
                    className="adminMyprofile-button"
                  >
                    {btn.name}
                  </button>
                  <div
                    className="myprofile-button-span"
                    style={{
                      backgroundColor:
                        selectedButton === index ? "red" : "black",
                    }}
                  ></div>
                </div>
              ))}
            </div>
          }
        </div>

        {selectedBtnName === "My Profile" && (
          <>
            <div className="col-lg-4 col-md-12 myprofile-all-col mb-3">
              <div
                className="row my-profile-detail-row"
                style={{ padding: "20px" }}
              >
                <div className="myprofile-profile-text mb-3">
                  My Profile Details
                </div>
                <div className="col-lg-6 col-5">
                  <div className="d-flex flex-column gap-4 ">
                    <span className="myprofile-1stcol-span">Admin Id</span>
                    <span className="myprofile-1stcol-span">Name</span>

                    <span className="myprofile-1stcol-span">Email</span>
                    <span className="myprofile-1stcol-span">Contact No</span>
                    <span className="myprofile-1stcol-span">Admin Type</span>
                  </div>
                </div>
                <div className="col-lg-6 col-7 ">
                  <div className="d-flex flex-column gap-4">
                    <span className="myprofile-2ndcol-span">
                      {sinAdminData?.admin_id}
                    </span>
                    <span className="myprofile-2ndcol-span">
                      {" "}
                      {sinAdminData?.admin_name}
                    </span>

                    <span className="myprofile-2ndcol-span">
                      {sinAdminData?.admin_email}
                    </span>
                    <span className="myprofile-2ndcol-span">
                      {" "}
                      {sinAdminData?.admin_phone}
                    </span>
                    <span className="myprofile-2ndcol-span">
                      {" "}
                      {sinAdminData?.admin_type}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 myprofile-all-col2 mb-3" >
              <div
                className="d-flex justify-content-center myprofile-pro-image"
                style={{ padding: "30px" }}
              >
                <img
                  className="myprofile-image"
                  src={sinAdminData?.admin_image}
                ></img>
              </div>
            </div>
          </>
        )}

        {selectedBtnName === "Change Password" && (
          <div className="col-lg-6 col-md-12 ">
            <div className="change-password-whole-div">
              <p className="change-password-text">Change Profile Password</p>
              <div className="d-flex justify-content-center">
                <div className="d-flex flex-column myprofile-changepassword-main-div gap-3">
                  <div className="d-flex flex-column">
                    <label className="loginpage-label">New Password</label>
                    <div className="myprofile-input-div">
                      <input
                        placeholder="Enter Password"
                        className="myprofile-input"
                        type={passwordVisible ? "text" : "password"}
                      ></input>
                      <span
                        onClick={() => setPasswordVisible(!passwordVisible)}
                      >
                        {" "}
                        {passwordVisible ? (
                          <FaEyeSlash className="loginpage-icons" />
                        ) : (
                          <FaEye className="loginpage-icons" />
                        )}{" "}
                      </span>
                    </div>
                  </div>
                  <div className="d-flex flex-column">
                    <label className="loginpage-label">
                      Confirm New Password
                    </label>
                    <div className="myprofile-input-div">
                      <input
                        placeholder="Enter Confirm Password"
                        className="myprofile-input"
                        type={conPasswordVisible ? "text" : "password"}
                      ></input>
                      <span
                        onClick={() =>
                          setConPasswordVisible(!conPasswordVisible)
                        }
                      >
                        {conPasswordVisible ? (
                          <FaEyeSlash className="loginpage-icons" />
                        ) : (
                          <FaEye className="loginpage-icons" />
                        )}{" "}
                      </span>
                    </div>
                  </div>
                  <div className="d-flex gap-2 justify-content-end mb-3 mt-2 changepassword-button-div">
                    <button className="change-password-update-button">
                      UPDATE
                    </button>
                    <button className="change-password-cancel-button">
                      CANCEL
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {selectedBtnName === "Edit Profile" && (
          <div className="col-lg-8 col-md-12">
            <div className="change-password-whole-div">
              <p className="change-password-text">Change Profile Password</p>
              <div className="row edit-profile-field-row">
                <div className="col-lg-6 col-md-12 ">
                  <div className="d-flex flex-column gap-3">
                    <div className="d-flex flex-column">
                      <label className="loginpage-label">Name</label>
                      <input className="editprofile-input" type="text"></input>
                    </div>
                    <div className="d-flex flex-column">
                      <label className="loginpage-label">Username</label>
                      <input className="editprofile-input" type="text"></input>
                    </div>
                    <div className="d-flex flex-column mb-2">
                      <label className="loginpage-label">Admin Type</label>
                      <input className="editprofile-input" type="text"></input>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12 ">
                  <div className="d-flex flex-column gap-3">
                    <div className="d-flex flex-column">
                      <lable className="loginpage-label">Email</lable>
                      <input className="editprofile-input" type="text"></input>
                    </div>
                    <div className="d-flex flex-column">
                      <lable className="loginpage-label">Contact</lable>
                      <input className="editprofile-input" type="text"></input>
                    </div>
                  </div>
                </div>
                <div className="d-flex gap-2 justify-content-center mb-3 mt-4 changepassword-button-div">
                  <button className="change-password-update-button">
                    UPDATE
                  </button>
                  <button className="change-password-cancel-button">
                    CANCEL
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminMyProfile;
