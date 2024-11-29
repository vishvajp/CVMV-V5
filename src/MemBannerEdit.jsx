import axios from "axios";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const MemBannerEdit = ({ baseUrl }) => {
  const location = useLocation();
  const singleImg = location.state || {};
  const [imgData, setImgData] = useState(singleImg?.mem_banner_image);
  const [imgUrl, setImgUrl] = useState(singleImg?.redirect_url);
  const [imgId, setImageId] = useState(singleImg.mem_banner_id);
  const [imgPreview, setImgPreview] = useState(singleImg?.mem_banner_image);
  const navigate = useNavigate();

  const handleImgChange = (e) => {
    const file = e.target.files[0];
    const img = new Image();
    img.onload = () => {
      const maxWidth = 1500;
      const maxHeight = 1500;

      if (img.width > maxWidth || img.height > maxHeight) {
        alert(
          `Image dimensions should be less than ${maxWidth}x${maxHeight}px. Please choose a smaller image.`
        );
        e.target.value = "";
        setImgData(null);
        setImgPreview(null);
      } else {
        setImgData(file);
        setImgPreview(URL.createObjectURL(file)); // Create image preview URL
      }
    };

    if (file) {
      img.src = URL.createObjectURL(file);
    }
  };

  // Handle form submission
  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append("banner_image", imgData);
    formData.append("redirect_url", imgUrl);
    formData.append("mem_banner_id", imgId);

    try {
      const response = await axios.post(
        `${baseUrl}Tsit_Cvmv_Update_Mem_Banner/${imgId}`,
        formData,
        {}
      );

      if (response.data) {
        alert(response.data.message);
      }
    } catch (err) {
      alert("Error: " + err.message);
    }
  };

  return (
    <div >
        <div className="banner-main-div">
      <div className="row">
        <div className="col-lg-6 col-11">
          <div className="d-flex flex-column banner-img-div ">
            {/* Show image preview if available */}
            {imgPreview && (
              <img
                  className="banner-mem-image"
                src={imgPreview}
                alt="Preview"
              />
            )}
            <input className="banner-input-choose" type="file" accept="image/*" onChange={handleImgChange} />
          </div>

          <div className="d-flex flex-column">
            <label className="banner-label">URL</label>
            <input
            className="banner-url-input"
              type="text"
              value={imgUrl}
              onChange={(e) => setImgUrl(e.target.value)}
            />
          </div>
          <div className="d-flex gap-3">
            <button className="banner-edit-button"  onClick={handleSubmit}>SUBMIT</button>
            <button className="banner-add-button" onClick={() => navigate("/user/banner/image")}>CANCEL</button>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default MemBannerEdit;
