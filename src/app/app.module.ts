import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DirectiveComponent } from './directive/directive.component';
import { PipeComponent } from './pipe/pipe.component';
import { ViewChildComponent } from './view-child/view-child.component';
import { TestDirective } from './test.directive';
import { FirstUpperPipe } from './first-upper.pipe';
import { InputComponentComponent } from './view-child/input-component/input-component.component';
import { ChildComponentComponent } from './view-child/child-component/child-component.component';
import { SimpleServiceComponent } from './simple-service/simple-service.component';
import { OutputComponent } from './output/output.component';
import { OutputChildComponent } from './output/output-child/output-child.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    DirectiveComponent,
    PipeComponent,
    ViewChildComponent,
    TestDirective,
    FirstUpperPipe,
    InputComponentComponent,
    ChildComponentComponent,
    SimpleServiceComponent,
    OutputComponent,
    OutputChildComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
