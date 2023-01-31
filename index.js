// code your solution here
function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(whatdo = "go to the office") {
    return `This Monday, I will ${whatdo}.`

}

function wrapAdjective(sign = "*") {
    const innerFunc = function (para1 = "special") {
        return `You are ${sign}${para1}${sign}!`;
    }
    return innerFunc;


}