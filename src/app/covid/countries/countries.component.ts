import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Data } from '../data';
import { TimeData } from 'src/app/time-data';
import { GoogleChartInterface } from 'ng2-google-charts';
import { merge } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {

  totalConfirmed = 0;
  totalActive = 0;
  totalRecovered = 0;
  totalDeaths = 0;
  globalData: Data[];
  countries: string[] = [];
  timeDate;
  loading = true;
  selectedCountryData: TimeData[];
  lineChart: GoogleChartInterface = {
    chartType: 'LineChart'
  };

  constructor(private dataService: DataService) { }

  ngOnInit(): void {

    merge(
      this.dataService.timeData.pipe(
        map(result => {
          this.timeDate = result;
        })
      ),
      this.dataService.globalData.pipe(
        map(result => {
        this.globalData = result;
        this.globalData.forEach(cs => {
          this.countries.push(cs.country);
        });
        })
      )
    ).subscribe({
      complete: () => {
        this.updateValues('India');
        this.loading = false;
      }
    });
  }

  updateChart() {
    const datatable = [];
    datatable.push(['Date', 'Cases']);
    this.selectedCountryData.forEach( cs => {
      datatable.push([cs.date, cs.cases]);
    });

    this.lineChart = {
      chartType: 'LineChart',
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

  updateValues(country: string) {
    this.globalData.forEach(cs => {
      if (cs.country === country) {
        this.totalActive = cs.active;
        this.totalConfirmed = cs.confirmed;
        this.totalDeaths = cs.deaths;
        this.totalRecovered = cs.recovered;
      }
    });
    this.selectedCountryData = this.timeDate[country];
    // console.log(this.selectedCountryData);
    this.updateChart();
  }

}
