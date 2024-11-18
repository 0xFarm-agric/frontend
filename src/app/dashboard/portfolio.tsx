"use client";
import React from "react";
import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts"; // Import ApexOptions type

export default function Portfolio() {
    const data = {
        series: [
            {
                name: "series1",
                data: [100, 350, 100, 110, 50, 300, 110, 50, 500],
            },
        ],
        options: {
            chart: {
                height: 350,
                type: "area",
                toolbar: {
                    show: false, // Disables the zoom icon
                },
            },
            grid: {
                row: {

                },
                borderColor: '#F5F6F7', // Color of the horizontal grid lines
            },
            dataLabels: {
                enabled: false,
            },
            stroke: {
                width: 1,
                colors: ["#15A34A"],
                curve: "smooth",
            },
            colors: ["#15A34A"],
            fill: {
                type: "gradient",
                gradient: {
                    colors: ["#15A34A"],
                    shadeIntensity: 1,
                    opacityFrom: 0.7,
                    opacityTo: 0.9,
                    stops: [0, 90, 100],
                },
            },
            xaxis: {
                categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],
                labels: {
                    style: {
                        colors: '#4B5563', // Color for x-axis labels
                        fontSize: '10px', // Reduced font size
                        fontWeight: '500', // Set font weight
                    },
                },
            },
            yaxis: {
                labels: {
                    style: {
                        colors: '#4B5563', // Color for y-axis labels
                        fontSize: '10px', // Reduced font size
                        fontWeight: '500', // Set font weight
                    },
                },
            },
            tooltip: {
                x: {
                    format: "dd/MM/yy HH:mm",
                },
            },
            legend: {
                show: false,
            },
        } as ApexOptions,
    };
    const radial = {

        series: [44, 55, 67, 83],
        options: {
            chart: {
                height: 350,
                type: 'radialBar',
            },
            plotOptions: {
                radialBar: {
                    dataLabels: {
                        name: {
                            fontSize: '22px',
                        },
                        value: {
                            fontSize: '16px',
                        },
                        total: {
                            show: true,
                            label: 'Total Ton',
                            
                        }
                    }
                }
            },
            labels: ['Apples', 'Oranges', 'Bananas', 'Berries'],
        } as unknown as ApexOptions,

    };

    return (


        <div>
            <div className="">
                <p className="text-sm font-semibold mb-1">Good Morning !</p>
                <p className="text-[#778599] text-xs">All your 0xFarm activities displayed here</p>
            </div>
            <div className="flex justify-spacebetween my-4">
                {/* Row container for the 2 cards in a row */}
                <div className="flex space-x-4">
                    {/* First card */}
                    <div className="w-64  h-40 bg-white rounded-lg shadow-md">
                        <div className="w-[100px] h-6 mx-4 mt-4 mb-2 px-4 items-center bg-[#15A34A] flex rounded-[4px]">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.0038 11.73C12.4485 11.73 12.8285 11.5717 13.1438 11.255C13.4591 10.9383 13.6165 10.5573 13.6158 10.112C13.6151 9.66667 13.4565 9.28667 13.1398 8.972C12.8231 8.65733 12.4421 8.5 11.9968 8.5C11.5515 8.5 11.1715 8.65867 10.8568 8.976C10.5421 9.29333 10.3848 9.67433 10.3848 10.119C10.3848 10.5637 10.5431 10.9437 10.8598 11.259C11.1765 11.5743 11.5578 11.7317 12.0038 11.731M11.9998 21.019C9.64981 18.941 7.87981 17.003 6.68981 15.205C5.49914 13.407 4.90381 11.7707 4.90381 10.296C4.90381 8.18067 5.59248 6.436 6.96981 5.062C8.34781 3.68733 10.0245 3 11.9998 3C13.9751 3 15.6518 3.68733 17.0298 5.062C18.4071 6.436 19.0958 8.18067 19.0958 10.296C19.0958 11.7707 18.5008 13.407 17.3108 15.205C16.1201 17.003 14.3498 18.941 11.9998 21.019Z" fill="white" />
                            </svg>
                            <span className="ml-2 text-xs text-white">Lagos</span>
                        </div>
                        <div className="flex  justify-between items-center ">
                            {/*First Row: Date and Icon */}
                            <div className="flex flex-col  px-4">
                                <div className="flex items-center mb-2">

                                    <div className="flex flex-col pr-2">


                                        <p className="text-sm font-medium">Monday</p>
                                        <p className="text-gray-600 text-[10px]">Aug 12, 2024</p>
                                    </div>

                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6.5 19C5.25267 19 4.191 18.5647 3.315 17.694C2.43833 16.8247 2 15.7657 2 14.517C2 13.371 2.39167 12.354 3.175 11.466C3.95833 10.578 4.932 10.101 6.096 10.035C6.32067 8.57833 6.99067 7.375 8.106 6.425C9.22133 5.475 10.5193 5 12 5C13.668 5 15.085 5.583 16.251 6.749C17.417 7.915 18 9.332 18 11V12H18.616C19.5733 12.0307 20.3767 12.3823 21.026 13.055C21.6753 13.7277 22 14.5427 22 15.5C22 16.4807 21.662 17.3093 20.986 17.986C20.3087 18.662 19.48 19 18.5 19H6.5ZM6.5 18H18.5C19.2 18 19.7917 17.7583 20.275 17.275C20.7583 16.7917 21 16.2 21 15.5C21 14.8 20.7583 14.2083 20.275 13.725C19.7917 13.2417 19.2 13 18.5 13H17V11C17 9.61667 16.5123 8.43733 15.537 7.462C14.5617 6.48667 13.3827 5.99933 12 6C10.6173 6.00067 9.43833 6.48833 8.463 7.463C7.48767 8.43767 7 9.61667 7 11H6.5C5.53333 11 4.70833 11.3417 4.025 12.025C3.34167 12.7083 3 13.5333 3 14.5C3 15.4667 3.34167 16.2917 4.025 16.975C4.70833 17.6583 5.53333 18 6.5 18Z" fill="#C8CBCE" />
                                    </svg>
                                </div>
                                <p className="text-xl font-semibold mt-4">24C</p>
                                <p className="text-gray-600 text-[10px]">High:27 Low:16</p>
                            </div>

                            <div className="flex flex-col text-center pr-4">

                                <svg width="64" height="64" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.675 11.1L4.875 9.875C4.45 9.775 4.05 9.625 3.7 9.375L3.675 11.1ZM7.575 1.65L6.375 2.875C6.8 2.975 7.2 3.125 7.55 3.375L7.575 1.65ZM0.9 8.325L2.625 8.3C2.4 7.95 2.225 7.55 2.125 7.125L0.9 8.325ZM10.35 4.425L8.625 4.45C8.85 4.8 9.025 5.2 9.125 5.625L10.35 4.425ZM0.9 4.425L2.125 5.625C2.225 5.2 2.375 4.8 2.625 4.45L0.9 4.425ZM10.35 8.325L9.125 7.125C9.025 7.55 8.875 7.95 8.625 8.3L10.35 8.325ZM3.675 1.65L3.7 3.375C4.05 3.15 4.45 2.975 4.875 2.875L3.675 1.65ZM7.575 11.1L7.55 9.375C7.2 9.6 6.8 9.775 6.375 9.875L7.575 11.1ZM2.675 8.425L2 10L3.575 9.325C3.225 9.075 2.925 8.775 2.675 8.425ZM8.575 4.325L9.25 2.75L7.675 3.425C8.025 3.675 8.325 3.975 8.575 4.325ZM2.1 5.725L0.5 6.375L2.1 7.025C2.075 6.825 2.05 6.6 2.05 6.375C2.025 6.15 2.05 5.95 2.1 5.725ZM9.15 7.025L10.75 6.375L9.15 5.725C9.2 5.925 9.2 6.15 9.2 6.375C9.2 6.6 9.2 6.8 9.15 7.025ZM3.575 3.425L2 2.75L2.675 4.325C2.925 3.975 3.225 3.675 3.575 3.425ZM7.675 9.325L9.25 10L8.575 8.425C8.325 8.775 8.025 9.075 7.675 9.325ZM6.275 2.85L5.625 1.25L4.975 2.85C5.175 2.825 5.4 2.8 5.625 2.8C5.85 2.775 6.05 2.8 6.275 2.85ZM4.975 9.9L5.625 11.5L6.275 9.9C6.075 9.925 5.85 9.95 5.625 9.95C5.4 9.95 5.2 9.95 4.975 9.9Z" fill="#FFCE31" />
                                    <path d="M5.625 9.625C7.41993 9.625 8.875 8.16993 8.875 6.375C8.875 4.58007 7.41993 3.125 5.625 3.125C3.83007 3.125 2.375 4.58007 2.375 6.375C2.375 8.16993 3.83007 9.625 5.625 9.625Z" fill="#FFCE31" />
                                    <path d="M4.3001 14.275C4.0501 14.275 3.8001 14.225 3.5751 14.15C2.6251 13.825 1.9751 12.925 1.9751 11.9C1.9751 11.225 2.2751 10.55 2.7751 10.1C2.9001 9.97498 3.0501 9.87498 3.2001 9.79998L3.3501 9.24998C3.7251 7.87498 4.9751 6.92498 6.3751 6.92498C6.5251 6.92498 6.6501 6.92498 6.8251 6.94998L7.2001 7.02498L7.2501 6.89998C7.8251 5.84998 8.9001 5.22498 10.0501 5.22498C11.8251 5.22498 13.2501 6.69998 13.2501 8.49998V8.82498C13.3751 8.87498 13.5251 8.94998 13.6501 9.02498C14.5001 9.52498 15.0251 10.475 15.0251 11.475C15.0251 12.8 14.1501 13.925 12.8751 14.225C12.6751 14.275 12.4501 14.3 12.2501 14.3H4.3001V14.275Z" fill="white" />
                                    <path d="M10.075 5.7C11.575 5.7 12.8 6.95 12.8 8.5V8.725C12.175 8.775 11.6 9.025 11.15 9.425C11.475 9.225 11.875 9.125 12.3 9.125C12.45 9.125 12.6 9.15 12.75 9.175C13 9.225 13.225 9.325 13.45 9.45C14.125 9.85 14.6 10.6 14.6 11.475C14.6 12.575 13.85 13.525 12.825 13.75C12.65 13.8 12.5 13.8 12.3 13.8H4.3C4.1 13.8 3.9 13.775 3.725 13.7C2.975 13.45 2.45 12.725 2.45 11.9C2.45 11.325 2.7 10.825 3.1 10.475C3.275 10.325 3.475 10.2 3.7 10.1C3.9 10.025 4.1 10 4.325 10C4.925 10 5.45 10.3 5.8 10.75H5.825C5.425 10 4.7 9.475 3.825 9.4C4.15 8.25 5.175 7.4 6.4 7.4C6.525 7.4 6.65 7.425 6.775 7.425C7.025 7.45 7.25 7.525 7.475 7.625C8.3 8 8.9 8.8 9.05 9.75V9.725C9.05 8.65 8.5 7.7 7.7 7.15C8.15 6.275 9.025 5.7 10.075 5.7ZM10.075 4.75C8.825 4.75 7.65 5.4 6.975 6.5H6.9C6.7 6.475 6.55 6.45 6.375 6.45C4.775 6.45 3.325 7.55 2.9 9.125L2.775 9.5C2.65 9.575 2.55 9.65 2.45 9.75C1.85 10.275 1.5 11.075 1.5 11.9C1.5 13.125 2.275 14.225 3.425 14.6C3.7 14.7 4 14.75 4.3 14.75H12.275C12.525 14.75 12.75 14.725 13 14.675C14.475 14.325 15.5 13 15.5 11.475C15.5 10.3 14.875 9.2 13.875 8.625L13.725 8.55V8.525C13.725 6.425 12.1 4.75 10.075 4.75Z" fill="#75D6FF" />
                                </svg>
                                <p className="text-[12px] font-semibold">Cloudy</p>
                                <p className="text-gray-600 text-[10px]">Feels like 26</p>
                            </div>
                        </div>
                    </div>


                    {/* Second card */}
                    <div className="w-64 h-40 px-2 bg-white rounded-lg shadow-md">
                        <h2 className="text-xs font-medium ">Production Overview</h2>
                        <ReactApexChart options={radial.options} series={radial.series} type="radialBar" height={150} />
                    </div>
                </div>

                {/* Column container for the 2 cards in a column */}
                <div className="flex flex-col space-y-2 ">
                    {/* Third card */}
                    <div className="w-64 p-4 bg-white rounded-lg shadow-md">
                        <div className="flex  justify-between items-center ">
                            <h2 className="text-[10px] font-medium mb-4">Total Vertical Farm area</h2>
                        </div>
                        <p className="text-black font-bold text-xs">1200 width x 500 height.</p>
                    </div>

                    {/* Fourth card */}
                    <div className="w-64 p-4 bg-white rounded-lg shadow-md">
                        <h2 className="text-[10px] font-medium mb-4">Revenue</h2>
                        <p className="text-black text-xs">This is the fourth card.</p>
                    </div>
                </div>
            </div>

            <div className="flex space-x-4">
                <div className="w-1/3 h-45 mx-auto  bg-white rounded-lg shadow-lg">

                    <p className="text-[#000] text-xs px-4 pt-4">Monthly Yield Analysis</p>
                    <ReactApexChart options={data.options} series={data.series} type="area" height={200} />
                </div>
                <div className="w-1/3 h-45 mx-auto  bg-white rounded-lg shadow-lg"></div>
            </div>

        </div >
    );
}

