const  {expect} = require("chai")
const {add ,addAsyn, test_addAsyn }  = require("../src/demo.js")

describe("test a+b in different enviroment", function(){
    it("simple  a+b", function(){
        expect(add(1, 3)).to.be.eq(4)
    })

    it("asyn  a+b", function(){ 
       return addAsyn(1, 3).then(result => {
                expect(result).to.be.eq(4);
        }
        );    
    })
      
    it("should bad pattern", function () {
                
        function failTest() { //通过throw来使测试失败
            throw new Error("Expected promise to be rejected but it was fulfilled");
        }
        function mayBeRejected(){
            return Promise.resolve(new Error("woo"));
        }
            return mayBeRejected().then(result =>{
                if ( result instanceof Error){
                    throw result
                }else{
                    failTest()
                }
            }).catch(function (error) {
                expect(error.message).to.be.eq("woo");
            });
        });    
})