import MovieCard from "../components/MovieCard";

function Home(){
    const movies = [
        {id:1, title: "john whick " ,release_date: "2020"},
        {id:1, title: "john whick " ,release_date: "2020"},
        {id:1, title: "john whick " ,release_date: "2020"},
    ];
    const handleSearch = () => {}; 
    return(

        <div className="home">
        <form onSubmit={handleSearch}className="search-form">
            <input type="text" placeholder="Search from movies..." 
            className="search-input"/>
            <button type="submit" className="search-button">Search</button>
        </form>
            <div className="movies-grid">
                {movies.map((movie)=>(
                <MovieCard movie={movie} key={movie.id}/>
                ))}
            </div>
        </div>
    )
}
export default Home