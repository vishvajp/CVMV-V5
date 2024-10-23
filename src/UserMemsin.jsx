import React, { useEffect, useState } from "react";
import { FaKey } from "react-icons/fa";
import "./UserMemsin.css";
import { Collapse } from "antd";
import man from "./image/man.jpg"
import { FaEdit } from "react-icons/fa";
const UserMemsin = ({ activeMem }) => {
  const { Panel } = Collapse;
const [activePer,setActivePer]= useState([])
useEffect(()=>{setActivePer(activeMem)},[activeMem])

// console.log("game",activePer)
  return (
    <div>
      <div className="row">
        <div className="col-lg-4 p-4">
          <div className="d-flex flex-column">
            <span className="usememsin-membership-text">
              Membership Setting
            </span>
            <div className="d-flex flex-column usermemsin-1stcol-status-div gap-2">
              <div className="d-flex justify-content-between ">
                <span>STATUS</span>
                <sapn>
                  <FaKey />
                </sapn>
              </div>
              <span>Active</span>
            </div>
            <div className="d-flex flex-column usermemsin-1stcol-status-div gap-2">
              <div className="d-flex justify-content-between ">
                <span>MEMBER TYPE</span>
                <sapn>
                  <FaKey />
                </sapn>
              </div>
              <span>N/A</span>
            </div>
            <div className="d-flex flex-column usermemsin-1stcol-status-div gap-2">
              <span>DATE CREATED</span>
              <sapn>30th June</sapn>
            </div>
            <div className="d-flex flex-column  usermemsin-1stcol-status-div gap-2">
              <span>DATE UPDATED</span>
              <sapn>N/A</sapn>
            </div>
            <div className="d-flex flex-column usermemsin-1stcol-status-div gap-2 ">
              <span>PRINT MEMBER PROFILE</span>
              <sapn>N/A</sapn>
            </div>
            <div className="d-flex flex-column usermemsin-1stcol-status-div gap-2">
              <span>LAST ACTIVE</span>
              <sapn>N/A</sapn>
            </div>
            <div className="d-flex flex-column usermemsin-1stcol-status-div gap-2 ">
              <span>DELETE MEMBER</span>
              <div className="d-flex">
                <span>#</span> <span>Delete Record</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-8">
          <p className="usermemsin-2nd-col-membership-text">
            Membership Detail
          </p>

          <Collapse
            className="userMemsin-contact-collapse"
            defaultActiveKey={["1"]}
          >
            <Panel header="Contact" key="1">
              <div className="row">
                <p><FaEdit className="usermemsin-edit-icon"/></p>
                <div className="col-lg-4 usermemsin-col-1-2  ">
                  <div className="d-flex flex-column usermensin-2nd-col-contact-span gap-4">
                    <span >Name</span>

                    <span>Email</span>

                    <span>Contact No</span>

                    <span>Whatsapp No</span>
                  </div>
                </div>

                <div className="col-lg-4 usermemsin-col-1-2">
                  <div className="d-flex flex-column gap-4 usermensin-2nd-col-contact-field-span">
                    <span>{activePer.name}</span>
                    <span>JohnDeo@gmail.com</span>
                    <span>94443551531</span>
                    <span>""</span>
                  </div>
                </div>
                <div className="col-lg-4 ">
                    <img className=" usermemsin-user-img   " src={man}></img>
                </div>
              </div>
            </Panel>
          </Collapse>
          <Collapse
            className="userMemsin-contact-collapse"
            defaultActiveKey={["1"]}
          >
            <Panel header="About John" key="1">
<div className="row">
<p><FaEdit className="usermemsin-edit-icon"/></p>
    <div className="col">
        <div className="d-flex flex-column gap-4 usermensin-2nd-col-contact-span">
        <span>Gender</span>
        <span>Date Of Birth</span>
        <span>Marital Status</span>
        <span>Blood Group</span>
        <span>Qualification</span>
        <span>Native Place</span>
        <span>District</span>
        <span>Address</span>
        <span>Pincode</span>
        <span>Kula Deivam</span>
        <span>Temple Place</span>
        <span>Vaigaiyara</span>
        </div>
        
    </div>
    <div className="col">
        <div className="d-flex flex-column gap-4 usermensin-2nd-col-contact-field-span">
<span>Male</span>
<span>25/08/2020</span>
<span>Married</span>
<span>B+</span>
<span>DCE</span>
<span>Bommakottai</span>
<span>Virudhunagr</span>
<span>No 123,the checking address, chennai</span>
<span>600094</span>
<span>Ellamal</span>
<span>Malaipatti</span>
<span>Loga Pallavarkal</span>

        </div>
    </div>
</div>

            </Panel>
          </Collapse>
          <Collapse
            className="userMemsin-contact-collapse"
            defaultActiveKey={["1"]}
          >
            <Panel header="Job Detail" key="1">
            <div className="row">
<p><FaEdit className="usermemsin-edit-icon"/></p>
    <div className="col">
        <div className="d-flex flex-column gap-4 usermensin-2nd-col-contact-span">
        <span>Job Type</span>
        <span>Job Designation</span>
        <span>Job Location</span>
        <span>Annual Income</span>
       
        </div>
        
    </div>
    <div className="col">
        <div className="d-flex flex-column gap-4 usermensin-2nd-col-contact-field-span">
<span>Government</span>
<span>Engineer</span>
<span>Chennai</span>
<span>785236</span>


        </div>
    </div>
</div>
            </Panel>
          </Collapse>
          <p className="usermemsin-2nd-col-membership-text">Family Detail</p>
          <Collapse
            className="userMemsin-contact-collapse"
            defaultActiveKey={["1"]}
          >
            <Panel header="Father" key="1">
            <div className="row">
<p><FaEdit className="usermemsin-edit-icon"/></p>
    <div className="col">
        <div className="d-flex flex-column gap-4 usermensin-2nd-col-contact-span">
        <span>Name</span>
        <span>Contact</span>
        <span>DOB</span>
        <span>Age</span>
        <span>Gender</span>
        <span>Qualification</span>
        <span>Job Detail</span>
       
        </div>
        
    </div>
    <div className="col">
        <div className="d-flex flex-column gap-4 usermensin-2nd-col-contact-field-span">
<span>Male</span>
<span>25/08/2020</span>
<span>Married</span>
<span>B+</span>
<span>DCE</span>
<span>Bommakottai</span>
<span>Virudhunagr</span>


        </div>
    </div>
</div>
            </Panel>
          </Collapse>
          <Collapse
            className="userMemsin-contact-collapse"
            defaultActiveKey={["1"]}
          >
            <Panel header="Mother" key="1">
            <div className="row">
<p><FaEdit className="usermemsin-edit-icon"/></p>
    <div className="col">
        <div className="d-flex flex-column gap-4 usermensin-2nd-col-contact-span">
        <span>Name</span>
        <span>Contact</span>
        <span>DOB</span>
        <span>Age</span>
        <span>Gender</span>
        <span>Qualification</span>
        <span>Job Detail</span>
       
        </div>
        
    </div>
    <div className="col">
        <div className="d-flex flex-column gap-4 usermensin-2nd-col-contact-field-span">
<span>Male</span>
<span>25/08/2020</span>
<span>Married</span>
<span>B+</span>
<span>DCE</span>
<span>Bommakottai</span>
<span>Virudhunagr</span>


        </div>
    </div>
</div>
            </Panel>
          </Collapse>
          <Collapse
            className="userMemsin-contact-collapse"
            defaultActiveKey={["1"]}
          >
            <Panel header="Wife" key="1">
            <div className="row">
<p><FaEdit className="usermemsin-edit-icon"/></p>
    <div className="col">
        <div className="d-flex flex-column gap-4 usermensin-2nd-col-contact-span">
        <span>Name</span>
        <span>Contact</span>
        <span>DOB</span>
        <span>Age</span>
        <span>Gender</span>
        <span>Qualification</span>
        <span>Job Detail</span>
       
        </div>
        
    </div>
    <div className="col">
        <div className="d-flex flex-column gap-4 usermensin-2nd-col-contact-field-span">
<span>Male</span>
<span>25/08/2020</span>
<span>Married</span>
<span>B+</span>
<span>DCE</span>
<span>Bommakottai</span>
<span>Virudhunagr</span>


        </div>
    </div>
</div>
            </Panel>
          </Collapse>
          <p className="usermemsin-2nd-col-membership-text">Payment Detail</p>
        </div>
      </div>
    </div>
  );
};

export default UserMemsin;
