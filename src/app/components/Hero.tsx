import { Avatar } from "./Avatar"
import { LinksBar } from "./LinksBar"
import { ProfileTitle } from "./ProfileTitle"



export const Hero = () => {


    return (
        <div className="w-screen pt-32 bg-gradient-radial">
            <div className="grid grid-rows-1 grid-cols-3 px-4">
                <div></div>
                <Avatar />
                <LinksBar />
            </div>
            <ProfileTitle />
        </div>
    )

}