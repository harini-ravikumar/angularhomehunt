import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Home } from '../interface/home';
import { ModelserviceService } from '../service/modelservice.service';

@Component({
  selector: 'app-homeview',
  standalone: false,
  templateUrl: './homeview.component.html',
  styleUrl: './homeview.component.css'
})
export class HomeviewComponent implements OnInit {
  id:number=0;
  home!:Home;
  ngOnInit(): void {

    this.actrouter.params.subscribe((param)=>{
      const idParam = param['id'];
      if (idParam) {
        this.id = +idParam;
        this.service.getModel(this.id).subscribe({
          next: (data: Home) => (this.home = data),
          error: (err) => console.log(err)
        })
    }});

  }

  back(){
    this.router.navigate(['']);
  }

  constructor(private actrouter:ActivatedRoute,private service:ModelserviceService,private router:Router){}

}
