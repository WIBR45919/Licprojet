import {Injectable, OnInit} from '@angular/core';

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
        fileres: [
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
          fileres: [
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
              name: 'Economie d\'Energie Et Environnement'
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
          fileres: [
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
          fileres:[
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
          fileres: [
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
          fileres: [
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

  constructor() { }
  ngOnInit(): void {
  }

  getFiliereByCurcus(): void{}
}
