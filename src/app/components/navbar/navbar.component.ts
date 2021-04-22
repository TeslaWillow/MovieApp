import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    private router:Router,
  ) { }

  ngOnInit(): void {

  }

  searchMovies(term:string){
    term = term.trim();
    if(term.length === 0){ return; }

    this.router.navigate(['/search', term]);
  }

}
