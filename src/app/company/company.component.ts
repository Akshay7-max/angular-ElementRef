import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent {

  companyname: string = "ABC Company";

  @ViewChild("myheading") h!:ElementRef;

  onClickMeClicked() {
    this.h.nativeElement.innerHTML = "Varanasi";
  }

  constructor() { }

  ngOnInit(): void {
  }

}
