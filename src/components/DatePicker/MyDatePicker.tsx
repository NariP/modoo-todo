import DatePicker from 'react-datepicker';
import React from 'react';
import 'react-datepicker/dist/react-datepicker.css'
import './style.css'
interface IDate {
  date: null | Date;
  handleChange: (e: Date) => void;
}

const MyDatePicker: React.FC<IDate> = ({ date, handleChange }) => {
  return (
    <DatePicker
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