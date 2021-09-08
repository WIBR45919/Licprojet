import {Injectable, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {GlobalinfoService} from "../../_services/globalinfo.service";
import {EtudiantModel} from "../../_models/etudiant.model";

@Injectable({
  providedIn: 'root'
})
export class InfosService implements OnInit{

  annees = ["1991","1992","1993","1994","1995","1996","1997","1998","1999",
    "2000","2001","2002","2003","2004","2005","2006","2007","2008","2009","2010","2011","2012",
    "2013","2014","2015","2016","2017","2018","2019","2020","2021",];
  diplome = [
    "HND","DSEP","Baccalaureat","BT","DUT","Licence Scientifique","GCE Advanced Level","BEPC / CAP",
    "Ingénieur des Travaux","Licence Technologie","BTS","DEUG","Probatoire","HCE Ordinary Level","CEP anglophone"
  ];
  mention = ["Asséz-bien","Bien","Excellent","Passable","Très bien","Sous-reserve"];

  Pays = [
    {
    nom: 'République du Cameroun',
      regions: [
        'Littoral','Centre','Adamaoua','Est','Extrême-Nord','Nord','Ouest','Nord-Ouest','Sud','Sud-Ouest'
      ]
  },
    {
    nom: 'Burkina Faso',
      regions: [
        'Boucle du Mouhoun','Cascades','Centre','Centre-Est','Centre-Nord','Centre-Ouest','Centre-Sud'
      ]
  },
    {
    nom: 'Togo',
      regions: [
        'Cntrale','Kara','Maritime','Plateaux','Savanes','Autres'
      ]
  },
    {
    nom: 'Niger',
      regions: [
        'Agadez', 'Diffa', 'Dosso', 'Maradi', 'Niamey', 'Tahoua', 'Tillabéri', 'Zinder'
      ]
  },
    {
    nom: 'Nigeria',
      regions: [
       'Abia (Umuahia)', 'Akwa Ibom (Uyo)', 'Anambra (Awka)', ' Bauchi (Bauchi)', 'Bayelsa (Yenagoa)',
       ' Benue (Makurdi)',' Borno (Maiduguri)', 'Cross River (Calabar)', ' Delta (Asaba)', 'Ebonyi',
       'Edo', 'Ekiti', 'Enugu', 'Gombe', 'Imo', 'Jigawa', 'Kaduna', 'Kano', 'Katsina', 'Kebbi', 'Kogi', 'Kwara',
       ' Lagos', 'Nassarawa', 'Niger', 'Ogun', 'Ondo', 'Osun', 'Oyo', 'Plateau', 'Rivers (Port Harcourt)', 'Sokoto',
       'Taraba', 'Yobe', 'Zamfara'
      ]
  },
    {
    nom: 'Mali',
      regions: [
        'Kayes', 'Koulikoro', 'Sikasso', 'Ségou', 'Mopti', 'Gao', 'Tombouctou', 'Kidal', 'Ménaka' , 'Taoudénit'
      ]
  },
    {
    nom: 'Gabon',
      regions: [
        'Estuaire (Libreville)', 'Haut-Ogooué (Franceville)', 'Moyen-Ogooué (Lambaréné)', 'Ngounié (Mouila)',
        'Nyanga (Tchibanga)', 'Ogooué-Ivindo (Makokou)', 'Ogooué-Lolo (Koulamoutou)', 'Ogooué-Maritime (Port-Gentil)'
      ]
  },
    {
    nom: 'Côte d\'ivoire',
      regions: [
       ' Abidjan (sud)',' Yamoussoukro (centre)', 'San-pedro (sud-ouest)', 'Abengourou (Est)', 'Odienne (nord)',
       ' Gagnoa (sud-est)', 'Man (ouest)', ' Daloa (centre-ouest)',' Korhogo (nord)',' Bouaké (centre)',
        'Seguela (nord-ouest)', 'Bondoukou (Est)'
      ]
  },
    {
    nom: 'Guinée Equatoriale',
      regions: [
        'Annobón', 'Malabo', 'Baney', 'Riaba', 'Luba', 'Bata', 'Mbini', 'Cogo', 'Acurenam', 'Evinayong', 'Ebebiyin',
        'Niefang', 'Micomiseg', 'Nsok Nsomo', 'Aconibe', 'Añisok', 'Mongomo', 'Nsork'
      ]
  },
    {
    nom: 'Tchad',
      regions: [
        'Chari-Baguirmi','Kanem','Logone','Borkou','Ennedi-Est','Tibesti','Lac','Mandoul','Batha','Ennedi-Ouest',
        'Kanem','Hadjer-Lamis','Autres'
      ]
  },
    {
    nom: 'République Centre Africaine',
      regions: [
        'Bangui','Carnot','Bria','Nola','Boda','Sibut','Bozoum','Paoua','Bossangoa','Bambari','Autres'
      ]
  },
    {
    nom: 'République du Congo',
      regions: [
        'Bas-Uele','Ituri','Kwilu','Kwango','Équateur','Haut-Katanga','Kinshasa','Kasaï','Tshuapa','Maniema','Autres'
      ]
  },
    {
    nom: 'République Démocratique du Congo',
      regions: [
        'Équateur','Nord-Ubangi','Sud-Ubangui','Mongola','Tshuapa','Autres'
      ]
  },
    {
    nom: 'Autres',
      regions: [
        'Autres'
      ]
  }
  ];

  constructor(private http: HttpClient, private global: GlobalinfoService) { }
  ngOnInit(): void {
  }
  //methode d'inscription
  Inscription(user: EtudiantModel): Observable<any>{
    return this.http.post(this.global.getApiUrl() + 'createEtudiant', user);
  }

  getCursus(): Observable<any>{
    return this.http.get(this.global.getApiUrl() + 'cursus');
  }

}
