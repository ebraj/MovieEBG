import React from "react";
import { extractImgPoster } from "utils/extractImg";

const PersonCard = ({ singlePerson }) => {
  return (
    <div className="space-y-5">
      <div className="relative rounded-md overflow-hidden hover:scale-105 md:hover:scale-110 transition-all">
        {singlePerson.profile_path ? (
          <img
            src={extractImgPoster(singlePerson.profile_path)}
            className="rounded-md shadow-lg"
            alt={singlePerson.title}
          />
        ) : (
          <div className="w-full h-[320px] bg-slate-100"></div>
        )}
      </div>
      <div className="space-y-2">
        <h3>{singlePerson.name}</h3>
      </div>
    </div>
  );
};

export default PersonCard;
