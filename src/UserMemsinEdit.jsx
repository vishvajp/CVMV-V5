import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const UserMemsinEdit = () => {
  const location = useLocation();
  const singleMemData = location.state || {};
  const specMem = singleMemData.singleMatData || {};
  const navToMemPage = useNavigate()

  const [formData, setFormData] = useState({
    firstName: specMem.first_name || "",
    lastName: specMem.last_name || "",
    phone: specMem.phone || "",
    address: specMem.address || "",
    memberImage: specMem.member_image || "",
    bloodGroup: specMem.blood_group || "",
    dob: specMem.date_of_birth || "",
    district: specMem.district || "",
    fatherName: specMem.father_name || "",
    gender: specMem.gender || "",
    jobDesignation: specMem.job_designation || "",
    kulaDeivam: specMem.kula_deivam || "",
    marriageDate: specMem.marriage_date || "",
    motherName: specMem.mother_name || "",
    nativePlace: specMem.native_place || "",
    qualification: specMem.qualification || "",
    templePlace: specMem.temple_place || "",
    vagaiyara: specMem.vagaiyara || "",
    wifeBirthPlace: specMem.wife_birth_place || "",
    wifeDistrict: specMem.wife_district || "",
    wifeDob: specMem.wife_dob || "",
    wifeJobDesignation: specMem.wife_job_designation || "",
    wifeName: specMem.wife_name || "",
    wifePhone: specMem.wife_phone || "",
    wifeQualification: specMem.wife_qualification || "",
    children: specMem.children || [],
  });


  const handleCancel = () => {
    navToMemPage("/user/membership");
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prevState) => ({
        ...prevState,
        memberImage: URL.createObjectURL(file),
      }));
    }
  };

  const handleChildInputChange = (index, field, value) => {
    const updatedChildren = [...formData.children];
    updatedChildren[index][field] = value;
    setFormData((prevState) => ({
      ...prevState,
      children: updatedChildren,
    }));
  };



  const handleSubmit = (e) => {
    e.preventDefault();

    const mainData = new FormData();

    for (const key in mainData){
      mainData.append(key,formData[key])
      console.log(mainData)
    } 
    // setFormData((prevState) => ({
    //   ...prevState,
    //   children: [
    //     ...prevState.children,
    //     {
    //       children_name: "",
    //       children_dob: "",
    //       children_education: "",
    //       children_professional: "",
    //       relation: "",
    //     },
    //   ],
    // }));

    console.log(formData);
  };

  return (
    <div className="edit-form-container">
      <h1>Edit Member Details</h1>
      <form className="user-edit-form" onSubmit={handleSubmit}>
        {/* Text Inputs */}
        <div className="userEditPage-contact-detail-div ">
          <div className="row">
            <p className="user-edit-page-titles">Contact</p>
            <div className="col-12 col-lg-3">
              <div className="d-flex flex-column">
                <label>First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="col-12 col-lg-3">
              <div className="d-flex flex-column">
                <label>Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="col-12 col-lg-3">
              <div className="d-flex flex-column">
                <label>Phone</label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="col-12 col-lg-3">
              <div className="d-flex flex-column">
                <label>Address</label>
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                ></textarea>
              </div>
            </div>
          </div>
        </div>
        <div className="userEditPage-contact-detail-div">
          <p className="user-edit-page-titles">
            About {formData.firstName} {formData.lastName}
          </p>
          <div className="row">
            <div className="col-12 col-lg-3">
              <div className="d-flex flex-column">
                <label>Gender</label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleInputChange}
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
            </div>
            <div className="col-12 col-lg-3">
            <div className="d-flex flex-column">
          <label>Date of Birth</label>
          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleInputChange}
          />
        </div>
            </div>
            <div className="col-12 col-lg-3">
            <div className="d-flex flex-column">
          <label>Blood Group</label>
          <select
            name="bloodGroup"
            value={formData.bloodGroup}
            onChange={handleInputChange}
          >
            <option>A+ve</option>
            <option>A-ve</option>
            <option>A2+ve</option>
            <option>A1B+ve</option>
            <option>A1B-ve</option>
            <option>A2B+ve</option>
            <option>A2B-ve</option>
            <option>A1-ve</option>
            <option>A1+ve</option>
            <option>A2-ve</option>
            <option>B+ve</option>
            <option>B-ve</option>
            <option>AB+ve</option>
            <option>AB-ve</option>
            <option>O+ve</option>
            <option>O-ve</option>
            <option>Rh</option>
          </select>
        </div>
            </div>
            <div className="col-12 col-lg-3">
            <div className="d-flex flex-column">
          <label>Native Place</label>
          <input
            type="text"
            name="nativePlace"
            value={formData.nativePlace}
            onChange={handleInputChange}
          />
        </div>

            </div>
          </div>
          <div className="row">
          <div className="col-12 col-lg-3">
          <div className="d-flex flex-column">
          <label>District</label>
          <input
            type="text"
            name="district"
            value={formData.district}
            onChange={handleInputChange}
          />
        </div>
          </div>
          <div className="col-12 col-lg-3">
          <div className="d-flex flex-column">
          <label>
            <label>kula Deivam</label>
            <input
              type="text"
              name="kulaDeivam"
              value={formData.kulaDeivam}
              onChange={handleInputChange}
            />
          </label>
        </div>
          </div>
          <div className="col-12 col-lg-3">
          <div className="d-flex flex-column">
          <label>TemplePlace</label>
          <input
            name="templePlace"
            type="text"
            value={formData.templePlace}
            onChange={handleInputChange}
          />
        </div>

          </div>
          <div className="col-12 col-lg-3">
          <div className="d-flex flex-column">
          <label>Marriage Date</label>
          <input
            type="date"
            name="marriageDate"
            value={formData.marriageDate}
            onChange={handleInputChange}
          />
        </div>
          </div>
             </div>
             <div className="row">
                <div className="col-12 col-lg-3">
                <div className="d-flex flex-column">
          <label>Vagaiyara</label>
          <input
            name="vagaiyara"
            type="text"
            value={formData.vagaiyara}
            onChange={handleInputChange}
          />
        </div>
                </div>
             </div>
        </div>


        <div className="userEditPage-contact-detail-div">
          <p className="user-edit-page-titles">
           Career & Job Detail
          </p>
          <div className="row">
          <div className="col-12 col-lg-3">
          <div className="d-flex flex-column">
          <label>Qualification</label>
          <input
            type="text"
            name="qualification"
            value={formData.qualification}
            onChange={handleInputChange}
          />
        </div>
          </div>
          <div className="col-12 col-lg-3">
          <div className="d-flex flex-column">
          <label>Job Designation</label>
          <input
            type="text"
            name="jobDesignation"
            value={formData.jobDesignation}
            onChange={handleInputChange}
          />
        </div>
          </div>
          </div>
          </div>
          <div className="userEditPage-contact-detail-div">
          <p className="user-edit-page-titles">
        Family
          </p>
          <div className="row">
          <div className="col-12 col-lg-3">
          <div className="d-flex flex-column">
          <lable>Father Name</lable>
          <input
            type="text"
            name="fatherName"
            value={formData.fatherName}
            onChange={handleInputChange}
          />
        </div>
          </div>
          <div className="col-12 col-lg-3">
          <div className="d-flex flex-column">
          <label>MotherName</label>
          <input
            type="text"
            name="motherName"
            value={formData.motherName}
            onChange={handleInputChange}
          />
        </div>
      
          </div>
          </div>
          </div>
       

        {/* Date Inputs */}
      
       
        <div className="userEditPage-contact-detail-div">
          <p className="user-edit-page-titles">
      Wife
          </p>
          <div className="row">
            <div className="col-12 col-lg-3">
            <div className="d-flex flex-column">
          <label>Wife Name</label>
          <input
            type="text"
            name="wifeName"
            value={formData.wifeName}
            onChange={handleInputChange}
          />
        </div>
            </div>
            <div className="col-12 col-lg-3">
            <div className="d-flex flex-column">
          <label>Wife's Date of Birth</label>
          <input
            type="date"
            name="wifeDob"
            value={formData.wifeDob}
            onChange={handleInputChange}
          />
        </div>
         </div>
            <div className="col-12 col-lg-3">
            <div className="d-flex flex-column">
          <label>Wife Birth Place</label>
          <input
            name="wifeBirthPlace"
            type="text"
            value={formData.wifeBirthPlace}
            onChange={handleInputChange}
          />
        </div>
            </div>
            <div className="col-12 col-lg-3">
            <div className="d-flex flex-column">
          <label>wifeDistrict</label>
          <input
            name="wifeDistrict"
            type="text"
            value={formData.wifeDistrict}
            onChange={handleInputChange}
          />
        </div>
            </div>
           
          </div>
          <div className="row">
            <div className="col-12 col-lg-3">
            <div className="d-flex flex-column">
        <label>Wife Phone</label>
        <input
          type="text"
          name="wifePhone"
          value={formData.wifePhone}
          onChange={handleInputChange}
        />

        </div>
            </div>
            <div className="col-12 col-lg-3">
            <div className="d-flex flex-column">
          <label>Wife's Qualification</label>
          <input
            type="text"
            name="wifeQualification"
            value={formData.wifeQualification}
            onChange={handleInputChange}
          />
        </div>
            </div>
            <div className="col-12 col-lg-3">
            <div className="d-flex flex-column">
          <label>wife Job Designation</label>
          <input
            type="text"
            name="wifeJobDesignation"
            value={formData.wifeJobDesignation}
            onChange={handleInputChange}
          />
        </div>
            </div>
         
          </div>
          </div>

        

        

       

      
    
       
        

        {/* Dropdowns */}

        {/* Wife's Details */}
        
      
      
        
       

       
       

        {/* File Upload */}
        <div className="userEditPage-horo-detail-div">
          <div className="row">
        <div className="d-flex flex-column">
          <label className="user-edit-page-titles text-center">Member Image</label>
          <div className="d-flex justify-content-center">
          {formData.memberImage && (
            <img
            className="user-edit-horo-image"
              src={formData.memberImage}
              alt="Preview"
              
            />
          )}
          </div>
          <input type="file" accept="image/*" onChange={handleImageChange} />
        </div>
        </div>
        </div>
       
         
        {formData.children && (
          <div className="userEditPage-horo-detail-div">
            <h2 className="user-edit-page-titles">Children Details</h2>
            {formData.children.map((child, index) => (
              <div
                key={index}
                
              >
                <h3 className="user-edit-page-titles">Child {index + 1}</h3>
                <div className="row">
                <div className="col-12 col-lg-4">
                <div className="d-flex flex-column">
                  <label>
                    Name:  </label>
                    <input
                      type="text"
                      value={child.children_name || ""}
                      onChange={(e) =>
                        handleChildInputChange(
                          index,
                          "children_name",
                          e.target.value
                        )
                      }
                    />
                
                </div>
                </div>
                <div className="col-12 col-lg-4">
                <div className="d-flex flex-column">
                  <label>
                    DOB:  </label>
                    <input
                      type="date"
                      value={child.children_dob || ""}
                      onChange={(e) =>
                        handleChildInputChange(
                          index,
                          "children_dob",
                          e.target.value
                        )
                      }
                    />
                
                </div>
                </div>
                <div className="col-12 col-lg-4">
                <div className="d-flex flex-column">
                  <label>
                    Education: </label>
                    <input
                      type="text"
                      value={child.children_education || ""}
                      onChange={(e) =>
                        handleChildInputChange(
                          index,
                          "children_education",
                          e.target.value
                        )
                      }
                    />
                 
                </div>
                </div>
                </div>
                <div className="row">
                <div className="col-12 col-lg-4">
                <div className="d-flex flex-column">
                  <label>
                    Profession: </label>
                    <input
                      type="text"
                      value={child.children_professional || ""}
                      onChange={(e) =>
                        handleChildInputChange(
                          index,
                          "children_professional",
                          e.target.value
                        )
                      }
                    />
                 
                </div>
                </div>
                <div className="col-12 col-lg-4">
                <div className="d-flex flex-column">
                  <label>
                    Relation: </label>
                    <input
                      type="text"
                      value={child.relation || ""}
                      onChange={(e) =>
                        handleChildInputChange(
                          index,
                          "relation",
                          e.target.value
                        )
                      }
                    />
                 
                </div>
                </div>
                </div>
               
               
               
              
               
              </div>
            ))}
            
          </div>
        )}
      
      

        {/* Submit Button */}
        <div className="d-flex justify-content-center gap-3">
        <button className="user-edit-page-update-button" type="submit">UPDATE</button>
        <button
              className="user-edit-page-delete-button"
              onClick={handleCancel}
            >
              CANCEL
            </button>
        </div>
      </form>
    </div>
  );
};

export default UserMemsinEdit;
