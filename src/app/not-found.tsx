import Link from "next/link";

function Not() {
    return (
        <div className="w-[100vw] flex flex-col justify-center items-center h-[60vh] border ">
            <div className="w-[45%] h-[4vw] text-[5vw] m-20 flex justify-center items-center font-bold">
                Not Found
            </div>
            <div className="font-bold flex flex-col">
                <Link href={"/"}>
                    Student Page
                </Link>
                <Link href={"/department"}>
                    Department Page
                </Link>
            </div>
        </div>
    )
}


export default Not; 