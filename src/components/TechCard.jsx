
import React from "react";
import Tilt from "react-tilt";



const TechCard = ({ name, icon }) => {
    return (
        <Tilt >
            {/* className="xs:w-[250px] w-8" */}
            <div
                option={{
                    max: 45,
                    scale: 1,
                    speed: 500,
                }}
                className="flex justify-evenly items-center flex-col bg-tertiary rounded-[20px] p-5  h-[100px] w-[100px]  "
            >
                <img src={icon} alt={name} className=" w-15 h-15 object-contain" />
                <h3 className="text-white text-[10px] font-bold text-center">
                    {name}
                </h3>
            </div>

        </Tilt>
    );
};

export default TechCard;