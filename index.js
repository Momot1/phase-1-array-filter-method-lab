// Code your solution here
const findMatching = ((names, str) => {
    return names.filter(function (test){
        return str.toLowerCase() === test.toLowerCase()
    })
})

const fuzzyMatch = ((names, str) =>{
    return names.filter(function(test){
        if(str.charAt(0) === test.charAt(0)){
            return str.charAt(0)
        }
    })
})

const matchName = ((driver, str) =>{
    return driver.filter(element => {
        if(element.name === str){
            return driver
        }
    })
})