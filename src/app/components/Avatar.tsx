import Image from 'next/image'
import profilePicture from '../../../public/me.png'

export const Avatar = () => {
    return (
        <div className="avatar">
            <div className="rounded-full ring ring-accent ring-offset-base-100 ring-offset-2 ">
                <Image
                    alt="Profile picture"
                    // Importing an image will
                    // automatically set the width and height
                    src={profilePicture}
                    sizes="80%"
                    // Make the image display full width
                    priority

                />
            </div>
        </div>
    )
}