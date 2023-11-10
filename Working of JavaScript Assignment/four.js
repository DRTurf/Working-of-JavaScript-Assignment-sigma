function variableDisplay(){
    
    console.log(a);//Cannot access 'a' before initialization
    console.log(b);//Cannot access 'b' before initialization
    console.log(c);//Cannot access 'c' before initialization

    let a=10;
    var b=15;
    const c=20;

    console.log(a);//10
    console.log(b);//15
    console.log(c);//20
}
variableDisplay()