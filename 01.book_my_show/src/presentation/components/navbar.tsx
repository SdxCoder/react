
import { FaPlus, FaSearch } from "react-icons/fa";
import { GrLanguage } from "react-icons/gr";

function NavBar() {
    return (
        <nav className="flex justify-between bg-c-midnight-zone h-14 w-full px-[10%]" >

            <ul className="flex gap-8 items-center h-full text-white font-medium">
                <a href="/" className="h-full w-36"><img src="/src/shared/assets/tmdb.png" alt="logo" /></a>
                <MenuItemWithSubmenu name='Movies' submenuItems={['Popular', 'Now Playing', 'Upcoming', 'Top Rated']} />
                <MenuItemWithSubmenu name='TV Shows' submenuItems={['Popular', 'Airing Today', 'On TV', 'Top Rated']} />
                <MenuItemWithSubmenu name='People' submenuItems={['Popular People']} />
            </ul>
            <ul className="flex gap-8 items-center h-full text-white">
                <FaPlus />
                <GrLanguage />
                <li><a href="/">Login</a></li>
                <li><a href="/">Join TMBD</a></li>
                <FaSearch className="text-c-cyan" />
            </ul>
        </nav>
    );
}

function MenuItemWithSubmenu({ name, submenuItems }: { name: string, submenuItems: string[] }) {
    return (
        <li className="relative group">
            <a href="/">{name}</a>
            <ul className="absolute left-0 mt-0 w-36 py-2 bg-white text-black text-sm font-light border rounded-lg shadow-sm group-hover:block hidden">
                {
                    submenuItems.map((item) => (
                        <li className="hover:bg-gray-200 px-4 py-1"><a href="/">{item}</a></li>
                    ))
                }
            </ul>
        </li>
    );
}

export default NavBar;