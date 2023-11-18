import Image from "next/image"
import downloadIcon from '../../../public/downloadIcon.svg'
import { DownloadIcon } from "./DownloadIcon"



export const ProfileTitle = () => {

    return (
        <div className="py-4">
            <div className="flex flex-col justify-center gap-2 py-2">
                <h2 className=" text-center text-xl text-white font-bold  md:text-7xl lg:text-7xl ">HILEL KINANE</h2>
                <h1 className=" text-center text-2xl md:text-2xl lg:text-2xl">FULL-STACK WEB & MOBILE DEVELOPER </h1>
            </div>
            <div className="p-2">
                <button className="btn btn-accent w-full text-base">
                    CV
                    <DownloadIcon />
                </button>
                <p className="py-2 px-2">
                    I m a full-stack web and mobile developer and I work remotely from France.
                </p>
            </div>
        </div>
    )
}