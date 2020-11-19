import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-NotFound',
  templateUrl: './NotFound.component.html',
  styleUrls: ['./NotFound.component.scss']
})
export class NotFoundComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onBackHome() {
    this.router.navigate(['/']);
  }
}
