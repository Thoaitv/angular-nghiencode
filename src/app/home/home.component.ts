import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public name = 'Thoai';
  public age = 15;
  public traiCay = ['tao', 'le'];
  public traiCay2 = [
    {
      ten: 'Tao',
      gia: 12,
      sale: true,
    },
    {
      ten: 'Le',
      gia: 10,
      sale: true,
    },
    {
      ten: 'Nho',
      gia: 7,
      sale: false,
    },
  ];
  public cities = [
    {
      city: 'Chọn thành phố',
      district: [''],
    },
    {
      city: 'Hà Nội',
      district: ['Hà Đông', 'Cầu Giấy'],
    },
    {
      city: 'Thái Nguyên',
      district: ['Phú Bình', 'Phổ Yên'],
    },
  ];
  public districts: string[] = ['Quận, Huyện'];

  constructor() {}

  ngOnInit(): void {
    console.log(`trai cay = ${this.traiCay}`);
    console.log('tria cay', this.traiCay);
  }
  /**
   * resetName
   */
  public resetName() {
    console.log('Reset');
    this.name = '';
  }
  public changeCity(event: any) {
    const city = event.target.value;
    console.log('city - ', city);

    if (!city) {
      return;
    }

    // Cách 1
    //   const search = this.cities.filter((data) => data.city === city);
    //   console.log(search);
    //   if (search && search.length > 0) {
    //     this.districts = search[0].district;
    //   }

    // Cách 2:
    this.districts =
      this.cities.find((data) => data.city === city)?.district || [];
  }
}
