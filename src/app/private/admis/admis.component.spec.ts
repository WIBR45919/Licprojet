import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmisComponent } from './admis.component';

describe('AdmisComponent', () => {
    let component: AdmisComponent;
    let fixture: ComponentFixture<AdmisComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [AdmisComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AdmisComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});