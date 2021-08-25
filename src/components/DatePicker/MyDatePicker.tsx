import DatePicker from 'react-datepicker';
import React from 'react';
import 'react-datepicker/dist/react-datepicker.css'
import './style.css'
interface IDate {
  id: string;
  date: null | Date;
  handleChange: (e: Date) => void;
}

const MyDatePicker: React.FC<IDate> = ({ id, date, handleChange }) => {
  return (
    <DatePicker
      id={id}
      showPopperArrow={false}
      dateFormat="yyyy-MM-dd"
      // maxDate={new Date()}
      selected={date}
      onChange={handleChange}
      placeholderText="Select date"
    />
  );

}

export default MyDatePicker;