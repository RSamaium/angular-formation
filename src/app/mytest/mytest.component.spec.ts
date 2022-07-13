import { ComponentFixture, TestBed } from "@angular/core/testing"
import { MytestComponent } from "./mytest.component"

describe('Tester MyTestComponent', () => {
  let fixture: ComponentFixture<MytestComponent>
  let component: MytestComponent
  let tpl: HTMLElement

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MytestComponent]
    }).compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(MytestComponent)
    fixture.detectChanges()
    component = fixture.componentInstance
    tpl = fixture.nativeElement
  })

  it('Vérifier le contenu du titre dans le tpl', () => {
    const h1 = tpl.querySelector('h1') // $('h1').text()
    expect(h1?.textContent).toBe(component.title)
  })

  it('2ème test', () => {
    
  })
})