import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';  
import { RouterOutlet } from '@angular/router';
import { PlayComponent } from './components/play/play.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PlayComponent, FormsModule],  
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MemoryMaster';
}
