
const FEATURED_API =
    "https://api.themoviedb.org/3/trending/all/week?api_key=2d248459fa33105bff866bf17b092b83";

const fetchData = async () => {
    let resData: any;
    await fetch(FEATURED_API)
        .then((res) => res.json())
        .then((data) => {
            resData = data.results
        });
    return resData;
}
export { fetchData };

