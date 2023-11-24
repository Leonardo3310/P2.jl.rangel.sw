import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DinosaurioDetail } from './dinosaurio-detail';
import { DinosaurioService } from '../dinosaurio.service';

@Component({
  selector: 'app-dinosaurio-detail',
  templateUrl: './dinosaurio-detail.component.html',
  styleUrls: []
})
export class AuthorDetailComponent implements OnInit {

  dinoId!: string;
  @Input() dinosaurioDetail!: DinosaurioDetail;

  constructor(
    private route: ActivatedRoute,
    private dinosaurioService: DinosaurioService
  ) {}

  getDinosaurio(){
    this.dinosaurioService.getDinosaurios(this.dinoId).subscribe(apiData=>{
      this.dinosaurioDetail = apiData;
    })
  }

  ngOnInit() {
    if(this.dinosaurioDetail === undefined){
      this.dinoId = this.route.snapshot.paramMap.get('id')!
      if (this.dinoId) {
        this.getDinosaurio();
      }
    }
  }
}
