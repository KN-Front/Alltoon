const week = [ {key: "mon" ,value : "월"}, 
            {key: "tue" ,value : "화"},
            {key: "wed" ,value : "수"},
            {key: "thu" ,value : "목"},
            {key: "fri" ,value : "금"},
            {key: "sat" ,value : "토"},
            {key: "sun" ,value : "일"},
            {key: "finished" ,value : "완결"},
            {key: "naverDaily" ,value : "Daily"},
            ];
            
export const findWeekValueByKey = (key: string) =>{
    let findKey = week.find(day => day.key === key);
    
    return findKey === undefined ? '' : findKey;
}

export const findWeekKeyByValue = (value: string) =>{
    return week.find(day => day.value === value);
}

export const getUpdateWeekArrayToString = (updateWeek: Array<string>) => {
    return updateWeek.map(updateDay => {
        return week.find((week) => week.key === updateDay)?.value;
    }).join(',');
}