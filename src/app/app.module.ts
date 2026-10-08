import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LatestreleasesComponent } from './latestreleases/latestreleases.component';
import { MollywoodmoodComponent } from './mollywoodmood/mollywoodmood.component';
import { AhaoriginalsComponent } from './ahaoriginals/ahaoriginals.component';
import { WatchforfreeComponent } from './navigatingcomponent/watchforfree/watchforfree.component';
import { WatchbylanguageComponent } from './navigatingcomponent/watchbylanguage/watchbylanguage.component';
import { NavbarComponent } from './commoncomponents/navbar/navbar.component';
import { FooterComponent } from './commoncomponents/footer/footer.component';
import { FantasicfafaComponent } from './navigatingcomponent/fantasicfafa/fantasicfafa.component';
import { NenenanineComponent } from './navigatingcomponent/nenenanine/nenenanine.component';
import { TrendingnowComponent } from './navigatingcomponent/trendingnow/trendingnow.component';
import { InthespotlightComponent } from './navigatingcomponent/inthespotlight/inthespotlight.component';
import { WatchinteluguandtamilComponent } from './navigatingcomponent/watchinteluguandtamil/watchinteluguandtamil.component';
import { TamiltimelessclassicsComponent } from './navigatingcomponent/tamiltimelessclassics/tamiltimelessclassics.component';
import { TelugutimelessclassicsComponent } from './navigatingcomponent/telugutimelessclassics/telugutimelessclassics.component';
import { BecauseyouwatcheddhoolpetpolicestationComponent } from './navigatingcomponent/becauseyouwatcheddhoolpetpolicestation/becauseyouwatcheddhoolpetpolicestation.component';
import { HandpickedforyouComponent } from './navigatingcomponent/handpickedforyou/handpickedforyou.component';
import { UpcomingonahaComponent } from './navigatingcomponent/upcomingonaha/upcomingonaha.component';
import { Watchin4KComponent } from './navigatingcomponent/watchin4-k/watchin4-k.component';
import { LivechannelsComponent } from './navigatingcomponent/livechannels/livechannels.component';
import { MostwatchedinteluguComponent } from './navigatingcomponent/mostwatchedintelugu/mostwatchedintelugu.component';
import { MostwatchedintamilComponent } from './navigatingcomponent/mostwatchedintamil/mostwatchedintamil.component';
import { GenreComponent } from './navigatingcomponent/genre/genre.component';
import { FamilyentertainersComponent } from './navigatingcomponent/familyentertainers/familyentertainers.component';
import { LovediariesComponent } from './navigatingcomponent/lovediaries/lovediaries.component';
import { LaughterloadedComponent } from './navigatingcomponent/laughterloaded/laughterloaded.component';
import { KillertwistsComponent } from './navigatingcomponent/killertwists/killertwists.component';
import { ActionarenaComponent } from './navigatingcomponent/actionarena/actionarena.component';
import { HeartfeltdramaComponent } from './navigatingcomponent/heartfeltdrama/heartfeltdrama.component';
import { HouseofhorrorsComponent } from './navigatingcomponent/houseofhorrors/houseofhorrors.component';
import { HiddengemsComponent } from './navigatingcomponent/hiddengems/hiddengems.component';
import { MostrewatchedgemsComponent } from './navigatingcomponent/mostrewatchedgems/mostrewatchedgems.component';
import { CinematreatsComponent } from './navigatingcomponent/cinematreats/cinematreats.component';
import { HeartbeatstoriesComponent } from './navigatingcomponent/heartbeatstories/heartbeatstories.component';
import { ComedytimeComponent } from './navigatingcomponent/comedytime/comedytime.component';
import { HighvoltageComponent } from './navigatingcomponent/highvoltage/highvoltage.component';
import { ThrillersCrimeComponent } from './navigatingcomponent/thrillers-crime/thrillers-crime.component';
import { EmotionalDramaComponent } from './navigatingcomponent/emotional-drama/emotional-drama.component';
import { RetroClassicgemsComponent } from './navigatingcomponent/retro-classicgems/retro-classicgems.component';
import { MysterySupernaturalComponent } from './navigatingcomponent/mystery-supernatural/mystery-supernatural.component';
import { IndieFestivalfilmsComponent } from './navigatingcomponent/indie-festivalfilms/indie-festivalfilms.component';
import { RegionalmixComponent } from './navigatingcomponent/regionalmix/regionalmix.component';

@NgModule({
  declarations: [
    AppComponent,
    LatestreleasesComponent,
    MollywoodmoodComponent,
    AhaoriginalsComponent,
    WatchforfreeComponent,
    WatchbylanguageComponent,
    NavbarComponent,
    FooterComponent,
    FantasicfafaComponent,
    NenenanineComponent,
    TrendingnowComponent,
    InthespotlightComponent,
    WatchinteluguandtamilComponent,
    TamiltimelessclassicsComponent,
    TelugutimelessclassicsComponent,
    BecauseyouwatcheddhoolpetpolicestationComponent,
    HandpickedforyouComponent,
    UpcomingonahaComponent,
    Watchin4KComponent,
    LivechannelsComponent,
    MostwatchedinteluguComponent,
    MostwatchedintamilComponent,
    GenreComponent,
    FamilyentertainersComponent,
    LovediariesComponent,
    LaughterloadedComponent,
    KillertwistsComponent,
    ActionarenaComponent,
    HeartfeltdramaComponent,
    HouseofhorrorsComponent,
    HiddengemsComponent,
    MostrewatchedgemsComponent,
    CinematreatsComponent,
    HeartbeatstoriesComponent,
    ComedytimeComponent,
    HighvoltageComponent,
    ThrillersCrimeComponent,
    EmotionalDramaComponent,
    RetroClassicgemsComponent,
    MysterySupernaturalComponent,
    IndieFestivalfilmsComponent,
    RegionalmixComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
