import React from "react";
import "./../../../style.css";

const PackagePhotos = ({images}) => {
  const image = images.map((imag, i)=>{
    return(
        <img key={i} src={imag.url_original} className="package_photos_galery"/>
    );
  });
  return(
      <div>
        <h6 className="package_photos_header">Фотографии пакета</h6>
        {image}
      </div>
  )
};
export default PackagePhotos;