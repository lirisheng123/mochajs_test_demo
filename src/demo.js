
//同步简单函数
function add(a, b){
   return a+b;
}

//同步异常函数
function addError(a, b){
    throw Error("a+b exception")
}


//简单异步函数
async  function addAsyn(a, b){
    return a+b;
    
}

async function addAsynError(a, b){

    throw Error("a+b Asyn exception")

}


module.exports = {
    "add": add,
    "addError": addError,
    "addAsyn": addAsyn,
    "addAsynError": addAsynError
}
