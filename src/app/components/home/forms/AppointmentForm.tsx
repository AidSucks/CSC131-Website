'use client';

import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import {DateCalendar} from "@mui/x-date-pickers/DateCalendar";
import dayjs from "dayjs";
import {useState} from "react";
import {AppointmentTimeslot, AvailabilityRule, UnavailabilityRule} from "@/app/lib/zod-schemas";
import {PickerValidDate} from "@mui/x-date-pickers";
import {ToggleButton, ToggleButtonGroup} from "react-bootstrap";
import {createCustomerAppointment} from "@/app/lib/actions";

export function AppointmentForm(
  {availability, unavailability}: {availability: (AvailabilityRule | null)[], unavailability: UnavailabilityRule[]}
){

  const [selectedDate, setSelectedDate] = useState(dayjs().add(1, "day"));
  const [currentRule, setCurrentRule] = useState(availability[selectedDate.day()]);
  const [selectedTime, setSelectedTime] = useState(0);

  const disableUnavailableDays = (date: PickerValidDate): boolean => {

    const rule = availability[dayjs(date).day()];

    if(!rule || rule.allowedAppointments.length === 0) return true;

    if(unavailability.length === 0) return false;

    let disabled = false;

    unavailability.forEach(
      (rule) => {

        if(disabled) return;

        const start = dayjs(rule.startDate);
        const end = dayjs(rule.endDate);

        disabled = (date.isSame(start) || date.isAfter(start)) && (date.isSame(end) || date.isBefore(end));
      }
    );

    return disabled;
  }

  const getFormattedTime= (timeslot?: AppointmentTimeslot) => {

    const day = dayjs(selectedDate);

    if(!timeslot) timeslot = currentRule?.allowedAppointments[selectedTime];

    const startTime =
      day
        .set('hour', timeslot?.startHour ?? 0)
        .set('minute', timeslot?.startMin ?? 0)
        .format('h:mm A');

    const endTime =
      day
        .set('hour', timeslot?.endHour ?? 0)
        .set('minute', timeslot?.endMin ?? 0)
        .format('h:mm A');

    return startTime + " - " + endTime;
  }

  const appointmentStart = () => {
    const timeslot = currentRule?.allowedAppointments[selectedTime];
    return dayjs(selectedDate).set("hour", timeslot?.startHour ?? 0).set("minute", timeslot?.startMin ?? 0).toISOString();
  }

  const appointmentEnd = () => {
    const timeslot = currentRule?.allowedAppointments[selectedTime];
    return dayjs(selectedDate).set("hour", timeslot?.endHour ?? 0).set("minute", timeslot?.endMin ?? 0).toISOString();
  }

  return (

    <form action={createCustomerAppointment}  className="container py-5" style={{maxWidth: '900px'}}>
      <div className="row g-3">
        <div className="col-12">
          <input name="name" placeholder="Name"
                 className="form-control border-0 bg-light px-4" style={{height: '55px'}} required />
        </div>
        <div className="col-12">
          <input name="email" type="email" placeholder="Email"
                 className="form-control border-0 bg-light px-4" style={{height: '55px'}} required />
        </div>
        <div className="col-12">
          <input name="phoneNumber" type="tel" placeholder="Phone Number (Optional)"
                 className="form-control border-0 bg-light px-4" style={{height: '55px'}} />
        </div>
        <div className="col-12">
                      <textarea name="comment" placeholder="Comments (Optional)"
                                className="form-control border-0 bg-light px-4" rows={3}/>
        </div>
      </div>

      <div className="col-12">
        <label className="mt-4 px-4" >Select Date and Time:</label>
      </div>

      <div className="col-12">
        <input hidden readOnly name={"appointmentStart"} value={appointmentStart()}/>
        <input hidden readOnly name={"appointmentEnd"} value={appointmentEnd()}/>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateCalendar
            disablePast
            disableHighlightToday
            minDate={dayjs().add(1, "day")}
            maxDate={dayjs().add(3, "months")}
            shouldDisableDate={disableUnavailableDays}
            value={selectedDate}
            onChange={value => {
              const d = dayjs(value);
              setSelectedDate(d);
              setCurrentRule(availability[d.day()]);
              setSelectedTime(0);
            }}
          />
        </LocalizationProvider>
      </div>

      <div className="mx-4 col-12">
        <h6>Available Appointment Times:</h6>
        <ToggleButtonGroup type={"radio"} name={"timeSlot"} value={selectedTime} onChange={(value: number) => setSelectedTime(value)}>
          {currentRule?.allowedAppointments.map((slot, index) => {
              return (
                <ToggleButton
                  key={index}
                  id={"btn-" + index}
                  value={index}
                  variant={"outline-primary"}>
                  {getFormattedTime(slot)}
                </ToggleButton>
              );
          })}
        </ToggleButtonGroup>
      </div>

      <div className="col-12 py-5">
        <label className="mt-4 px-4">Selected Date:</label>
        <h5 className="mt-2 px-5" id="date-display">{selectedDate.format("dddd, MMMM D")}</h5>

        <label className="mt-4 px-4">Selected Time:</label>
        <h5 className="mt-2 px-5" id="time-display">
          {getFormattedTime()}
        </h5>
      </div>

      <div className="col-12">
        <button type="submit" className="btn btn-primary py-3" style={{minWidth: '50%', marginLeft: '25%'}}>Book Appointment</button>
      </div>
    </form>
  );
}