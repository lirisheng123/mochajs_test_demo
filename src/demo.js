
//简单函数
function add(a, b){
   return a+b;
}


//简单异步函数
async  function addAsyn(a, b){
    // return a+b;
     throw new Error('addAsyn throw exception');
}

function test_addAsyn(a, b){

    return addAsyn(a, b)

}

module.exports = {
    "add": add,
    "addAsyn": addAsyn,
    "test_addAsyn": test_addAsyn
}
