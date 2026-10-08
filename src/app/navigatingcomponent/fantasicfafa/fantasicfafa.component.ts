import { Component } from '@angular/core';
import { FantasicfafaService } from 'src/app/navigatingcomponents/services/fantasicfafa.service';

@Component({
  selector: 'app-fantasicfafa',
  templateUrl: './fantasicfafa.component.html',
  styleUrls: ['./fantasicfafa.component.css']
})
export class FantasicfafaComponent {
images:any;
  constructor(private service:FantasicfafaService){}
  ngOnInit(){
    this.service.onsubmit().subscribe(data=>this.images=data);
  }
}
