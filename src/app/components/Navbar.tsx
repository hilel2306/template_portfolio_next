import { SwapThemeButton } from "./SwapThemeButton"




export const NavBar = () => {

    return (
        <div className="navbar  border rounded-full mt-4 bg-black">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Home</a></li>
                        <li><a>Projects</a></li>
                        <li><a>Blog</a></li>
                        <li><a>Contact</a></li>
                    </ul>
                </div>
                <button className="btn btn-ghost normal-case text-xl dark:text-white hidden md:inline-block lg:inline-block xl:inline-block">Hilel Kinane</button>
                <a className="btn btn-ghost normal-case text-xl dark:text-white md:hidden lg:hidden xl:hidden">Hilel K.</a>


            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><a>Home</a></li>
                    <li><a>Projects</a></li>
                    <li><a>Blog</a></li>
                    <li><a>Contact</a></li>
                </ul>
            </div>
            <div className="navbar-end space-x-6">
                <SwapThemeButton />
                <button className="btn btn-accent btn-outline rounded-full md:btn-md ">Contact me</button>
            </div>
        </div >
    )
}