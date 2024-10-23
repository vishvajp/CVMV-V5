import React, { useContext, useEffect, useState } from "react";
import "./NotificationPage.css";
import man from "./image/man.jpg";
import { TfiControlForward } from "react-icons/tfi";
import UserDataContext from "./Context/UserDataContext";
import { useLocation, useNavigate } from "react-router-dom";
import member from "./image/Member.png";
import matrimony from "./image/Matrimony.png";

const NotificationPage = () => {
  const [pending, setPending] = useState();
  const [specUserData, setSpecUserData] = useState();
  const pendingSpecUser = useNavigate();
  const location = useLocation();

  const { userPendingData, matUserPendCount } = useContext(UserDataContext);

  useEffect(() => {
    setSpecUserData(userPendingData);
    // console.log("not",specUserData)
  }, [userPendingData]);

  // Detects the current URL location

  const handleSpecUser = (singleUser) => {
    // Use JSON.stringify to ensure specUserData is serializable
    const serializableData = singleUser;
    pendingSpecUser("/home/notification/singleUser", {
      state: serializableData,
    });
  };

  return (
    <div>
      <div className="row">
        <div className="col ps-4 pe-4">
          <div className="d-flex flex-column ">
            <div
              className="d-flex flex-column"
              onClick={() => setPending("Memebership")}
            >
              {/* Matrimony Pending List ( {matUserPendCount} ) */}
              <div className="d-flex justify-content-center">
                <div className="d-flex flex-column align-items-center notification-total-user-div">
                  <span className="notification-membership-text">
                    MEMBERSHIP
                  </span>
                  <span className="notification-pending-list-text">
                    Pending List
                  </span>
                  <img className="notification-member-img" src={member}></img>
                </div>
              </div>
              <div className="d-flex justify-content-center">
                <div className="d-flex flex-column align-items-center notification-total-user-count-div">
                  <span className="homepage-total-user-text-total">0</span>
                </div>
              </div>
            </div>
            {/* <p
              style={{
                backgroundColor: pending === "membership" ? "black" : "green",
              }}
              className="notification-membership-pending-text"
              onClick={() => setPending("membership")}
            >
              Membership Pending List
            </p> */}
            <div onClick={() => setPending("Matrimony")}>
              <div className="d-flex justify-content-center">
                <div className="d-flex flex-column align-items-center notification-matri-total-user-div">
                  <span className="notification-membership-text">
                    MATRIMONY
                  </span>
                  <span className="notification-pending-list-text">
                    Pending List
                  </span>
                  <img
                    className="notification-member-img"
                    src={matrimony}
                  ></img>
                </div>
              </div>
              <div className="d-flex justify-content-center">
                <div className="d-flex flex-column align-items-center notification-total-user-count-div">
                  <span className="homepage-total-user-text-total">
                    {matUserPendCount ? matUserPendCount : 0}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col ps-3 pe-3 pb-3 ">
          {pending === "Matrimony" && (
            <div className="usermem-1stcol-main-div">
              <p className="notification-pending-title">{pending}</p>
              {userPendingData.map((sinUser, index) => {
                return (
                  <div
                    key={index}
                    className="d-flex justify-content-between  usermem-all-details-div"
                  >
                    <img
                      className="notification-page-pending-img ms-2"
                      src={sinUser.matrimony_images[0]?.matri_image}
                    ></img>
                    <div className="d-flex flex-column justify-content-center gap-2 usermem-user-mid-detail">
                      <span className="notification-pending-name-span">
                        {sinUser.matrimony_details.name}
                      </span>
                      <span className="notification-matri-district">{sinUser.matrimony_details.district}</span>
                      <span className="usermem-userid-span">
                        {sinUser.matrimony_details.matri_id}
                      </span>{" "}
                      <span className="notification-matri-contact">{sinUser.matrimony_details.contact_detail}</span>
                    </div>
                    <div className="d-flex align-items-center">
                      <button
                        className="notification-more-detail-button me-4"
                        onClick={() => handleSpecUser(sinUser)}
                      >
                        More Detail{" "}
                      </button>
                      <span className="notification-mobile-forward-icon" onClick={() => handleSpecUser(sinUser)}><TfiControlForward/></span>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NotificationPage;
