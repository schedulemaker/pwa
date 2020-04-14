//takes a schedule and returns [earliest start time, latest end time]
export function getTimeBoundries(schedule){
    const times = schedule.map(section => {
        return section.meetingTimes.map(mt => {
            return [mt.startTime, mt.endTime];
        });
    }).flat();
    return [
        Math.floor(Math.min(...(times.map(t => t[0]))) /100),
        Math.ceil(Math.max(...(times.map(t => t[1]))) / 100)
    ]
};

//takes a start or end time and converts it to [hours, minutes] for Javascript Date class
export function getHoursMinutes(time){
    return [Math.floor(time / 100), time % 100];
};

//takes a Date object and converts it into 0-2400 number that the schedules use
export function dateToTime(date){
    return (date.getHours() + 1) * 100 + date.getMinutes();
};


export function not(a, b) {
    return a.filter((value) => b.indexOf(value) === -1);
  };
  
export function intersection(a, b) {
    return a.filter((value) => b.indexOf(value) !== -1);
  };
  
export function union(a, b) {
    return [...a, ...not(b, a)];
  };