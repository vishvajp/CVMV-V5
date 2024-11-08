import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import AppLayout from "./AppLayout";
import Homepage from "./Homepage";
import "bootstrap/dist/css/bootstrap.min.css";
import LoginPage from "./LoginPage";
import ForgetPassword from "./ForgetPassword";
import AdminProfile from "./AdminProfile";
import AdminMyProfile from "./AdminMyProfile";
import UserMemPage from "./UserMemPage";
import UserMemsin from "./UserMemsin";
import UserMatrimony from "./UserMatrimony";
import { useEffect, useState } from "react";
import UserMatSin from "./UserMatSin";
import UserFilterPage from "./UserFilterPage";
import UpadateMatSin from "./UpadateMatSin";
import OtpPage from "./OtpPage";
import MemMatPage from "./MemMatPage";
import { DataProvider } from "./Context/UserDataContext";
import NotificationPage from "./NotificationPage";
import PendingMatriSin from "./PendingMatriSin";
import UserEditPage from "./UserEditPage";
import ContinuePage from "./ContinuePage";
import UserMatInActiveSin from "./UserMatInActiveSin";
import UserMemSinInact from "./UserMemSinInact";
import PendingMemSin from "./PendingMemSin";
// import ProtectedRoute from "./ProtectedRouter";

function App() {
  const [activeMem, setActiveMem] = useState([]);
  // const [admin, setAdmin] = useState();
  const [isAuth, setIsAuth] = useState(
    localStorage.getItem("isAuth") === "true"
  );

  const baseUrl =
    "https://cvmvreddystrust.com/App/tsitClient2024/cvmv/public/api/";

  // const baseUrl =
  //   "https://tabsquareinfotech.com/App/Abinesh_be_work/tsit_cvmv/public/api/";

  useEffect(() => {
    const handleStorageChange = () => {
      setIsAuth(localStorage.getItem("isAuth") === "true");
    };

    window.addEventListener("storage", handleStorageChange);
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  const handleLogin = () => {
    setIsAuth(true);
    localStorage.setItem("isAuth", true);
  };
  // console.log(isAuth, "is auth ");

  const activeMemSingleDetail = (singleUserActive) => {
    setActiveMem(singleUserActive);
  };

  // const adminUserData = (adminUser) => {
  //   setAdmin(adminUser);
  // };

  // console.log(admin);

  return (
    <div className="App">
      <DataProvider>
        <Routes>
          {/* Public Routes */}
          <Route
            path="/"
            element={
              <LoginPage
                baseUrl={baseUrl}
                onLogin={handleLogin}
                // adminUserData={adminUserData}
              />
            }
          />
          {/* <Route path="/forgetPassword" element={<ForgetPassword />} /> */}

          {/* Protected Routes */}
          {isAuth ? (
            <>
              <Route
                path="/home"
                element={
                  <AppLayout>
                    <Homepage baseUrl={baseUrl} />
                  </AppLayout>
                }
              />
              <Route
                path="admin/myprofile"
                element={
                  <AppLayout>
                    <AdminMyProfile baseUrl={baseUrl} />
                  </AppLayout>
                }
              />
              <Route
                path="admin/profile"
                element={
                  <AppLayout>
                    <AdminProfile baseUrl={baseUrl} />
                  </AppLayout>
                }
              />
              <Route
                path="user/membership"
                element={
                  <AppLayout>
                    <UserMemPage
                      activeMemSingleDetail={activeMemSingleDetail}
                      baseUrl={baseUrl}
                    />
                  </AppLayout>
                }
              />
              <Route
                path="user/membership/detail"
                element={
                  <AppLayout>
                    <UserMemsin activeMem={activeMem} />
                  </AppLayout>
                }
              />
              <Route
                path="user/matrimony/filter"
                element={
                  <AppLayout>
                    <UserMatrimony />
                  </AppLayout>
                }
              />
              <Route
                path="user/matrimony/detail"
                element={
                  <AppLayout>
                    <UserMatSin />
                  </AppLayout>
                }
              />
              <Route
                path="user/matrimony"
                element={
                  <AppLayout>
                    <UserFilterPage baseUrl={baseUrl} />
                  </AppLayout>
                }
              />
              <Route
                path="user/matrimony/update"
                element={
                  <AppLayout>
                    <UpadateMatSin />
                  </AppLayout>
                }
              />
              <Route
                path="home/otp"
                element={
                  <AppLayout>
                    <OtpPage baseUrl={baseUrl} />
                  </AppLayout>
                }
              />
              <Route
                path="home/choosedetail"
                element={
                  <AppLayout>
                    <MemMatPage />
                  </AppLayout>
                }
              />
              <Route
                path="home/notification"
                element={
                  <AppLayout>
                    <NotificationPage />
                  </AppLayout>
                }
              />
              <Route
                path="/home/notification/singleUser"
                element={
                  <AppLayout>
                    <PendingMatriSin baseUrl={baseUrl} />
                  </AppLayout>
                }
              />
              <Route
                path="/home/user/edit"
                element={
                  <AppLayout>
                    <UserEditPage baseUrl={baseUrl} />
                  </AppLayout>
                }
              />

              <Route
                path="/home/ourteam"
                element={
                  <AppLayout>
                    <ContinuePage />
                  </AppLayout>
                }
              />
              <Route
                path="/home/meeting"
                element={
                  <AppLayout>
                    <ContinuePage />
                  </AppLayout>
                }
              />
              <Route
                path="/home/marketing"
                element={
                  <AppLayout>
                    <ContinuePage />
                  </AppLayout>
                }
              />
              <Route
                path="/home/newsandevents"
                element={
                  <AppLayout>
                    <ContinuePage />
                  </AppLayout>
                }
              />
              <Route
                path="home/location"
                element={
                  <AppLayout>
                    <ContinuePage />
                  </AppLayout>
                }
              />
              <Route
                path="/home/faq"
                element={
                  <AppLayout>
                    <ContinuePage />
                  </AppLayout>
                }
              />
              <Route
                path="/home/company"
                element={
                  <AppLayout>
                    <ContinuePage />
                  </AppLayout>
                }
              />
              <Route
                path="/home/cvmvprofile"
                element={
                  <AppLayout>
                    <ContinuePage />
                  </AppLayout>
                }
              />
              <Route
                path="/home/cvmvback"
                element={
                  <AppLayout>
                    <ContinuePage />
                  </AppLayout>
                }
              />
              <Route
                path="/home/payment"
                element={
                  <AppLayout>
                    <ContinuePage />
                  </AppLayout>
                }
              />
              <Route
                path="/home/memcheck"
                element={
                  <AppLayout>
                    <ContinuePage />
                  </AppLayout>
                }
              />
              <Route
                path="/home/mempayment"
                element={
                  <AppLayout>
                    <ContinuePage />
                  </AppLayout>
                }
              />
              <Route
                path="/home/memdonation"
                element={
                  <AppLayout>
                    <ContinuePage />
                  </AppLayout>
                }
              />
              <Route
                path="/home/banner"
                element={
                  <AppLayout>
                    <ContinuePage />
                  </AppLayout>
                }
              />
              <Route
                path="/home/contact"
                element={
                  <AppLayout>
                    <ContinuePage />
                  </AppLayout>
                }
              />
              <Route
                path="/user/matrimony/inactdetail"
                element={
                  <AppLayout>
                    <UserMatInActiveSin baseUrl={baseUrl} />
                  </AppLayout>
                }
              />
              <Route
                path="/home/user/meminact"
                element={
                  <AppLayout>
                    <UserMemSinInact baseUrl={baseUrl} />
                  </AppLayout>
                }
              />
              <Route
                path="/home/notification/memberapprove"
                element={
                  <AppLayout>
                    <PendingMemSin baseUrl={baseUrl} />
                  </AppLayout>
                }
              />
            </>
          ) : (
            <Route path="*" element={<Navigate to="/" />} />
          )}
        </Routes>
      </DataProvider>
    </div>
  );
}

export default App;
