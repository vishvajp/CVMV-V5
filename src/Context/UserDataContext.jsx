import { createContext, useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
const UserDataContext = createContext({});

export const DataProvider = ({ children }) => {
  const [userPendingData, setUserPendingData] = useState([]);
  const [matUserPendCount, setMatUserPendCount] = useState();
  const baseUrl =
    "https://cvmvreddystrust.com/App/tsitClient2024/cvmv/public/api/";

  // Notification Page
  const location = useLocation();
  const handlePending = async () => {
    try {
      const pendingData = await axios.post(
        `${baseUrl}Tsit_Cvmv_Get_All_Pending_Matri_Details`
      );
      // console.log(pendingData.data.matrimony_records);
      setUserPendingData(pendingData?.data?.matrimony_records);
    } catch (err) {
      console.log(err);
    }
  };

  const handleMatPendCount = async () => {
    try {
      const matPendingCount = await axios.post(
        `${baseUrl}Tsit_Cvmv_Mat_Pending_List_Count`
      );
      // console.log(matPendingCount.data.data);
      setMatUserPendCount(matPendingCount?.data?.data);
    } catch (err) {
      console.log(err);
    }
  };

  // Use effect to trigger data fetching when the URL changes
  useEffect(() => {
    if (
      location.pathname === "/home" ||
      location.pathname === "/home/notification"
    ) {
      handlePending();
      handleMatPendCount();
    }
  }, [location.pathname]);

  return (
    <UserDataContext.Provider
      value={{
        userPendingData,
        matUserPendCount,
      }}
    >
      {children}
    </UserDataContext.Provider>
  );
};

export default UserDataContext;
