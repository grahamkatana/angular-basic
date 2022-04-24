import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title:string = 'Task manager';
  showAddTask!:boolean;
  subscription!:Subscription
  //1.44

  constructor(private uiService:UiService) {
    this.subscription = this.uiService.onToggle().subscribe(
      (value)=>this.showAddTask=value
    )
   }

  ngOnInit(): void {
  }

  toggleAddTask():void{
    this.uiService.toggleAddTask();
    //console.log('TEst')
  }

}
