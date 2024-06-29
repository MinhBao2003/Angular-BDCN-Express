import { Component } from '@angular/core';
import { ProductinformationService } from 'src/app/server/productinformation/productinformation.service';
import { ProductInformation } from 'src/interface/productinformation.model';
import { BsDatepickerDirective } from 'ngx-bootstrap/datepicker';
import { ViewChild } from '@angular/core';
import { CalendarService } from '../../../server/calendar/calendar.service';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-vitri',
  templateUrl: './vitri.component.html',
  styleUrls: ['./vitri.component.css']
})
export class VitriComponent {
  selectedLocation: string = '';
  hoten: string=''; // Định nghĩa thuộc tính hoten với kiểu string
  //sdt: string=''; // Định nghĩa thuộc tính sdt với kiểu string
  email: string=''; // Định nghĩa thuộc tính email với kiểu string
  ngay: string=''; // Định nghĩa thuộc tính ngay với kiểu string

  hotenError: string | null = null;
  gmailError: string | null = null;
  sdtError: string | null = null;
  sdt: number | null = null;
  gmailFormatError: string | null = null;
  sdtFormatError: string | null = null;
  selectedLocationError: string | null = null;
  selectedTimeError: string | null = null;
  ngayError: string | null = null;
  constructor(private calendarService: CalendarService) {
  }
  onLocationChange() {
    // Thực hiện các thao tác khi địa điểm được chọn thay đổi
    console.log('Selected Location:', this.selectedLocation);
  }
  selectedTime: string = '';

  onTimeChange() {
    // Thực hiện các thao tác khi thời gian được chọn thay đổi
    console.log('Selected Time:', this.selectedTime);
  }

  saveAppointment() {
    this.hotenError = null;
    this.gmailError = null;
    this.sdtError = null;
    this.selectedLocationError = null;
    this.selectedTimeError = null;
    this.ngayError = null;
    // Validate inputs
    if (this.hoten.trim() === '') {
      this.hotenError = 'Tên đăng nhập không được để trống';
      return;
    }

    if (this.selectedLocation.trim() === '') {
      this.selectedLocationError = 'Vui lòng chọn địa điểm';
      return;
    }

    if (this.selectedTime.trim() === '') {
      this.selectedTimeError = 'vui lòng chọn thời gian';
      return;
    }

    if (this.ngay.trim() === '') {
      this.ngayError = 'vui lòng nhập ngày';
      return;
    }

    const ngayRegex = /^\d{2}\/\d{2}\/\d{4}$/;
    if (!ngayRegex.test(this.ngay)) {
      this.ngayError = 'Sai định dạng ngày, vui lòng nhập theo định dạng dd/mm/yyyy';
      return;
    }


    if (this.email.trim() === '') {
      this.gmailError = 'Email không được để trống';
      return;
    }

    if (!this.email.includes('@')) {
      this.gmailError = 'Email thiếu ký tự @';
      return;
    }

   // Validate Gmail format
const customEmailRegex = /^[a-zA-Z0-9+]+@gmail\.com$/;
if (!customEmailRegex.test(this.email)) {
  this.gmailError = 'Định dạng email không đúng';
  return;
}


    if (this.sdt === null) {
      this.sdtError = 'Số điện thoại không được để trống';
      return;
    }

    if (this.sdt.toString().length !== 10) {
      this.sdtError = 'Số điện thoại phải có 10 chữ số';
      return;
    }

    if (isNaN(this.sdt)) {
      this.sdtError = 'Số điện thoại chỉ được nhập số';
      return;
    }
    // Validate phone number format
  if (isNaN(this.sdt)) {
    this.sdtFormatError = 'Số điện thoại chỉ được nhập số';
    return;
  }


    const appointmentData = {
      hoten: this.hoten,
      sdt: this.sdt,
      email: this.email,
      diachi: this.selectedLocation,
      ngay: this.ngay,
      gio: this.selectedTime
    };

    console.log('Dữ liệu gửi đi:', appointmentData); // Kiểm tra dữ liệu trước khi gửi

    this.calendarService.saveAppointment(appointmentData)
      .subscribe(response => {
        console.log('Lịch hẹn đã được lưu thành công:', response);
        // Thực hiện các hành động cần thiết sau khi lưu
        // Hiển thị thông báo khi đặt lịch thành công
        alert('Đặt lịch thành công!');
      });
  }


}
