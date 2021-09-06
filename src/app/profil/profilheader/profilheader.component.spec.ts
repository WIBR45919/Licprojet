import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilheaderComponent } from './profilheader.component';

describe('ProfilheaderComponent', () => {
    let component: ProfilheaderComponent;
    let fixture: ComponentFixture<ProfilheaderComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ProfilheaderComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ProfilheaderComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});