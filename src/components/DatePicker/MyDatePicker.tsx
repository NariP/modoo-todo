import DatePicker from 'react-datepicker';
import React from 'react';
import 'react-datepicker/dist/react-datepicker.css'

interface IDate {
  date: null | Date;
  handleChange: (e: Date) => void;
}

const MyDatePicker: React.FC<IDate> = ({ date, handleChange }) => {
  return (

    <DatePicker
      dateFormat="yyyy-MM-dd"
      selected={date}
      onChange={handleChange}
      placeholderText="Select date"
    />
  );

}

export default MyDatePicker;