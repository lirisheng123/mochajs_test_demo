const  {expect} = require("chai")
const {add ,addError, addAsyn, addAsynError }  = require("../src/demo.js")

describe("test a+b in different enviroment", function(){

    function failTest() { //通过throw来使测试失败
        throw new Error("Expected promise to be rejected but it was  fulfilled");
    }

    it("simple  a+b", function(){
        expect(add(1, 3)).to.be.eq(4)
    })

    it("simple Error a+b", function(){
        expect(addError.bind(addError, 1, 3)).to.throw('a+b exception');
    })

    it("asyn  a+b", function(){ 
       return addAsyn(1, 3).then(result => {
                expect(result).to.be.eq(4);
        }
        );    
    })

    it("asyn Error  a+b", function(){ 
        return addAsynError(1, 3).then(result =>{
            if ( result instanceof Error){
                throw result
            }else{
                failTest()
            }
        }).catch(function (error) {
            expect(error.message).to.be.eq("a+b Asyn exception");
        });  
     })
})