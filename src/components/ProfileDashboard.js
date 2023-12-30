// ProfileDashboard.js
import React from "react";
import { useState } from "react";
import { FaPlus, FaShare, FaUpload } from "react-icons/fa"; // Import relevant icons
import { Link, useNavigate } from "react-router-dom";
import chart1 from './chart1.png';
import chart2 from './chart2.png';
import profile from './im.jpg';
import graph1 from './graph1.png';
import graph2 from './graph2.jpg';
// import graph3 from './graph3.jpg';
const ProfileDashboard = () => {
    const navigate = useNavigate();
    const profileDetails = {
        name: "Jyoti Saini",
        email: "jyoti@example.com",
        profilePhoto: profile, // Replace with actual profile photo URL
        bio: "Web Developer",
    };

    const accountDetails = {
        subscriptionPlan: "Pro Plan",
        subscriptionStatus: "Active",
    };
    const savedGraphs = [
        {
            title: "Graph 1",
            dateCreated: "2023-01-10",
            thumbnail: graph1, // Replace with actual thumbnail URL
        },
        {
            title: "Graph 2",
            dateCreated: "2023-02-15",
            thumbnail: graph2, // Replace with actual thumbnail URL
        },
        {
            title: "Graph 3",
            dateCreated: "2023-02-15",
            thumbnail: graph1, // Replace with actual thumbnail URL
        },
        // Add more graph entries as needed
    ];
    const handleAddButtonClick = () => {
        // Navigate to the "New Graph" page when the "Add" button is clicked
        navigate("/new-graph");
    };
    const handleEditButtonClick = () => {
        // Navigate to the "New Graph" page when the "Add" button is clicked
        navigate("/edit-profile");
    };
    const handleShareButtonClick = () => {
        // Navigate to the "New Graph" page when the "Add" button is clicked
        navigate("/graph-details");
    };
    return (
        <div className="mx-auto w-full grow p-4 md:mt-0 md:max-w-[888px] md:p-6 lg:max-w-screen-xl mt-[50px] dark:text-dark-label-1 bg-layer-bg dark:bg-dark-layer-bg ">

            <div className="flex flex-col md:flex-col  lg:flex-row gap-8 ">
                {/* First Column with custom classes */}
                <div className="shadow opacity-80 dark:shadow-opacity-90 bg-white dark:bg-black rounded-xl">
                    {/* <h2 className="text-2xl font-bold mb-4">Column 1</h2> */}

                    {/* Nested Div within the first column with custom classes */}
                    <div className="bg-layer-1 dark:bg-dark-layer-1 shadow-down-01 dark:shadow-dark-down-01 rounded-lg lc-lg:w-[300px] flex w-full  flex-col px-4 pt-[21px]">
                        <div className="  dark:text-dark-label-2 flex flex-col space-y-4">
                            <div className="flex space-x-4">
                                <div className="relative flex h-20 w-20 shrink-0">
                                    <img
                                        src={profileDetails.profilePhoto}
                                        alt="Profile"
                                        className="h-20 w-20 rounded-lg object-cover"
                                    />
                                </div>
                                <div className="flex flex-col" >
                                    <div className="flex items-center" translate="no">
                                        <div className=" dark:text-dark-label-1 break-all text-base font-semibold">
                                            {profileDetails.name}
                                        </div>

                                    </div>
                                    <div className=" flex items-center " translate="no">
                                        <div className=" dark:text-dark-label-3 text-xs ">
                                            <p className="text-gray-500">{profileDetails.email}</p>
                                        </div>
                                    </div>
                                    <div class="flex flex-1 items-end space-x-[5px] text-base">
                                        <p className="text-gray-500">{profileDetails.bio}</p>
                                    </div>
                                </div>




                            </div>
                            <button className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400  rounded-lg py-[7px] text-center font-medium" onClick={handleEditButtonClick}>
                                Profile </button>
                        </div>
                        {/* </div> */}
                        <div className="border-divider-3 dark:border-dark-divider-3 mb-4 mt-4 h-px w-full border-b mt-2.5"> </div>

                        <div>
                            <div className="text-base font-medium leading-6">Account details</div>
                            <div className="mt-4 flex flex-col space-y-4">
                                <div className="flex flex-col space-y-1">
                                    <div className="flex items-center space-x-2 text-[14px]">
                                        <div className="text-[18px]">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor" class="text-brand-orange dark:text-dark-brand-orange"><path fill-rule="evenodd" d="M11.394 2.074a2.5 2.5 0 011.212 0c.723.181 1.185.735 1.526 1.262.342.528.703 1.259 1.131 2.127l.392.795c.302.61.348.667.386.7a.498.498 0 00.086.063c.043.025.11.052.786.15l.877.128c.958.139 1.764.256 2.372.418.606.162 1.276.43 1.671 1.062a2.5 2.5 0 01.375 1.152c.052.744-.333 1.354-.728 1.841-.397.489-.98 1.058-1.674 1.733l-.634.619c-.489.476-.527.537-.548.583a.5.5 0 00-.033.101c-.01.05-.015.122.1.794l.15.873c.164.954.302 1.758.335 2.386.034.627-.014 1.346-.493 1.918-.263.314-.6.558-.98.712-.692.279-1.39.102-1.976-.124-.588-.226-1.309-.605-2.165-1.056l-.785-.412c-.603-.317-.674-.335-.724-.34a.497.497 0 00-.106 0c-.05.005-.12.023-.724.34l-.785.412c-.856.45-1.577.83-2.165 1.056-.585.226-1.284.403-1.976.124a2.5 2.5 0 01-.98-.712c-.48-.572-.527-1.291-.493-1.918.033-.628.171-1.431.335-2.386l.15-.873c.115-.672.11-.745.1-.794a.5.5 0 00-.033-.101c-.02-.046-.06-.107-.548-.583l-.634-.619c-.694-.675-1.277-1.244-1.674-1.733-.395-.487-.78-1.097-.728-1.841a2.5 2.5 0 01.375-1.152c.395-.633 1.065-.9 1.67-1.062.61-.162 1.415-.28 2.373-.418l.877-.128c.675-.098.743-.125.786-.15a.5.5 0 00.086-.062c.038-.034.084-.09.386-.701l.392-.795c.428-.868.789-1.599 1.131-2.127.341-.527.803-1.08 1.526-1.262z" clip-rule="evenodd"></path></svg>
                                        </div>
                                        <div className=" dark:text-dark-label-2">Subscription:</div>
                                        <div>Pro</div>
                                    </div>

                                </div>
                                <div class="flex flex-col space-y-1">
                                    <div className="flex items-center space-x-2 text-[14px]">
                                        <div className="text-[18px]">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor" class="text-blue-s dark:text-dark-blue-s"><path fill-rule="evenodd" d="M1.104 12.444a1 1 0 010-.888c.13-.26.37-.693.722-1.241A18.85 18.85 0 013.88 7.652C6.184 5.176 8.896 3.667 12 3.667s5.816 1.509 8.119 3.985c.79.85 1.475 1.756 2.055 2.663.352.548.593.98.722 1.24a1 1 0 010 .89c-.13.26-.37.692-.722 1.24a18.848 18.848 0 01-2.055 2.663c-2.303 2.476-5.015 3.985-8.119 3.985s-5.816-1.509-8.119-3.985a18.846 18.846 0 01-2.055-2.663c-.352-.548-.593-.98-.722-1.24zM12 16a4 4 0 110-8 4 4 0 010 8zm0-2a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"></path></svg>
                                        </div>
                                        <div className=" dark:text-dark-label-2">Status</div>
                                        <div>Active</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="flex space-x-4 mb-8 py-4">
                                <button className="bg-gradient-to-r from-blue-700 to-teal-500 hover:from-blue-700 hover:to-teal-400 text-white px-1 py-2 rounded flex items-center" onClick={handleAddButtonClick}>
                                    <FaPlus className="mr-1" />
                                    Add
                                </button>
                                <button className="bg-blue-600 text-white px-1 py-2 rounded flex items-center" onClick={handleShareButtonClick}>
                                    <FaShare className="mr-1" />
                                    Share
                                </button>
                                <button className="bg-gradient-to-r from-blue-500 to-teal-400 text-white px-1 py-2 rounded flex items-center">
                                    <FaUpload className="mr-1" />
                                    Upload
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
                {/* Second Column with the specified class */}
                <div className="lc-lg:max-w-[calc(100%_-_316px)] w-full ">
                    <div className="flex flex-col md:flex-col  lg:flex-row  shadow opacity-80 dark:shadow-opacity-90 bg-white dark:bg-black rounded-xl">
                        <div className="bg-layer-1 dark:bg-dark-layer-1 shadow-down-01 dark:shadow-dark-down-01 rounded-lg lc-lg:mt-0 lc-xl:hidden mt-4 flex h-[200px] w-full min-w-[200px] p-4">
                            <img
                                src={chart1}
                                alt="Graphs Shared"
                                className="object-cover"
                            />
                        </div>

                        <div className=" bg-layer-1 dark:bg-dark-layer-1 shadow-down-01 dark:shadow-dark-down-01 rounded-lg lc-xl:hidden my-4 flex h-[200px] w-full min-w-[200px] p-4">
                            <img
                                src={chart2}
                                alt="Graphs Shared"
                                className="object-cover "
                            />
                        </div>
                    </div>
                    <div className=" mx-auto my-4 py-4 shadow opacity-80 dark:shadow-opacity-90 bg-white dark:bg-black rounded-xl">
                        <table className="min-w-full bg-white mx-auto  rounded-xl">
                            <thead>
                                <tr className="bg-slate-300 ">
                                    <th className="py-1 px-2 ">Title</th>
                                    <th className="py-1 px-2 ">Date Created</th>
                                    <th className="py-1 px-2 ">Preview Thumbnail</th>
                                </tr>
                            </thead>
                            <tbody>
                                {savedGraphs.map((graph, index) => (
                                    <tr key={index} className={index % 2 !== 0 ? "bg-slate-100 " : ""}>
                                        <td className="py-1 px-2  border-inherit">{graph.title}</td>
                                        <td className="py-1 px-2 ">{graph.dateCreated}</td>
                                        <td className="py-1 px-2  ">
                                            <img
                                                src={graph.thumbnail}
                                                alt={`Thumbnail for ${graph.title}`}
                                                className="w-10 h-10 object-cover rounded flex mx-auto"
                                            />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    {/* </div> */}
                    <div className="mt-4">
                        <div className="bg-layer-1 bdark:bg-dark-layer-1 shadow-down-01 dark:shadow-dark-down-01 rounded-lg px-4 pb-4 pt-4">
                            <div className="space-y-[18px]">
                                <div className=" dark:text-dark-label-2 flex w-full items-center">
                                    <div className="cursor-pointer ">
                                        <div className=" bg-gray dark:bg-dark-fill-3 lc-md:space-x-2 flex items-center rounded-[5px] px-2 py-[10px] font-medium hover: dark:hover:text-dark-label-1">
                                            <span className="md:inline hidden  text-2xl"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor" class="text-blue-s dark:text-dark-blue-s"><path fill-rule="evenodd" d="M1.104 12.444a1 1 0 010-.888c.13-.26.37-.693.722-1.241A18.85 18.85 0 013.88 7.652C6.184 5.176 8.896 3.667 12 3.667s5.816 1.509 8.119 3.985c.79.85 1.475 1.756 2.055 2.663.352.548.593.98.722 1.24a1 1 0 010 .89c-.13.26-.37.692-.722 1.24a18.848 18.848 0 01-2.055 2.663c-2.303 2.476-5.015 3.985-8.119 3.985s-5.816-1.509-8.119-3.985a18.846 18.846 0 01-2.055-2.663c-.352-.548-.593-.98-.722-1.24zM12 16a4 4 0 110-8 4 4 0 010 8zm0-2a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"></path></svg></span>
                                            <span className="whitespace-nowrap">Recent Graphs</span>
                                        </div>
                                    </div>
                                    <div className="cursor-pointer">
                                        <div className=" dark:text-dark-label-1 bg-fill-3 dark:bg-dark-fill-3 lc-md:space-x-2 flex items-center rounded-[5px] px-2 py-[10px] font-medium hover: dark:hover:text-dark-label-1">
                                            <span className="md:inline hidden text-2xl"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor"><path fill-rule="evenodd" d="M20.995 4.824A3 3 0 0018 2H6l-.176.005A3 3 0 003 5v14l.005.176A3 3 0 006 22h12l.176-.005A3 3 0 0021 19V5l-.005-.176zM6 4h12l.117.007A1 1 0 0119 5v14l-.007.117A1 1 0 0118 20H6l-.117-.007A1 1 0 015 19V5l.007-.117A1 1 0 016 4zm5.718 9.304a1 1 0 01.063 1.321l-.085.093-2.062 2a1 1 0 01-1.3.08l-.093-.08-.937-.91A1 1 0 018.6 14.292l.095.082.241.234 1.367-1.325a1 1 0 011.414.022zM17 15a1 1 0 00-1-1h-2l-.117.007A1 1 0 0014 16h2l.117-.007A1 1 0 0017 15zm-5.282-7.696a1 1 0 01.063 1.321l-.085.093-2.062 2a1 1 0 01-1.3.08l-.093-.08-.937-.91A1 1 0 018.6 8.292l.095.082.241.234 1.367-1.325a1 1 0 011.414.022zM17 9a1 1 0 00-1-1h-2l-.117.007A1 1 0 0014 10h2l.117-.007A1 1 0 0017 9z" clip-rule="evenodd"></path></svg></span>
                                            <span className="whitespace-nowrap">collections</span>
                                        </div>
                                    </div>
                                    <div className="cursor-pointer">
                                        <div className=" dark:text-dark-label-1 bg-fill-3 dark:bg-dark-fill-3 md:space-x-2 flex items-center rounded-[5px] px-2 py-[10px] font-medium hover: dark:hover:text-dark-label-1">
                                            <span className="md:inline hidden text-2xl"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor"><path fill-rule="evenodd" d="M2 11.001a9.001 9.001 0 014.974-8.047A8.876 8.876 0 0110.998 2h.535c.018 0 .037 0 .055.002 3.934.218 7.204 3.02 8.15 6.753a1 1 0 01-1.94.49c-.734-2.9-3.27-5.065-6.294-5.245h-.51a6.876 6.876 0 00-3.12.74l-.004.002A7.001 7.001 0 004 11.003v.002a6.873 6.873 0 00.738 3.117c.206.407.271.871.185 1.32l-.387 2.022 2.022-.387c.448-.086.912-.021 1.32.185.44.222.9.395 1.373.518a1 1 0 11-.502 1.936 8.865 8.865 0 01-1.773-.669.067.067 0 00-.042-.006l-3.47.665a1 1 0 01-1.17-1.17l.665-3.47a.067.067 0 00-.006-.043A8.873 8.873 0 012 11.001zM17.004 20h-.005a3 3 0 01-2.68-1.658l-.004-.007A2.936 2.936 0 0114 17.004v-.206a2.995 2.995 0 012.773-2.797l.233-.001c.46-.001.917.107 1.33.315l.007.004A3 3 0 0120 17v.005c.001.425-.09.845-.268 1.232l-.133.29a1 1 0 00-.074.606l.093.485-.484-.093a1 1 0 00-.606.073l-.29.134a2.937 2.937 0 01-1.234.268zm-.296-8A4.995 4.995 0 0012 16.738v.262c-.002.777.18 1.543.53 2.237a5 5 0 006.542 2.313l2.303.441c.365.07.686-.25.616-.615l-.441-2.303a5 5 0 00-2.312-6.541A4.937 4.937 0 0017 12h-.292z" clip-rule="evenodd"></path></svg></span>
                                            <span className="whitespace-nowrap">Queries</span>
                                        </div>
                                    </div>
                           
                                    <a className="md:inline hidden text-label-3 dark:text-dark-label-3 hover: dark:hover:text-dark-label-2 text-xs font-medium ml-auto flex cursor-pointer items-center overflow-hidden pl-[50px]" href="#home">
                                        <div class="flex items-center overflow-auto" style={{ overflowX: 'hidden' }}>
                                        <span className="whitespace-nowrap">View all Papers</span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor" className="ml-1"><path fill-rule="evenodd" d="M7.913 19.071l7.057-7.078-7.057-7.064a1 1 0 011.414-1.414l7.764 7.77a1 1 0 010 1.415l-7.764 7.785a1 1 0 01-1.414-1.414z" clip-rule="evenodd"></path></svg>
                                        </div>
                                        </a>

                                </div>
                                <div className="flex flex-col">
                                    <a className="flex h-[56px] items-center rounded px-4 bg-fill-4 dark:bg-dark-fill-4" target="_blank" href="#home"><div class="flex flex-1 justify-between"><span class=" dark:text-dark-label-1 line-clamp-1 font-medium">Quantum Entanglement Patterns</span>
                                        <span className="md:inline hidden text-label-3 dark:text-dark-label-3 lc-md:inline  whitespace-nowrap">1 days ago</span></div></a>
                                    <a className="flex h-[56px] items-center rounded px-4 bg-fill-4 dark:bg-dark-fill-4" target="_blank" href="#home"><div class="flex flex-1 justify-between"><span class=" dark:text-dark-label-1 line-clamp-1 font-medium">Network Dynamics Using Temporal Graphs</span>
                                        <span className="md:inline hidden text-label-3 dark:text-dark-label-3 lc-md:inline  whitespace-nowrap">3 days ago</span></div></a>
                                    <a className="flex h-[56px] items-center rounded px-4 bg-fill-4 dark:bg-dark-fill-4" target="_blank" href="#home"><div class="flex flex-1 justify-between"><span class=" dark:text-dark-label-1 line-clamp-1 font-medium">Comparative Analysis of Graph Database</span>
                                        <span className="md:inline hidden text-label-3 dark:text-dark-label-3 lc-md:inline  whitespace-nowrap">4 days ago</span></div></a>

                                </div>
                                <div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  
};

export default ProfileDashboard;

