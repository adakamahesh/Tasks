// 26 -> program to print star and number patterns right triangle, pyramid an diamond shape in js ?
function rightTriangle(rows){
    for(let i=1; i<=rows;i++){
        let stars='';
        for(let j=1;j<=i;j++){
            stars+='*';
        }
        console.log(stars);
    }
}
rightTriangle(5);

function pyramid(rows){
    for(let i=1; i<=rows;i++){
        let stars='';
        for(let j=rows-i;j>0;j--){
            stars=stars+' ';
        }
        for(let k=1; k<=2*i-1;k++){
            stars=stars+'*';
        }
        console.log(stars);
    }
}
pyramid(5)

function diamond(rows){
    for(let i=1; i<=rows;i++){
        let stars='';
        for(let j=rows-i;j>0;j--){
            stars=stars+' ';
        }
        for(let k=1; k<=2*i-1;k++){
            stars=stars+'*';
        }
        console.log(stars);
    }
    for (let i = rows - 1; i >= 1; i--) {
        let stars = '';
        
        for (let j = rows - i; j > 0; j--) {
            stars += ' ';
        }
        for (let k = 1; k <= 2 * i - 1; k++) {
            stars += '*';
        }
        console.log(stars);
    }

}
diamond(4)