import React, { useState } from "react";
import './Hero.css'

const Hero = ({ card }) => {
    return (
        <div className="bg-slate-200 w-full min-h-screen h-max flex items-center justify-center flex-wrap gap-14">
            {card.map((ele, index) => {

                const discount = ele.prise >= 1000 ? ele.prise * 0.7 : ele.prise;
                const formateDiscount = discount.toFixed(0)

                return (
                    <div key={index} className="p-2 w-80 rounded-lg bg-yellow-500">
                        <div className="p-4 rounded-lg bg-blue-400 w-full h-[400px] relative">
                            {discount !== ele.prise && (
                                <span className="bg-green-500 text-red-700 p-2 flex items-center aspect-square font-semibold rounded-full absolute -right-12 -top-8">30% Off</span>
                            )}
                            <div className="flex flex-col items-center gap-4">
                                <h1 className="text-2xl text-center select-none">{ele.h1}</h1>
                                <img src={ele.img} alt={ele.h1} className="h-[250px] object-cover hover:scale-105 transition-all select-none" />
                            </div>
                            <ul className="absolute bottom-5 font-medium text-gray-800">
                                {ele.features.map((ele, index) => {
                                    return <li key={index} className="list-disc ml-4">{ele}</li>;
                                })}
                            </ul>
                        </div>
                        <div className="bg-yellow-500 p-4 flex items-center justify-around font-bold text-2xl select-none">
                            <span className="sale text-gray-800 line-through relative">{ele.prise}</span>
                            <span className="sale relative">{formateDiscount}</span>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Hero;
