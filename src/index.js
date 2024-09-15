
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if(matrix === undefined) {
        return [];
      }else{
        return matrix.reduce((acc,cur,i) => {
            if(i !== 0 && i % 2 !==0) {
              cur.reverse();
              acc.push(...cur);
              return acc;
            } else {
              acc.push(...cur);
              return acc;
            }
          }, []);
        }
}
