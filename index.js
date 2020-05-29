function check(file){
    if (file.type == 'image/jpeg' || file.type == 'image/png'){
        return true
    }
    else{
        return false
    }
}


module.exports.Convert = (file) =>{
    if(check(file)){
        const reader = new FileReader()
        return new Promise((resolve, reject) => {
        reader.onload = () => {
            resolve(reader.result)
        }
        reader.readAsDataURL(file)
    })
    }
    else{
        return false
    }
    
}