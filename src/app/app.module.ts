import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { EducationComponent } from './education/education.component';
import { AchievementsComponent } from './achievements/achievements.component';
import { ReferencesComponent } from './references/references.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [
  { path: 'About', component: AboutComponent },
  { path: 'Skills', component: SkillsComponent },
  { path: 'Education', component: EducationComponent },
  { path: 'Achievements', component: AchievementsComponent },
  { path: 'References', component: ReferencesComponent },
  { path: 'Pagenotfound', component: PagenotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    AboutComponent,
    SkillsComponent,
    EducationComponent,
    AchievementsComponent,
    ReferencesComponent,
    PagenotfoundComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
