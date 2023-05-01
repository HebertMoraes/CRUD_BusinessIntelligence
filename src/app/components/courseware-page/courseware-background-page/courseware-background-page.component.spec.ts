import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursewareBackgroundPageComponent } from './courseware-background-page.component';
import { of } from 'rxjs';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { DesignService } from '../../../services/design.service';

describe('CoursewareBackgroundPageComponent', () => {
  let component: CoursewareBackgroundPageComponent;
  let fixture: ComponentFixture<CoursewareBackgroundPageComponent>;
  var getAllServiceSpy!: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoursewareBackgroundPageComponent ], 
      providers: [DesignService, HttpClient, HttpHandler]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoursewareBackgroundPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    getAllServiceSpy = jest.spyOn(component.designService, 'getAllDesign');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('getAllDesignThumbs seta valores corretos quando a service retorna status ok', () => {
    getAllServiceSpy.mockReturnValue(of(returnAllDesignMock));
    component.getAllDesignThumbs();
    expect(component.designsThumbsToShow.length).toBe(2);
  });

  it('se a service retorna um erro, o toastr avisa que algo deu erro', () => {
    var consoleLogSpy = jest.spyOn(console, 'log');
    component.getAllDesignThumbs();
    expect(component.designsThumbsToShow).toBeFalsy();
    expect(consoleLogSpy).toBeCalled();
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