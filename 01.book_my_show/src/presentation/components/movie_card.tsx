

interface MovieCardProps {
    image: string,
    rating: number,
    title: string,
    releaseDate: string,
}

function MovieCard(props: MovieCardProps) {
    const marginLeft = 'ml-2';
    return (
        <div className="min-w-40">
            <div className="w-full h-60 rounded-lg bg-center bg-cover bg-no-repeat relative mb-[1rem]"
                style={{ backgroundImage: `url(${props.image})` }}>
                <div className={`absolute flex justify-center ${marginLeft} bottom-[-1rem] rounded-full w-10 h-10 bg-c-midnight-zone`}>
                    <div className="flex justify-center rounded-full w-9 h-9 bg-c-light-green self-center">
                        <div className="flex justify-center items-center rounded-full w-8 h-8 bg-c-midnight-zone self-center">
                            <p className="text-white text-sm font-medium">{props.rating}<span className="text-[0.5rem] align-top">%</span> </p>
                        </div>
                    </div>
                </div>
            </div>
            <p className={`${marginLeft} font-bold text-sm`}>{props.title}</p>
            <p className={`${marginLeft} text-c-gray text-sm`}>{props.releaseDate}</p>
        </div>
    );
}

export default MovieCard;