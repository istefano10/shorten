import { Component, OnInit } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';
import { Url } from 'src/app/interfaces/url';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  inputvalue = "";
  displayedColumns: string[] = ['origUrl', 'shortUrl'];
  dataSource: Url[] = [];
  constructor(
    private apiService: ApiService,
    private clipboard: Clipboard) {
}

  ngOnInit(): void {
    this.getShortensUrls()
  }

  sendUrl() {
    console.log(this.inputvalue);
    this.apiService.shotenUrl(this.inputvalue).subscribe(
      data => {
        console.log(data)
        this.getShortensUrls();
      },
      error => {
        console.error(error);
      }
    )
  }

  getShortensUrls() {
    this.apiService.getShortensUrls().subscribe(
      data => {
        console.log(data)
        this.dataSource = data;
      },
      error => {
        console.error(error);
      }
    )
  }

  copyText(textToCopy: string) {
    this.clipboard.copy(textToCopy);
  }

}
