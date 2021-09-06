import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilShellComponent } from './profil-shell.component';

describe('ProfilShellComponent', () => {
    let component: ProfilShellComponent;
    let fixture: ComponentFixture<ProfilShellComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ProfilShellComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ProfilShellComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});