import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
// import { MatToolbarModule } from '@angular/material/toolbar';
// import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule, MatInputModule, MatCardModule, MatButtonModule } from '@angular/material';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { SearchScreenComponent } from './search-screen/search-screen.component';
import { githubSearchService } from "./github-search.service";
import{ HttpModule } from "@angular/http";


@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    SearchScreenComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    FormsModule,
    HttpModule
  ],
  providers: [githubSearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
