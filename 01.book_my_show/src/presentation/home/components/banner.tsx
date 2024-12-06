

function Banner() {
    return (
        <div className="min-h-80 h-[30vh] w-full bg-[url('src/shared/assets/banner.jpg')] bg-cover bg-center  bg-no-repeat">
            {/* <div className="absolute min-h-80 h-[30%] w-full bg-c-cyan opacity-50" /> */}
            <div className="wrapper-container h-full flex flex-col justify-center">
                <h2 className="font-bold text-5xl text-white">Welcome.</h2>
                <h3 className="font-bold text-2xl text-white">Millions of movies, TV shows and people to discover. Explore now.</h3>
                <div className="my-5" />
                <SearchBar onClick={() => { }} />
            </div>
        </div>
    )
}

function SearchBar({ onClick }: { onClick: () => void }) {
    return (
        <div className="relative" >
            <input
                type="text"
                placeholder="Search for a movie, tv show, person...."
                className="w-full h-10 py-6 px-4 rounded-full font-light focus:outline-none"
            />
            <button
                onClick={onClick}
                className="absolute right-0 rounded-full bg-cyan-200 w-28 h-12 bg-gradient-to-r from-c-light-green to-c-light-blue text-white font-light text" >Search</button>
        </div>

    );
}

export default Banner;