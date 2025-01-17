import { Component, OnInit } from '@angular/core';
import { Post } from '../../types/post';
import { HttpClient } from '@angular/common/http';
import { FeedComponent } from '../../components/feed/feed.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-explore-page',
  imports: [FeedComponent],
  templateUrl: './explore-page.component.html',
  styleUrl: './explore-page.component.scss'
})
export class ExplorePageComponent implements OnInit {
posts: Post[] = [];
country = '';

  constructor(private httpClient: HttpClient, private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.country = params.get('country') || '';
      if(this.country){
    this.fetchData(this.country);
    }  
  });
  }

  fetchData(countryId: string){
    let countryIdFormatted = countryId.toLocaleLowerCase();
    this.httpClient.get<{posts: Post[]}>(`http://localhost:3000/explore_${countryIdFormatted}`).subscribe((data : {posts: Post[]}) => {
      console.log(data);
      this.posts = data.posts;
  })
 }
}
