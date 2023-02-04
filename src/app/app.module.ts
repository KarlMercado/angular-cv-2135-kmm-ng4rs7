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

const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'education', component: EducationComponent },
  { path: 'achievements', component: AchievementsComponent },
  { path: 'References', component: ReferencesComponent },
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
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
