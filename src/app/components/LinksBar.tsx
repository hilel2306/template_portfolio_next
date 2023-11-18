
import Image from "next/image"
import GithubIcon from "../../../public/github-142-svgrepo-com.svg"
import LinkedInIcon from "../../../public/linkedin-round-svgrepo-com.svg"
import Malticon from "../../../public/malt-svgrepo-com.svg"




export const LinksBar = () => {

    return (
        <ul className="flex flex-col justify-center items-end gap-3">
            <li ><Image src={GithubIcon} alt={"Github link"} height={24} width={24} /></li>
            <li ><Image src={LinkedInIcon} alt={"LinkedIn link"} height={24} width={24} /></li>
        </ul>
    )
}