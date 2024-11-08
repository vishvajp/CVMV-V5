import React, { useState } from "react";
import "./OtpPage.css";
import { Flex, Input, Typography } from "antd";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const { Title } = Typography;
const OtpPage = ({ baseUrl }) => {
  const [mobNo, setMobNo] = useState();
  const [filledOtp, setFilletOtp] = useState();
  const [otpResponse, setOtpResponse] = useState();
  const [otpError, setOtpError] = useState();
  const [submitOtpError, setSubmitOtpError] = useState();
  const [memToken, setMemToken] = useState();
  const [matriToken, setMatriToken] = useState();

  const navToChoosePage = useNavigate();

  const onChange = (text) => {
    console.log("onChange:", text);
    setFilletOtp(text);
  };
  const sharedProps = {
    onChange,
  };

  const mobObj = {
    phone: mobNo,
  };

  const otpObj = {
    phone: mobNo,
    otp: filledOtp,
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const response = await axios.post(`${baseUrl}verifyOTP`, otpObj);
      console.log(response);

      if (response.data.success) {
        setMemToken(response.data.mem_token);
        setMatriToken(response.data.matri_token);
        window.alert("OTP matched successfully");
        navToChoosePage("/home/choosedetail");
      }
    } catch (err) {
      setSubmitOtpError(
        err.response.data?.otp?.[0] || err.response.data.message
      );
      console.log(err, "otpe", err.response.data?.otp?.[0]);
    }
  };

  const handleSendOtp = async (e) => {
    try {
      e.preventDefault();
      const phoneNo = await axios.post(`${baseUrl}sendmobileOTP`, mobObj);
      console.log(phoneNo);
      setOtpResponse(phoneNo.data.message);
    } catch (err) {
      console.log(err.response);

      setOtpError(err.response.data.error?.phone?.[0]);
    }
  };
  return (
    <div>
      <div className="d-flex justify-content-center">
        <form className="otp-form " onSubmit={handleSubmit}>
          <div className="d-flex flex-column gap-3">
            <div className="d-flex flex-column">
              <lable className="otp-label">Mobile Number</lable>
              <div className="d-flex ">
                <input
                  className="otp-mobile-input"
                  value={mobNo}
                  onChange={(e) => setMobNo(e.target.value)}
                  type="tel"
                  required
                ></input>
                <button className="otp-send-otp-button" onClick={handleSendOtp}>
                  {" "}
                  SEND OTP
                </button>
              </div>
            </div>
            {otpResponse && !filledOtp && (
              <div>
                <span className="otp-message-span">{otpResponse}</span>
              </div>
            )}
            {otpError && (
              <div>
                <span className="otp-err-message-span">{otpError}</span>
              </div>
            )}
            <div className="d-flex flex-column">
              <Flex
                className="otp-otp-div"
                gap="middle"
                align="flex-start"
                vertical
              >
                <Title level={5} className="otp-ant-otp-title">
                  Enter OTP
                </Title>
                <Input.OTP
                  className="otp-ant-otp-input"
                  length={4}
                  variant="filled"
                  {...sharedProps}
                />
              </Flex>
            </div>
            <div className="otp-err-message-span">{submitOtpError}</div>
            <div className="d-flex justify-content-center">
              <button className="otp-submit-button" type="submit">
                SUBMIT
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default OtpPage;
