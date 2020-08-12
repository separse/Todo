import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Data } from './data';
import { TimeData } from '../time-data';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  // tslint:disable-next-line:max-line-length
  dataUrl = 'https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_daily_reports/08-09-2020.csv';
  timeSeries = 'https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_confirmed_global.csv';

  constructor(private http: HttpClient) {}

  get timeData() {
    return this.http.get(this.timeSeries, {responseType: 'text'}).pipe(map(result => {
      const rows = result.split('\n');
      const header = rows[0];
      const dates = header.split(/,(?=\S)/);
      const mainData = {};
      dates.splice(0, 4);
      rows.splice(0, 1);
      rows.forEach(row => {
        const cols = row.split(/,(?=\S)/);
        const coun = cols[1];
        cols.splice(0, 4);
        // console.log(country, cols);
        mainData[coun] = [];
        cols.forEach((value, index) => {
          const dw: TimeData = {
            country: coun,
            cases: +value,
            date: new Date(Date.parse(dates[index]))
          };
          mainData[coun].push(dw);
        });
      });
      // console.log(dates);
    }));
  }

  get globalData() {
   return this.http.get(this.dataUrl, {responseType: 'text'})
   .pipe(map(result => {
     const data: Data[] = [];
     const raw = {};
     const rows = result.split('\n');
     rows.splice(0, 1);
    //  console.log(rows);
     rows.forEach(row => {
       const cols = row.split(/,(?=\S)/);

       const cs = {
        country: cols[3],
        confirmed: +cols[7],
        deaths: +cols[8],
        recovered: +cols[9],
        active: +cols[10]
      };
       const temp: Data = raw[cs.country];
       if (temp) {
         temp.confirmed += cs.active;
         temp.deaths += cs.deaths;
         temp.recovered += cs.recovered;
         temp.active += cs.active;
         raw[cs.country] = temp;
       } else {
         raw[cs.country] = cs;
       }
      });
    //  console.log(raw);
     return Object.values(raw) as Data[];
   })
   );
  }
}
