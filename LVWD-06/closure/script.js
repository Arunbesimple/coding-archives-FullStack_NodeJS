
function outer(arg1,p){
    let var1 =10
    let x=10;
    console.log(arguments[1])
    function inner(arg2) {
        let var2 =20
        let x=20;
        console.log(x)
        console.log(arg1,var1,arg2,var2,x)
        console.log(arguments[1])
    }
    return inner
    //return 10
}
let x= outer('param1',11)

//type of x='function'
//type of x=number
//scope of arg1 and var1 are from 2 to 10
x('param2')
