import React from 'react';
import './Reservation.css';  

const Reservation = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Xử lý logic đặt bàn ở đây
    console.log('Form submitted');
  };

  return (
    <div className="container">
      <div className="img-container">
        <img src="/assets/rs.png" alt="Restaurant" />
      </div>

      <div className="form-booktable">
        <h2>Đặt bàn</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Tên của bạn..." />
          <input type="text" placeholder="Số điện thoại của bạn..." />
          <select>
            <option>Số lượng người</option>
            <option>1-4 người</option>
            <option>5-10 người</option>
            <option>10-15 người</option>
            <option>15-20 người</option>
            <option>Trên 20 người</option>
          </select>

          <select>
            <option>Chọn giờ</option>
            <option>10:00 AM</option>
            <option>11:00 AM</option>
            <option>12:00 PM</option>
            <option>13:00 PM</option>
            <option>14:00 PM</option>
            <option>15:00 PM</option>
            <option>16:00 PM</option>
            <option>17:00 PM</option>
            <option>18:00 PM</option>
            <option>19:00 PM</option>
            <option>20:00 PM</option>
            <option>21:00 PM</option>
          </select>

          <input type="date" title='chọn ngày' />
          <button type="submit">Đặt bàn</button>
        </form>
      </div>
    </div>
  );
};

export default Reservation;