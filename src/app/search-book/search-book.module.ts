import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SearchBookComponent } from './search-book.component';
import { SearhBookService } from '../services/search-book.service';
import { AppModule } from '../app.module';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    AppModule
  ],
  declarations: [
    SearchBookComponent,
  ],
  providers: [SearhBookService]
})
export class SearchBookModule { }