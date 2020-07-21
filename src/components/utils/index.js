const days = [
    'sunday',
    'monday',
    'tuesday',
    'wednesday',
    'thursday',
    'friday',
    'saturday'
];

//takes a schedule and returns [earliest start time, latest end time]
export function getTimeBoundries(schedule){
    const times = schedule.map(section => {
        return section.meetingTimes.map(mt => {
            return [mt.startTime, mt.endTime];
        });
    }).flat();
    return [
        Math.floor(Math.min(...(times.map(t => t[0]).filter(t => t > 0 && t < 2400)))),
        Math.ceil(Math.max(...(times.map(t => t[1]).filter(t => t > 0 && t < 2400))))
    ]
};

//finds the earliest start time and latest end time out of all the schedules to determine the start and end hours for the calendar
export function getCalendarHours(times){
    return [
        Math.floor(
            Math.min(
                ...(times.map(t => t[0]))
            ) / 100
        ),
        Math.ceil(Math.max(...(times.map(t => t[1]))) / 100)
    ]
};

export function getScheduleTimes(times){
    return [
        Math.floor(
            Math.min(
                ...(times.map(t => t[0]))
        )),
        Math.ceil(Math.max(...(times.map(t => t[1]))))
    ]
}

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

  export function getInstructors(schedule){
      const profs = schedule.map(section => {
          return section.meetingTimes.map(mt => {
              return mt.instructors.map(i => i.ID)
          }).flat()
      }).flat()
      return Array.from(new Set(profs));
  }

  export function getDays(schedule){
      let days = {
          sunday: false,
          monday: false,
          tuesday: false,
          wednesday: false,
          thursday: false,
          friday: false,
          saturday: false
      }
      schedule.forEach(section => {
          section.meetingTimes.forEach(mt => {
            Object.keys(days).forEach(k => days[k] = mt[k] || days[k]);
          });
      });
      return days;
  }

  function getMeetingTimes(schedule){
      return schedule.map(section => section.meetingTimes).flat();
  }

  export function getDensity(schedule){
      let times = Object.fromEntries(days.map(k => [k, []]));
      getMeetingTimes(schedule).forEach(mt => {
        days.forEach(d => {
            if(mt[d]){
                times[d] = [
                    ...times[d],
                    mt.startTime,
                    mt.endTime
                ]
            }
        });
      });
      const densityByDay = Object.keys(times)
        .filter(k => times[k].length > 0)
        .map(k => 
            //adds a weight to the density value based on the number of classes on that day
            (Math.max(...times[k]) - Math.min(...times[k])) * (times[k].length / 2 / 10) 
        );
      return densityByDay.reduce((acc, value) => acc + value) / densityByDay.length;
  }