import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignService } from '../../../services/design.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { AllDesignBackgroundPageComponent } from './all-design-background-page.component';
import { AllDesignPageModule } from '../all-design-page.module';
import { of } from 'rxjs';
import {  ToastrModule } from 'ngx-toastr';
import { HeaderComponent } from '../../componentes-comuns/header/header.component';


@Component({
  template: `<app-all-design-background-page></app-all-design-background-page>`,
})
class TestAllDesignBackgroundPageComponent {
  @ViewChild(AllDesignBackgroundPageComponent) allDesignComp!: AllDesignBackgroundPageComponent;
}


describe('AllDesignBackgroundPageComponent', () => {
  let component: TestAllDesignBackgroundPageComponent;
  let fixture: ComponentFixture<TestAllDesignBackgroundPageComponent>;
  var getAllServiceSpy!: any;
  var toastrErrorSpy!: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestAllDesignBackgroundPageComponent, AllDesignBackgroundPageComponent, HeaderComponent],
      imports: [AllDesignPageModule, ToastrModule.forRoot()],
      providers: [DesignService, HttpClient]
    })
      .compileComponents();

    fixture = TestBed.createComponent(TestAllDesignBackgroundPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    getAllServiceSpy = jest.spyOn(component.allDesignComp.designService, 'getAllDesign');
    toastrErrorSpy = jest.spyOn(component.allDesignComp.toastr, 'error');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('getAllDesignThumbs seta valores corretos quando a service retorna status ok', () => {
    getAllServiceSpy.mockReturnValue(of(returnAllDesignMock));
    component.allDesignComp.getAllDesignThumbs();
    expect(component.allDesignComp.designsThumbsToShow.length).toBe(2);
    expect(toastrErrorSpy).not.toBeCalled();
  });

  it('se a service retorna um erro, o toastr avisa que algo deu erro', () => {
    component.allDesignComp.getAllDesignThumbs();
    expect(component.allDesignComp.designsThumbsToShow).toBeFalsy();
    expect(toastrErrorSpy).toBeCalledTimes(1);
  });

  it('goToEditDesign chama window.open', () => {
    var windowOpenSpy = jest.spyOn(window, 'open');
    component.allDesignComp.goToEditDesign("testeUrl");
    expect(windowOpenSpy).toBeCalled();
  });
});


var returnAllDesignMock = {
  "data": [
    {
      "is_template": false,
      "app_reference": {
        "id": "oAYhKVHiqb3zNKF8dXZh"
      },
      "products": [
        {
          "app_product_reference": {},
          "created_at": {}
        }
      ],
      "tags": [
        "youtube",
        "matematica"
      ],
      "is_deleted": false,
      "is_premium": false,
      "user_reference": {
        "id": "6rBEeTLNd4dmJlk3fwg71R1SLid2"
      },
      "allow_preview": false,
      "theme_reference": {
        "id": "npa7TokcmMHFfYPFiBbx"
      },
      "author": {
        "name": null
      },
      "module": null,
      "created_at": "2023-04-22T16:05:34.689Z",
      "published": false,
      "page_format_reference": {
        "id": "D9lianNUp95fMxCyvO7n"
      },
      "printable": false,
      "pages": [
        [
          {
            "page_index": 0,
            "page_format_id": null
          }
        ]
      ],
      "app_demo": false,
      "provider": "user",
      "price": null,
      "is_printable": false,
      "is_public": false,
      "is_renamed": true,
      "published_at": null,
      "slug": null,
      "is_featured": false,
      "cover": {
        "raw": "https://assets.storage.trakto.io/6rBEeTLNd4dmJlk3fwg71R1SLid2/a97d9606-5d13-440e-aa08-170b339d90df.png",
        "medium": "https://assets.storage.trakto.io/6rBEeTLNd4dmJlk3fwg71R1SLid2/a97d9606-5d13-440e-aa08-170b339d90df.png",
        "high": "https://assets.storage.trakto.io/6rBEeTLNd4dmJlk3fwg71R1SLid2/a97d9606-5d13-440e-aa08-170b339d90df.png",
        "low": "https://assets.storage.trakto.io/6rBEeTLNd4dmJlk3fwg71R1SLid2/a97d9606-5d13-440e-aa08-170b339d90df.png"
      },
      "updated_at": "2023-04-22T20:10:28.852Z",
      "thumbs": {
        "raw": "https://assets.storage.trakto.io/6rBEeTLNd4dmJlk3fwg71R1SLid2/a97d9606-5d13-440e-aa08-170b339d90df.png",
        "medium": "https://assets.storage.trakto.io/6rBEeTLNd4dmJlk3fwg71R1SLid2/a97d9606-5d13-440e-aa08-170b339d90df.png",
        "high": "https://assets.storage.trakto.io/6rBEeTLNd4dmJlk3fwg71R1SLid2/a97d9606-5d13-440e-aa08-170b339d90df.png",
        "low": "https://assets.storage.trakto.io/6rBEeTLNd4dmJlk3fwg71R1SLid2/a97d9606-5d13-440e-aa08-170b339d90df.png"
      },
      "id": "ghY6Y7XZFfHeTCkCZcAt",
      "title": "Aula 2: Protocolos de lei"
    },
    {
      "is_template": false,
      "app_reference": {
        "id": "oAYhKVHiqb3zNKF8dXZh"
      },
      "products": [
        {
          "app_product_reference": {},
          "created_at": {}
        }
      ],
      "tags": [
        "proposta",
        "comercial",
        "vendas",
        "negocios",
        "apresentação",
        "slide"
      ],
      "is_deleted": false,
      "is_premium": false,
      "user_reference": {
        "id": "6rBEeTLNd4dmJlk3fwg71R1SLid2"
      },
      "allow_preview": false,
      "theme_reference": {
        "id": "E5ZPpI2bRI4MfzXkAs6O"
      },
      "author": {
        "name": null
      },
      "module": null,
      "created_at": "2023-04-22T15:00:42.476Z",
      "published": false,
      "page_format_reference": {
        "id": "D9lianNUp95fMxCyvO7n"
      },
      "printable": false,
      "pages": [
        [
          {
            "page_index": 0,
            "page_format_id": null
          },
          {
            "page_index": 1,
            "page_format_id": null
          },
          {
            "page_index": 2,
            "page_format_id": null
          },
          {
            "page_index": 3,
            "page_format_id": null
          },
          {
            "page_index": 4,
            "page_format_id": null
          },
          {
            "page_index": 5,
            "page_format_id": null
          }
        ],
        [
          {
            "page_index": 0,
            "page_format_id": null
          },
          {
            "page_index": 1,
            "page_format_id": null
          },
          {
            "page_index": 2,
            "page_format_id": null
          },
          {
            "page_index": 3,
            "page_format_id": null
          },
          {
            "page_index": 4,
            "page_format_id": null
          },
          {
            "page_index": 5,
            "page_format_id": null
          }
        ],
        [
          {
            "page_index": 0,
            "page_format_id": null
          },
          {
            "page_index": 1,
            "page_format_id": null
          },
          {
            "page_index": 2,
            "page_format_id": null
          },
          {
            "page_index": 3,
            "page_format_id": null
          },
          {
            "page_index": 4,
            "page_format_id": null
          },
          {
            "page_index": 5,
            "page_format_id": null
          }
        ],
        [
          {
            "page_index": 0,
            "page_format_id": null
          },
          {
            "page_index": 1,
            "page_format_id": null
          },
          {
            "page_index": 2,
            "page_format_id": null
          },
          {
            "page_index": 3,
            "page_format_id": null
          },
          {
            "page_index": 4,
            "page_format_id": null
          },
          {
            "page_index": 5,
            "page_format_id": null
          }
        ],
        [
          {
            "page_index": 0,
            "page_format_id": null
          },
          {
            "page_index": 1,
            "page_format_id": null
          },
          {
            "page_index": 2,
            "page_format_id": null
          },
          {
            "page_index": 3,
            "page_format_id": null
          },
          {
            "page_index": 4,
            "page_format_id": null
          },
          {
            "page_index": 5,
            "page_format_id": null
          }
        ],
        [
          {
            "page_index": 0,
            "page_format_id": null
          },
          {
            "page_index": 1,
            "page_format_id": null
          },
          {
            "page_index": 2,
            "page_format_id": null
          },
          {
            "page_index": 3,
            "page_format_id": null
          },
          {
            "page_index": 4,
            "page_format_id": null
          },
          {
            "page_index": 5,
            "page_format_id": null
          }
        ]
      ],
      "app_demo": false,
      "provider": "user",
      "price": null,
      "is_printable": false,
      "is_public": false,
      "published_at": null,
      "slug": null,
      "is_featured": false,
      "is_renamed": true,
      "cover": {
        "raw": "https://assets.storage.trakto.io/6rBEeTLNd4dmJlk3fwg71R1SLid2/17561f2b-1bae-430b-a2ab-b38372102e2b.png",
        "medium": "https://assets.storage.trakto.io/6rBEeTLNd4dmJlk3fwg71R1SLid2/17561f2b-1bae-430b-a2ab-b38372102e2b.png",
        "high": "https://assets.storage.trakto.io/6rBEeTLNd4dmJlk3fwg71R1SLid2/17561f2b-1bae-430b-a2ab-b38372102e2b.png",
        "low": "https://assets.storage.trakto.io/6rBEeTLNd4dmJlk3fwg71R1SLid2/17561f2b-1bae-430b-a2ab-b38372102e2b.png"
      },
      "thumbs": {
        "raw": "https://assets.storage.trakto.io/6rBEeTLNd4dmJlk3fwg71R1SLid2/17561f2b-1bae-430b-a2ab-b38372102e2b.png",
        "medium": "https://assets.storage.trakto.io/6rBEeTLNd4dmJlk3fwg71R1SLid2/17561f2b-1bae-430b-a2ab-b38372102e2b.png",
        "high": "https://assets.storage.trakto.io/6rBEeTLNd4dmJlk3fwg71R1SLid2/17561f2b-1bae-430b-a2ab-b38372102e2b.png",
        "low": "https://assets.storage.trakto.io/6rBEeTLNd4dmJlk3fwg71R1SLid2/17561f2b-1bae-430b-a2ab-b38372102e2b.png"
      },
      "updated_at": "2023-04-22T21:37:32.242Z",
      "id": "rqY4nERbTfdhu2HWKR5V",
      "title": "Aula 1: fono-ortografia"
    }
  ],
  "hasNextPage": false,
  "hasPreviousPage": false
}

var returnAllDesignMockError = {
  "headers": {
    "normalizedNames": {},
    "lazyUpdate": null
  },
  "status": 401,
  "statusText": "OK",
  "url": "https://api.trakto.io/document?",
  "ok": false,
  "name": "HttpErrorResponse",
  "message": "Http failure response for https://api.trakto.io/document?: 401 OK",
  "error": {
    "statusCode": 401,
    "timestamp": "2023-04-25T00:27:24.518Z",
    "path": "/document?",
    "message": "Unauthorized"
  }
}