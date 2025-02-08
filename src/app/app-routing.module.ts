import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DiaryPageComponent } from './diary-page/diary-page.component';

const routes: Routes = [
  { path: 'diario-sr-lourdes', component: DiaryPageComponent, data: { title: 'O diário do Sr. Lourdes' } },
  { path: 'diario-policial-coleman', component: DiaryPageComponent, data: { title: 'O diário do policial Coleman' } },
  { path: 'diario-policial-fox', component: DiaryPageComponent, data: { title: 'O diário do policial Fox' } },
  { path: 'diario-enfermeira-beth', component: DiaryPageComponent, data: { title: 'O diário da enfermeira Beth' } },
  { path: '**', redirectTo: 'eneibou-stream', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
