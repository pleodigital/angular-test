import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DirectiveComponent} from './directive/directive.component';
import {PipeComponent} from './pipe/pipe.component';
import {ViewChildComponent} from './view-child/view-child.component';
import {SimpleServiceComponent} from './simple-service/simple-service.component';
import {OutputComponent} from './output/output.component';


const routes: Routes = [
  {path: 'directive', component: DirectiveComponent},
  {path: 'pipe', component: PipeComponent},
  {path: 'view-child', component: ViewChildComponent},
  {path: 'simple-service', component: SimpleServiceComponent},
  {path: 'output', component: OutputComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
