const week = [ {key: "mon" ,value : "월"}, 
            {key: "tue" ,value : "화"},
            {key: "wed" ,value : "수"},
            {key: "thu" ,value : "목"},
            {key: "fri" ,value : "금"},
            {key: "sat" ,value : "토"},
            {key: "sun" ,value : "일"}];

export const findWeekValueByKey = (key: string) =>{
    let findKey = week.find(day => day.key === key);
    
    return findKey === undefined ? '' : findKey;
}

export const findWeekKeyByValue = (value: string) =>{
    return week.find(day => day.value === value);
}