// import moment from 'moment';
import moment from 'moment';
const daysOfWeek = {
    'sunday': 0,
    'monday': 1,
    'tuesday': 2,
    'wednesday': 3,
    'thursday': 4,
    'friday': 5,
    'saturday': 6
};

const today = moment();

//gets the moment for the start of the week for the given index
function getWeekStart(){
    return moment(today).subtract(today.day(), 'd');
};

//takes a int from 0 - 2400 and converts it to [hour, minute]
function mapTime(time){
    return [Math.floor(time / 100), time % 100]; 
};

//Takes a single meeting time and maps it to startDate and endDate for the AppointmentModel
function createAppointment({startTime, endTime}, momentObj){
    let [startHour, startMinute] = mapTime(startTime);
    let [endHour, endMinute] = mapTime(endTime);
    return {
        startDate: moment(momentObj).hour(startHour).minute(startMinute).second(0).toDate(),
        endDate: moment(momentObj).hour(endHour).minute(endMinute).second(0).toDate()
    }
}

//takes a single meetingTime and creates an array of appointments for each day
function mapMeetingTime(meetingTime, weekStart){
    let appts = [];
    Object.keys(daysOfWeek).forEach(day => {
        if (meetingTime[day]){
            appts.push(createAppointment(meetingTime, moment(weekStart).add(daysOfWeek[day], 'd')));
        } 
    });
    return appts.map(appt => {
        return {
            ...appt,
            location: `${meetingTime.building} ${meetingTime.room}`,
            instructors: meetingTime.instructors
        };
    });
};

//takes a single section and creates an array of appointments for each meetingTime
function mapSections(section){
    const weekStart = getWeekStart();
    const appts = section.meetingTimes.map(meetingTime => mapMeetingTime(meetingTime, weekStart)).flat();
  return appts.map(appt => {
    return {
        ...appt,
        title: `${section.courseName} ${section.title}`,
        campus: section.campus,
        crn: section.crn
    }
  });
};

//takes a schedule and returns an array of appointments
export function mapSchedule(schedule){
  const appts = schedule.map(mapSections).flat();
  return appts;
};