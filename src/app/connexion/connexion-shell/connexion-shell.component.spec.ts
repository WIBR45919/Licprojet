import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnexionShellComponent } from './connexion-shell.component';

describe('ConnexionShellComponent', () => {
    let component: ConnexionShellComponent;
    let fixture: ComponentFixture<ConnexionShellComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ConnexionShellComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ConnexionShellComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});