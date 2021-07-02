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

  cursus = {
    cursus:[
      {
      nom : 'BREVET DE TECHNICIEN SUPERIEUR',
      others: {
        niveau:[
          {
          id: 1,
          name:  'Niveau 1'
         }
        ],
        filieres: [
          {
            id: 1,
            name: 'Fabrication Mecanique'
          },{
            id: 2,
            name: 'Froid Et Climatisation'
          },{
            id: 3,
            name: 'Construction Mecanique'
          },{
            id: 4,
            name: 'Informatique Industrielle Et Automatisation'
          },{
            id: 5,
            name: 'Comptabilite Et Gestion Des Entreprises'
          },{
            id: 6,
            name: 'Maintenance Apres Vente Automobile'
          },{
            id: 7,
            name: 'Marketing Commerce Vente'
          },{
            id: 8,
            name: 'Gestion Logistique Et Transport'
          },{
            id: 9,
            name: 'Banque Et Finance'
          },{
            id: 10,
            name: 'Electro-Technique'
          },
        ]
      }
    },
      {
        nom: 'FORMATION INITIAL',
        others: {
          niveau:[
            {
              id: 1,
              name:  'Niveau 1'
            }
          ],
          filieres: [
            {
              id: 1,
              name: 'Biotechnologie Et Technologie Alimentaire'
            },
            {
              id: 2,
              name: 'Gestion Appliquee Aux Petites Et Moyennes Organisations'
            },
            {
              id: 3,
              name: 'Genie Biomedical'
            },
            {
              id: 4,
              name: 'Genie Logicielle'
            },
            {
              id: 5,
              name: 'Genie Electrique Et Informatique Industrielle'
            },
            {
              id: 6,
              name: 'Genie Industrielle Et Maintenance'
            },
            {
              id: 7,
              name: 'Genie Informatique'
            },
            {
              id: 8,
              name: 'Genie Logistique Et Transport'
            },
            {
              id: 9,
              name: 'Genie Metallurgie'
            },
            {
              id: 10,
              name: 'Genie Des Mines Et Petrole'
            },
            {
              id: 11,
              name: 'Genie Mecanique Et Productique'
            },
            {
              id: 12,
              name: 'Genie Reseaux Et Telecommunication'
            },
            {
              id: 13,
              name: 'Genie Thermique Et Energie'
            },
            {
              id: 14,
              name: 'Organisation Et Gestion Administrative'
            }
          ]
        }
      },
      {
        nom: 'LICENCE DE TECHNOLOGIE',
        others: {
          niveau:[
            {
              id: 1,
              name:  'Niveau 3'
            }
          ],
          filieres: [
            {
              id: 1,
              name: 'Genie Mecanique ET Productique'
            },
            {
              id: 2,
              name: 'Valorisation Des Energies Renouvellables'
            },
            {
              id: 3,
              name: 'Genie Electrique Et Informatique Industrielle'
            },
            {
              id: 4,
              name: 'Genie Logiciel'
            },
            {
              id: 5,
              name: "Economie d'Energie Et Environnement"
            },
            {
              id: 6,
              name: 'Chimie Industrielle Et Pharmaceutique'
            },
            {
              id: 7,
              name: 'Administration Des Systemes Et Reseaux'
            },
            {
              id: 8,
              name: 'Genie Civil'
            },
            {
              id: 9,
              name: 'Genie Metallurgie'
            },
            {
              id: 10,
              name: 'Genie Des Mines'
            },
            {
              id: 11,
              name: 'Organisation Et Gestion Administrative'
            },
            {
              id: 12,
              name: 'Genie Reseaux Et Telecommunication'
            },
            {
              id: 13,
              name: 'Petrole Et Gaz'
            },
            {
              id: 14,
              name: 'Logistique Industrielle'
            },
            {
              id: 15,
              name: 'Qualite Hygiene Et Securite Des Aliments'
            },
            {
              id: 16,
              name: 'Genie Biomedical'
            },
            {
              id: 17,
              name: 'Genie Industrielle Et Maintenance'
            },
            {
              id: 18,
              name: 'Communication Negociation Vente'
            },
            {
              id: 19,
              name: 'Gestion Comptable Et Financiere'
            }
          ]
        }
      },
      {
        nom: 'DOCTORAT/PHD 1',
        others: {
          niveau:[
            {
              id: 1,
              name:  'Niveau 6'
            }
          ],
          filieres: [
            {
              id: 1,
              name: 'Doctorat/PHD 1 Laboratoire Des Technologies Et Sciences Appliquees'
            },
            {
              id: 2,
              name: 'Doctorat/PHD 1 Laboratoire Des Transports Et De Logistique Appliquees'
            }
          ]
        },
      },
      {
        nom: 'MASTER RECHERCHE 2',
        others: {
          niveau:[
            {
              id: 1,
              name:  'Niveau 5'
            }
          ],
          filieres:[
        {
          id: 1,
          name: 'Laboratoire Des Technologies ET Sciences Appliquees'
        },
        {
          id: 2,
          name: 'Laboratoire Des Transports ET De Logistiques Appliquee'
        }
      ]
    }
    },
      {
        nom: 'MASTER 1',
        others: {
          niveau:[
            {
              id: 1,
              name:  'Niveau 4'
            }
          ],
          filieres: [
            {
              id: 1,
              name: 'Master Professionnel en Eau, Dechets et Assainissement Liquide'
            },
            {
              id: 2,
              name: 'Master Professionnel en Genie Industriel et Maintenence'
            },
            {
              id: 3,
              name: 'Master de Technologie en Marketing-Communication-Management-Vente'
            },
            {
              id: 4,
              name: 'Master de Technologie en Gestion Financiere et Fiscale-Audit-Controle'
            },
            {
              id: 5,
              name: 'Master Professionnel en Logistique Industrielle'
            },
            {
              id: 6,
              name: 'Master Professionnel en Accreditation, Normalisation, Ecolabel, Certification'
            }
          ]
        }
      },
      {
       nom: 'FORMATION EN ALTERNANCE',
        others: {
          niveau:[
            {
              id: 1,
              name:  'Niveau 1'
            }
          ],
          filieres: [
        {
          id: 1,
          name: 'Biotechnologie Et Technologie Alimentaire'
        },
        {
          id: 2,
          name: 'Gestion Appliquee Aux Petites Et Moyennes Organisations'
        },
        {
          id: 3,
          name: 'Genie Biomedical'
        },
        {
          id: 4,
          name: 'Genie Logicielle'
        },
        {
          id: 5,
          name: 'Genie Electrique Et Informatique Industrielle'
        },
        {
          id: 6,
          name: 'Genie Industrielle Et Maintenance'
        },
        {
          id: 7,
          name: 'Genie Informatique'
        },
        {
          id: 8,
          name: 'Genie Logistique Et Transport'
        },
        {
          id: 9,
          name: 'Genie Metallurgie'
        },
        {
          id: 10,
          name: 'Genie Des Mines Et Petrole'
        },
        {
          id: 11,
          name: 'Genie Mecanique Et Productique'
        },
        {
          id: 12,
          name: 'Genie Reseaux Et Telecommunication'
        },
        {
          id: 13,
          name: 'Genie Thermique Et Energie'
        },
        {
          id: 14,
          name: 'Organisation Et Gestion Administrative'
        }
      ]
      }
    }]
  };

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
    return this.http.post(this.global.getApiUrl() + 'etudiant', user);
  }

  getCursus(): Observable<any>{
    return this.http.get(this.global.getApiUrl() + 'cursus');
  }

}
