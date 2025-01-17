import { Component, Input } from '@angular/core';
import { ListViewModule } from '@syncfusion/ej2-angular-lists';
import { Post } from '../../types/post';
import { PostComponent } from '../post/post.component';

@Component({
  selector: 'app-feed',
  imports: [ListViewModule, PostComponent],
  templateUrl: './feed.component.html',
  styleUrl: './feed.component.scss',
  standalone: true
})
export class FeedComponent {

  @Input() posts: Post[] = [];
  
}
