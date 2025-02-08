import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

import { DiaryService } from '../diary.service';

@Component({
  selector: 'app-diary-page',
  templateUrl: './diary-page.component.html',
  styleUrls: ['./diary-page.component.scss']
})
export class DiaryPageComponent {

  public title = '';
  public entries: { day: string, content: string[], isDead?: boolean }[] = [];

  constructor(private router: Router, private route: ActivatedRoute, private location: Location, private diaryService: DiaryService) {
    this.route.data.subscribe(data => {
      this.title = data['title'];
    });

    this.route.url.subscribe(urlSegments => {
      const routePath = urlSegments.map(segment => segment.path).join('/');
      this.entries = this.diaryService.getDiaryEntries(routePath);
    });
  }

  public back() {
    if (window.history.length > 1) {
      this.location.back();
    } else {
      this.router.navigate(['/']);
    }
  }

}
