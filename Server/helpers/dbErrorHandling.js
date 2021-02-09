"use strict"

const uniqueMessage=error=>{
    let output;
    try{
        let fieldName=error.message.split(".$")[1];
        field=fieldName.split(" dub key")[0];
        field=field.sub.substring(0,field.lastIndexOf("_"));
        req.flash("error",[{
            message:"An account with this "+fieldName+" already exists"
        }])
        output=fieldName.charAt(0).toUpperCase()+fieldName.splice(1)+" already exists"
    }catch(err){
        output="already exists"
    }
    return output;

};
exports.errorHandler=error=>{
    let message=""
    if(error.code){
        switch(error.code){
            case 11000:
            case 11001:
                message=uniqueMessage(error);
                break;
            default:
                message="Something went wrong";
        }
    } else{
            for(let errorName in error.errorors){
                if(error.errorors[errorName].message){
                    message=error.errorors[errorName].message;
                }
            }
    }
    return message
};
