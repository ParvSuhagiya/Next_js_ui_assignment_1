import studentData from "./data/studentData";
import Link from "next/link";

const departments = ["Business Administration", "Electrical Engineering", "Biotechnology", "Architecture"];

function Student() {
    const arr = studentData ; 

    return (
        <>
            <div className="w-[100vw] h-[18vw] bg-white font-black">
                <div className="w-[100%] text-[2.5vw] pl-[3vw] mt-[1vw] flex items-center font-bold h-[25%] text-red-700">
                    Students
                </div>
                <div className="w-[100%] text-[1.2vw] pl-[3vw] flex items-center text-black h-[20%] ">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi impedit labore ratione quod debitis illum molestias, in voluptas aliquid!
                </div>

                <div className="w-[100%] flex justify-start h-[30%] ">
                    <div className="w-[90%] justify-start items-center flex h-[100%]">
                        <p className="text-green-800 font-bold pl-[3vw]">
                            Search:
                        </p>
                        <input type="text" placeholder="Search Any thing..." className="w-[40%] ml-[0.5vw] h-[60%] border-2 border-black p-[0.5vw] text-[1vw]" />
                        <div className="w-[40%] flex justify-start items-center h-[70%] ml-[2vw] ">
                            <p className="text-green-800 font-bold">
                                Department:
                            </p>
                            <select name="" className="ml-[0.5vw] w-[50%] p-[0.3vw] h-[80%] border-2 border-black" id="">
                                <option value="">All department</option>
                                {
                                    departments.map((d) => {
                                        return (
                                            <option key={d} value={d}>{d}</option>
                                        )
                                    })
                                }
                            </select>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-[100vw] pl-[1vw] flex gap-[0vw] p-[0vw] flex-wrap bg-gray-200">
                {
                    arr.map((e) => {
                        return (
                            <div key={e.id} className="w-[32%] p-[0.5vw] h-[17vw] border-2 border-black bg-white">
                                <div className="w-[100%] flex items-center justify-between h-[30%] ">
                                    <div className="w-[12%] h-[70%] bg-orange-300 text-black flex justify-center items-center font-bold text-[1.1vw]">
                                        {e.initials}
                                    </div>
                                    <div className="w-[30%] h-[50%] flex items-center justify-center border border-black">
                                        {e.studentId}
                                    </div>
                                </div>
                                <div className="w-[100%] font-bold flex pl-[0.5vw] items-center h-[20%] text-purple-800">
                                    {e.name}
                                </div>
                                <div className="w-[100%] gap-[1vw] flex pl-[0.5vw] items-center h-[20%] ">
                                    <div className="w-[50%] h-[70%] flex text-[1vw] text-white bg-purple-600 font-bold items-center justify-center  ">
                                        {e.department}
                                    </div>
                                    <div className="w-[40%] h-[80%] flex items-center justify-center font-bold ">
                                        {e.studyYear}
                                    </div>
                                </div>
                                <Link className="w-[100%] flex items-center pl-[0.5vw] border-t-2 border-black font-bold text-red-600 mt-[1vw] h-[20%]" href={`/studentData/${e.id}`}>
                                    {"View >"}
                                </Link>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Student;