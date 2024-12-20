import React from "react";

export default function Hero() {
    return (
        <div>
            <div className="grid grid-rows-[90px_200px_200px_90px] grid-cols-1 sm:grid-cols-2 p-3 md:grid-cols-3 gap-2 bg-black">
                <div className=" bg-purple-700 col-span-1 sm:col-span-2 md:col-span-3 text-[24px] sm:text-[30px] md:text-[36px] font-bold text-center flex items-center justify-center">
                    Header
                </div>
                <div className="bg-sky-600 row-span-1 sm:row-span-2 md:col-span-1 text-[24px] sm:text-[30px] md:text-[36px] text-center flex items-center justify-center">
                    Nav
                </div>

                <div className="bg-blue-800 col-span-1 sm:col-span-1 md:col-span-2 text-[24px] sm:text-[30px] md:text-[36px] font-bold text-center flex items-center justify-center">
                    Content 1
                </div>
                <div className="bg-blue-800 col-span-1 sm:col-span-1 md:col-span-1 text-[24px] sm:text-[30px] md:text-[36px] font-bold text-center flex items-center justify-center">
                    Content 2
                </div>

                <div className="bg-blue-800 col-span-1 sm:col-span-1 md:col-span-1 text-[24px] sm:text-[30px] md:text-[36px] font-bold text-center flex items-center justify-center">
                    Content 3
                </div>

                <div className="bg-purple-700 col-span-1 sm:col-span-2 md:col-span-3 text-[24px] sm:text-[30px] md:text-[36px] font-bold text-center flex items-center justify-center">
                    Footer
                </div>
            </div>
        </div>
    );
}
