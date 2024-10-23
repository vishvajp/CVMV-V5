import React, { useState, useEffect } from "react";

import "./UserMemPage.css";
import { BsCalendarDate } from "react-icons/bs";
import { IoIosPrint } from "react-icons/io";
import { FaFilter } from "react-icons/fa";
import { FaFolderPlus } from "react-icons/fa";
import { FaShareSquare } from "react-icons/fa";
import man from "./image/man.jpg";
import { useNavigate } from "react-router-dom";
// import axios from "axios";

const UserMemPage = ({ activeMemSingleDetail, baseUrl }) => {
  const [data, setData] = useState();
  const [specUser, setSpecUser] = useState();
  const singlePersonNav = useNavigate();

  const userData = [
    {
      id: 1,
      name: "John Doe",
      email: "john.doe@example.com",
      phone: "1234567890",
      whatsapp: "",
      gender: "Male",
      maritalStatus: "Married",
      dateOfBirth: "10/02/2022",
      bloodGroup: "A+",
      qualification: "B.tech",
      distric: "chennai",
      location: "tamilnadu",
      kulaDeivam: "MaariAmman",
      templePlace: "Madurai",
      vagaiyara: "",
      address: "No 123, checking with frontent, chennai",
      pincode: "789456",
      jobType: "business",
      jobDesignation: "realestate",
      jobLocation: "chennai",
      annualIncome: "5,00,000",
      fatherName: "Govind",
      fatherDob: "18/10/1971",
      fatherPhone: "23366547891",
      fatherQualifictaion: "btech",
      fatherJobDetail: "real estate",
      motherName: "nirmala",
      motherDob: "18/10/1975",
      motherPhone: "67846435313",
      motherQualifictaion: "btech",
      motherJobDetail: "housewife",
      image: "",
      userId: "TM6576846346",
      wifi: "GOwri",
    },
    {
      id: 2,
      name: "John cena",
      email: "john.doe@example.com",
      phone: "12345",
      whatsapp: "",
      gender: "Male",
      maritalStaus: "Married",
      dateOfBirth: "10/02/2022",
      bloodGroup: "A+",
      qualification: "B.tech",
      distric: "chennai",
      location: "tamilnadu",
      kulaDeivam: "MaariAmman",
      templePlace: "Madurai",
      vagaiyara: "",
      address: "No 123, checking with frontent, chennai",
      pincode: "789456",
      jobType: "business",
      jobDesignation: "realestate",
      jobLocation: "chennai",
      annualIncome: "5,00,000",
      fatherName: "Govind",
      fatherDob: "18/10/1971",
      fatherPhone: "23366547891",
      fatherQualifictaion: "btech",
      fatherJobDetail: "real estate",
      motherName: "nirmala",
      motherDob: "18/10/1975",
      motherPhone: "67846435313",
      motherQualifictaion: "btech",
      motherJobDetail: "housewife",
      image: "",
      userId: "TM6576846346",
      wife: "GOwri",
    },
    {
      id: 3,
      name: "John Doe",
      email: "john.doe@example.com",
      phone: "1234567890",
      whatsapp: "",
      gender: "Male",
      maritalStaus: "Married",
      dateOfBirth: "10/02/2022",
      bloodGroup: "A+",
      qualification: "B.tech",
      distric: "chennai",
      location: "tamilnadu",
      kulaDeivam: "MaariAmman",
      templePlace: "Madurai",
      vagaiyara: "",
      address: "No 123, checking with frontent, chennai",
      pincode: "789456",
      jobType: "business",
      jobDesignation: "realestate",
      jobLocation: "chennai",
      annualIncome: "5,00,000",
      fatherName: "Govind",
      fatherDob: "18/10/1971",
      fatherPhone: "23366547891",
      fatherQualifictaion: "btech",
      fatherJobDetail: "real estate",
      motherName: "nirmala",
      motherDob: "18/10/1975",
      motherPhone: "67846435313",
      motherQualifictaion: "btech",
      motherJobDetail: "housewife",
      image: "",
      userId: "TM6576846346",
      wife: "GOwri",
    },
    {
      id: 4,
      name: "John Doe",
      email: "john.doe@example.com",
      phone: "1234567890",
      whatsapp: "",
      gender: "Male",
      maritalStaus: "Married",
      dateOfBirth: "10/02/2022",
      bloodGroup: "A+",
      qualification: "B.tech",
      distric: "chennai",
      location: "tamilnadu",
      kulaDeivam: "MaariAmman",
      templePlace: "Madurai",
      vagaiyara: "",
      address: "No 123, checking with frontent, chennai",
      pincode: "789456",
      jobType: "business",
      jobDesignation: "realestate",
      jobLocation: "chennai",
      annualIncome: "5,00,000",
      fatherName: "Govind",
      fatherDob: "18/10/1971",
      fatherPhone: "23366547891",
      fatherQualifictaion: "btech",
      fatherJobDetail: "real estate",
      motherName: "nirmala",
      motherDob: "18/10/1975",
      motherPhone: "67846435313",
      motherQualifictaion: "btech",
      motherJobDetail: "housewife",
      image: "",

      userId: "TM6576846346",
      wife: "GOwri",
    },
    {
      id: 5,
      name: "John Doe",
      email: "john.doe@example.com",
      phone: "1234",
      whatsapp: "",
      gender: "Male",
      maritalStaus: "Married",
      dateOfBirth: "10/02/2022",
      bloodGroup: "A+",
      qualification: "B.tech",
      distric: "chennai",
      location: "tamilnadu",
      kulaDeivam: "MaariAmman",
      templePlace: "Madurai",
      vagaiyara: "",
      address: "No 123, checking with frontent, chennai",
      pincode: "789456",
      jobType: "business",
      jobDesignation: "realestate",
      jobLocation: "chennai",
      annualIncome: "5,00,000",
      fatherName: "Govind",
      fatherDob: "18/10/1971",
      fatherPhone: "23366547891",
      fatherQualifictaion: "btech",
      fatherJobDetail: "real estate",
      motherName: "nirmala",
      motherDob: "18/10/1975",
      motherPhone: "67846435313",
      motherQualifictaion: "btech",
      motherJobDetail: "housewife",
      image: "",
      userId: "TM6576846346",
      wife: "GOwri",
    },
    {
      id: 6,
      name: "John Doe",
      email: "john.doe@example.com",
      phone: "1234567890",
      whatsapp: "",
      gender: "Male",
      maritalStaus: "Married",
      dateOfBirth: "10/02/2022",
      bloodGroup: "A+",
      qualification: "B.tech",
      distric: "chennai",
      location: "tamilnadu",
      kulaDeivam: "MaariAmman",
      templePlace: "Madurai",
      vagaiyara: "",
      address: "No 123, checking with frontent, chennai",
      pincode: "789456",
      jobType: "business",
      jobDesignation: "realestate",
      jobLocation: "chennai",
      annualIncome: "5,00,000",
      fatherName: "Govind",
      fatherDob: "18/10/1971",
      fatherPhone: "23366547891",
      fatherQualifictaion: "btech",
      fatherJobDetail: "real estate",
      motherName: "nirmala",
      motherDob: "18/10/1975",
      motherPhone: "67846435313",
      motherQualifictaion: "btech",
      motherJobDetail: "housewife",
      image: "",
      userId: "TM6576846346",
      wife: "GOwri",
    },
  ];
  const InUserData = [
    {
      id: 1,
      name: "John Doe",
      email: "john.doe@example.com",
      phone: "1234567890",
      whatsapp: "",
      gender: "Male",
      maritalStaus: "Married",
      dateOfBirth: "10/02/2022",
      bloodGroup: "A+",
      qualification: "B.tech",
      distric: "chennai",
      location: "tamilnadu",
      kulaDeivam: "MaariAmman",
      templePlace: "Madurai",
      vagaiyara: "",
      address: "No 123, checking with frontent, chennai",
      pincode: "789456",
      jobType: "business",
      jobDesignation: "realestate",
      jobLocation: "chennai",
      annualIncome: "5,00,000",
      fatherName: "Govind",
      fatherDob: "18/10/1971",
      fatherPhone: "23366547891",
      fatherQualifictaion: "btech",
      fatherJobDetail: "real estate",
      motherName: "nirmala",
      motherDob: "18/10/1975",
      motherPhone: "67846435313",
      motherQualifictaion: "btech",
      motherJobDetail: "housewife",
      image: "",
      userId: "TM6576846346",
    },
    {
      id: 1,
      name: "John Doe",
      email: "john.doe@example.com",
      phone: "12345",
      whatsapp: "",
      gender: "Male",
      maritalStaus: "Married",
      dateOfBirth: "10/02/2022",
      bloodGroup: "A+",
      qualification: "B.tech",
      distric: "chennai",
      location: "tamilnadu",
      kulaDeivam: "MaariAmman",
      templePlace: "Madurai",
      vagaiyara: "",
      address: "No 123, checking with frontent, chennai",
      pincode: "789456",
      jobType: "business",
      jobDesignation: "realestate",
      jobLocation: "chennai",
      annualIncome: "5,00,000",
      fatherName: "Govind",
      fatherDob: "18/10/1971",
      fatherPhone: "23366547891",
      fatherQualifictaion: "btech",
      fatherJobDetail: "real estate",
      motherName: "nirmala",
      motherDob: "18/10/1975",
      motherPhone: "67846435313",
      motherQualifictaion: "btech",
      motherJobDetail: "housewife",
      image: "",
      userId: "TM6576846346",
    },
    {
      id: 1,
      name: "John Doe",
      email: "john.doe@example.com",
      phone: "1234567890",
      whatsapp: "",
      gender: "Male",
      maritalStaus: "Married",
      dateOfBirth: "10/02/2022",
      bloodGroup: "A+",
      qualification: "B.tech",
      distric: "chennai",
      location: "tamilnadu",
      kulaDeivam: "MaariAmman",
      templePlace: "Madurai",
      vagaiyara: "",
      address: "No 123, checking with frontent, chennai",
      pincode: "789456",
      jobType: "business",
      jobDesignation: "realestate",
      jobLocation: "chennai",
      annualIncome: "5,00,000",
      fatherName: "Govind",
      fatherDob: "18/10/1971",
      fatherPhone: "23366547891",
      fatherQualifictaion: "btech",
      fatherJobDetail: "real estate",
      motherName: "nirmala",
      motherDob: "18/10/1975",
      motherPhone: "67846435313",
      motherQualifictaion: "btech",
      motherJobDetail: "housewife",
      image: "",
      userId: "TM6576846346",
    },
    {
      id: 1,
      name: "John Doe",
      email: "john.doe@example.com",
      phone: "1234567890",
      whatsapp: "",
      gender: "Male",
      maritalStaus: "Married",
      dateOfBirth: "10/02/2022",
      bloodGroup: "A+",
      qualification: "B.tech",
      distric: "chennai",
      location: "tamilnadu",
      kulaDeivam: "MaariAmman",
      templePlace: "Madurai",
      vagaiyara: "",
      address: "No 123, checking with frontent, chennai",
      pincode: "789456",
      jobType: "business",
      jobDesignation: "realestate",
      jobLocation: "chennai",
      annualIncome: "5,00,000",
      fatherName: "Govind",
      fatherDob: "18/10/1971",
      fatherPhone: "23366547891",
      fatherQualifictaion: "btech",
      fatherJobDetail: "real estate",
      motherName: "nirmala",
      motherDob: "18/10/1975",
      motherPhone: "67846435313",
      motherQualifictaion: "btech",
      motherJobDetail: "housewife",
      image: "",

      userId: "TM6576846346",
    },
    {
      id: 1,
      name: "John Doe",
      email: "john.doe@example.com",
      phone: "1234",
      whatsapp: "",
      gender: "Male",
      maritalStaus: "Married",
      dateOfBirth: "10/02/2022",
      bloodGroup: "A+",
      qualification: "B.tech",
      distric: "chennai",
      location: "tamilnadu",
      kulaDeivam: "MaariAmman",
      templePlace: "Madurai",
      vagaiyara: "",
      address: "No 123, checking with frontent, chennai",
      pincode: "789456",
      jobType: "business",
      jobDesignation: "realestate",
      jobLocation: "chennai",
      annualIncome: "5,00,000",
      fatherName: "Govind",
      fatherDob: "18/10/1971",
      fatherPhone: "23366547891",
      fatherQualifictaion: "btech",
      fatherJobDetail: "real estate",
      motherName: "nirmala",
      motherDob: "18/10/1975",
      motherPhone: "67846435313",
      motherQualifictaion: "btech",
      motherJobDetail: "housewife",
      image: "",
      userId: "TM6576846346",
    },
    {
      id: 1,
      name: "John Doe",
      email: "john.doe@example.com",
      phone: "1234567890",
      whatsapp: "",
      gender: "Male",
      maritalStaus: "Married",
      dateOfBirth: "10/02/2022",
      bloodGroup: "A+",
      qualification: "B.tech",
      distric: "chennai",
      location: "tamilnadu",
      kulaDeivam: "MaariAmman",
      templePlace: "Madurai",
      vagaiyara: "",
      address: "No 123, checking with frontent, chennai",
      pincode: "789456",
      jobType: "business",
      jobDesignation: "realestate",
      jobLocation: "chennai",
      annualIncome: "5,00,000",
      fatherName: "Govind",
      fatherDob: "18/10/1971",
      fatherPhone: "23366547891",
      fatherQualifictaion: "btech",
      fatherJobDetail: "real estate",
      motherName: "nirmala",
      motherDob: "18/10/1975",
      motherPhone: "67846435313",
      motherQualifictaion: "btech",
      motherJobDetail: "housewife",
      image: "",
      userId: "TM6576846346",
    },
  ];
  const handleSpecificActive = (userId) => {
    const perPerson = userData.find((onePerson) => onePerson.id === userId);
    setSpecUser(perPerson);
  };

  // useEffect(() => {
  //   const getData = async() => {
  //     try{
  //     const response = await axios.get(
  //       "https://api.coindesk.com/v1/bpi/currentprice.json"
  //     ); // Replace with your API endpoint

  //     setData(response.data);
  //     console.log(response.data)

  //     }catch(error){
  //         console.log(error);
  //       };
  //   };
  //   getData()
  // }
  // , []);

  // console.log("abc",specUser)

  useEffect(() => {
    if (specUser) {
      activeMemSingleDetail(specUser);
      singlePersonNav("/user/membership/detail");
    }
  }, [specUser]);
  return (
    <div>
      <div className="row">
        <div className="col-lg-6 col-md-12 p-4">
          <div className="usermem-1stcol-main-div">
            <div className="d-flex usermem-active-mem-records-text justify-content-around">
              <div>
                <span>Membership Records</span>
              </div>
              <div className="d-flex usermem-1st-col-icons-div justify-content-end gap-3 align-items-center">
                <BsCalendarDate className="userfill-icon" />
                <IoIosPrint className="userfill-icon" />
                <FaFilter className="userfill-icon" />
                <FaFolderPlus className="userfill-icon" />
              </div>
            </div>
            <div className="d-flex justify-content-evenly usermem-total-activ-mem">
              <span className="usermem-total-active-mem-text">
                Total Membership
              </span>
              <input type="text" className="usermem-search-input"></input>
            </div>
            {userData.map((detail, index) => {
              return (
                <div
                  key={index}
                  className="d-flex justify-content-evenly usermem-all-details-div"
                >
                  <img className="usermem-man-img" src={man}></img>
                  <div className="d-flex flex-column usermem-user-mid-detail">
                    <span className="notification-pending-name-span">
                      {detail.name}
                    </span>
                    <span className="mb-1 usermem-district-loc-span ">
                      {detail.distric}, {detail.location}
                    </span>
                   
                      <span className="usermem-userid-span">
                        {detail.userId}
                      </span>{" "}
                      <span className="usermem-phone-span">
                      {detail.phone}
                    </span>
                  </div>
                  <span className="d-flex align-items-center">
                    {" "}
                    <button
                      onClick={() => handleSpecificActive(detail.id)}
                      className="notification-more-detail-button"
                    >
                      More Details
                    </button>
                  </span>
                </div>
              );
            })}
          </div>
        </div>
        <div className="col-lg-6 col-md-12 p-4">
          <div className="usermem-1stcol-main-div">
            <div className="d-flex usermem-active-mem-records-text justify-content-around">
              <div>
                <span>Membership Inactive Records</span>
              </div>
              <div className="d-flex usermem-1st-col-icons-div justify-content-end gap-3 align-items-center">
                <BsCalendarDate className="userfill-icon" />
                <IoIosPrint className="userfill-icon" />
                <FaFilter className="userfill-icon" />
                <FaFolderPlus className="userfill-icon" />
              </div>
            </div>
            <div className="d-flex justify-content-evenly usermem-total-activ-mem">
              <span className="usermem-total-active-mem-text">
                Total Records
              </span>
              <input type="text" className="usermem-search-input"></input>
            </div>
            {InUserData.map((detail, index) => {
              return (
                <div
                  key={index}
                  className="d-flex justify-content-evenly usermem-all-details-div"
                >
                  <img className="usermem-man-img" src={man}></img>
                  <div className="d-flex flex-column usermem-user-mid-detail">
                    <span className="notification-pending-name-span">
                      {detail.name}
                    </span>
                    <span className="mb-1 usermem-district-loc-span">
                      {detail.distric}, {detail.location}
                    </span>
                      <span className="usermem-userid-inactive-span">
                        {detail.userId}
                      </span>{" "}
                    <span className="usermem-phone-span">

                      {detail.phone}
                    </span>
                  </div>
                  <span className="d-flex align-items-center">
                    {" "}
                    <FaShareSquare className="usermem-share-icon" />
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserMemPage;
