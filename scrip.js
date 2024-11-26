const displayData=(data)=>{
    output.value+=data
}

const removeAll=()=>{
    output.value=""
    output.placeholder="0"
}

const backspace=()=>{
    output.value=output.value.slice(0,-1)
}

const calculate=()=>{
    try{
        console.log("inside the try");

        output.value=eval(output.value)

    }
    catch(err){
        console.log("inside the catch");
        

        console.log(err);
        output.placeholder="invalid expression"
        output.value=""
        
    }
    finally{
        console.log("inside the finally");
        
    }
}