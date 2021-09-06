import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InscriptionShellComponent } from './inscription-shell.component';

describe('InscriptionShellComponent', () => {
    let component: InscriptionShellComponent;
    let fixture: ComponentFixture<InscriptionShellComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [InscriptionShellComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(InscriptionShellComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});