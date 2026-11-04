function average(list) {
 let sum = 0;
 for (const m of list) {
 sum += m.rating;
 }
 return sum / list.length;
}
console.log("평균:", average(movies));

function best(list) {
     let top = list[0];
    for (const m of list) {
        if (m.rating > top.rating) {
            top = m;
        }
    }
 return top;
}
console.log("최고:", best(movies).title);

const filterByRating = (list, min) => { return list.filter(m => m.rating >= min);}
console.log("8점 이상:", filterByRating(movies, 8).length + "편");

const sortByRating = (list) => { return [...list].sort((a, b) => b.rating - a.rating)}
const sorted = sortByRating(movies);
console.log("정렬 1위:", sorted[0].title, "/ 원본 1번:", movies[0].title)

const yearsSince = (dateStr)=> {return new Date().getFullYear() - new Date(dateStr).getFullYear();}
console.log(yearsSince(movies[0].date) + "년 전 개봉");

const posterUrl = (path, size)=>{ return "https://image.tmdb.org/t/p/" + size + path;};
console.log(posterUrl(movies[0].poster, "w342"));

document.title = "내 영화 " + movies.length + "편"
console.table(sortByRating(movies));
document.getElementById("out").textContent = `평균 ${average(movies).toFixed(1)}점, 최고 ${best(movies).title}`;
