import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Data } from '../data';
import { GoogleChartInterface } from 'ng2-google-charts';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  totalConfirmed = 0;
  totalActive = 0;
  totalRecovered = 0;
  totalDeaths = 0;
  globalData: Data[];
  loading = true;
  pieChart: GoogleChartInterface = {
    chartType: 'PieChart'
  };
  columnChart: GoogleChartInterface = {
    chartType: 'ColumnChart'
  };

  constructor(private dataService: DataService) { }

  ngOnInit(): void {

    this.dataService.globalData
    .subscribe({
      next: (result) => {
        // console.log(result);
        this.globalData = result;
        result.forEach(cs => {
          if (!Number.isNaN(cs.confirmed)) {
            this.totalActive += cs.active;
            this.totalConfirmed += cs.confirmed;
            this.totalDeaths += cs.deaths;
            this.totalRecovered += cs.recovered;
          }
        });
        this.initChart('c');
      },
      complete: () => {
        this.loading = false;
      }
    });
  }


  initChart(e: string) {

    const datatable = [];
    datatable.push(['Country', 'Cases']);

    this.globalData.forEach(cs => {
      let value: number;
      if (e === 'c') {
        // if (cs.confirmed > 10000) {
          value = cs.confirmed;
        // }
      }
      if (e === 'r') {
        // if (cs.recovered > 10000) {
          value = cs.recovered;
        // }
      }
      if (e === 'd') {
        // if (cs.deaths > 10000) {
          value = cs.deaths;
        // }
      }
      if (e === 'a') {
        // if (cs.active > 10000) {
          value = cs.active;
        // }
      }
      // console.log(value);
      // console.log(value);
      datatable.push([cs.country, value]);
    });

    // console.log(datatable);

    this.pieChart = {
      chartType: 'PieChart',
      dataTable: datatable,
      options: {
        height: 500,
        animation: {
          duration: 1000,
          easing: 'out'
        }
      }
    };
    this.columnChart = {
      chartType: 'ColumnChart',
      dataTable: datatable,
      options: {
        height: 500,
        animation: {
          duration: 1000,
          easing: 'out'
        }
      }
    };
  }

  updateChart(e: HTMLInputElement) {
    // console.log(e.value);
    this.initChart(e.value);
  }

}
