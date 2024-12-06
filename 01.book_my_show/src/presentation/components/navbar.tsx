
import { FaPlus, FaSearch } from "react-icons/fa";
import { GrLanguage } from "react-icons/gr";
import { Link } from "react-router-dom";

interface SubmenuRoute {
    name: string,
    path: string,
}


function NavBar() {
    return (
        <div className="bg-c-midnight-zone">
            <nav className="wrapper-container flex justify-between bg-c-midnight-zone h-14" >
                <ul className="flex gap-8 items-center h-full text-white font-medium">
                    <Link to="/" className="h-full w-36"><img src="/src/shared/assets/tmdb.png" alt="logo" /></Link>
                    <MenuItemWithSubmenu name='Movies' submenuItems={[{
                        name: 'Popular',
                        path: 'movie',
                    },
                    {
                        name: 'Now Playing',
                        path: 'movie/now-playing',
                    },
                    {
                        name: 'Upcoming',
                        path: 'movie/upcoming',
                    }, {
                        name: 'Top Rated',
                        path: 'movie/top-rated',
                    }
                    ]} />
                    <MenuItemWithSubmenu name='TV Shows' submenuItems={[{ name: 'Popular', path: '#' }, { name: 'Airing Today', path: '#' }, { name: 'On TV', path: '#' }, { name: 'Top Rated', path: '#' }]} />
                    <MenuItemWithSubmenu name='People' submenuItems={[{ name: 'Popular People', path: '#' }]} />
                </ul>
                <ul className="flex gap-8 items-center h-full text-white">
                    <FaPlus />
                    <GrLanguage />
                    <li><a href="/">Login</a></li>
                    <li><a href="/">Join TMBD</a></li>
                    <FaSearch className="text-c-light-blue" />
                </ul>
            </nav>
        </div>
    );
}

function MenuItemWithSubmenu({ name, submenuItems }: { name: string, submenuItems: SubmenuRoute[] }) {
    return (
        <li className="relative group text-sm">
            {name}
            <ul className="absolute left-0 mt-0 w-36 py-2 bg-white text-black text-sm font-light border rounded-lg shadow-sm group-hover:block hidden">
                {
                    submenuItems.map((item) => (
                        <li key={item.name} className="hover:bg-gray-200 px-4 py-1"><Link to={item.path}>{item.name}</Link></li>
                    ))
                }
            </ul>
        </li>
    );
}

export default NavBar;