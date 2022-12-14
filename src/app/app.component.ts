import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'data-table';
  dataList!: Array<any>; 

ngOnInit() {
  this.dataList = [
    {
      CategoryID: 1,
      CategoryName: 'Beverages',
      Description: 'Coffees, teas',
    },
    {
      CategoryID: 2,
      CategoryName: 'Condiments',
      Description: 'Sweet and savory sauces',
    },
    {
      CategoryID: 3,
      CategoryName: 'Confections',
      Description: 'Desserts and candies',
    },
    {
      CategoryID: 4,
      CategoryName: 'Cheeses',
      Description: 'Smetana, Quark and Cheddar Cheese',
    },
    {
      CategoryID: 5,
      CategoryName: 'Grains/Cereals',
      Description: 'Breads, crackers, pasta, and cereal',
    },
    {
      CategoryID: 6,
      CategoryName: 'Beverages',
      Description: 'Beers, and ales',
    },
    {
      CategoryID: 7,
      CategoryName: 'Condiments',
      Description: 'Selishes, spreads, and seasonings',
    },
    {
      CategoryID: 8,
      CategoryName: 'Confections',
      Description: 'Sweet breads',
    },
    { CategoryID: 9, CategoryName: 'Cheeses', Description: 'Cheese Burger' },
    {
      CategoryID: 10,
      CategoryName: 'Grains/Cereals',
      Description: 'Breads, crackers, pasta, and cereal',
    },
  ]
}

}