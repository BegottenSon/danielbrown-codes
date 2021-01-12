import all from "./posts/*.md";

const posts = all;

//SORT POST BY DATE IN DESCENDING ORDER
posts.sort(function(postA, postB) {
    let a = new Date(postA.metadata.date),
        b = new Date(postB.metadata.date);
    if (a > b) 
        return -1;
    if ( a < b)
        return 1;
    return 0
})

export default posts;