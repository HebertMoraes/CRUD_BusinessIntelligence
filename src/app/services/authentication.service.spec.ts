import { TestBed } from '@angular/core/testing';

import { AuthenticationService } from './authentication.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { lastValueFrom, of, timer } from 'rxjs';

describe('UserService', () => {
  let service: AuthenticationService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpClient, HttpHandler]
    });
    service = TestBed.inject(AuthenticationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('requisição signInWithEmailPassword retorna erro', async () => {
    const SignInSpy = jest.spyOn(service, 'signInWithEmailPassword');
    SignInSpy.mockReturnValue(of(error401Mock));
    await expect(lastValueFrom(service.signInWithEmailPassword("teste@gmail.com", "senhaBacana")))
      .resolves.toHaveProperty('error.statusCode', 401);
  });

  it('requisição signInWithEmailPassword retorna os dados corretamente', async () => {
    const SignInSpy = jest.spyOn(service, 'signInWithEmailPassword');
    SignInSpy.mockReturnValue(of(statusOkMock));
    await expect(lastValueFrom(service.signInWithEmailPassword("teste@gmail.com", "senhaBacana")))
      .resolves.toHaveProperty('role.title', 'User');
  });
});


var error401Mock = {
  "headers": {
    "normalizedNames": {},
    "lazyUpdate": null
  },
  "status": 401,
  "statusText": "OK",
  "url": "https://api.trakto.io/auth/signin",
  "ok": false,
  "name": "HttpErrorResponse",
  "message": "Http failure response for https://api.trakto.io/auth/signin: 401 OK",
  "error": {
    "statusCode": 401,
    "timestamp": "2023-04-26T16:57:01.021Z",
    "path": "/auth/signin",
    "message": "Incorrect access data!"
  }
}

var statusOkMock = {
  "id": "6rBEeTLNd4dmJlk3fwg71R1SLid2",
  "firstname": "Hebert Moraes",
  "role": {
    "title": "User",
    "value": "user"
  },
  "app_reference": {
    "id": "oAYhKVHiqb3zNKF8dXZh"
  },
  "created_at": "2023-04-19T21:28:39.190Z",
  "can_authenticate": true,
  "products": [
    "fbvZngcBbaFZeUK8h0il"
  ],
  "force_reset_password": false,
  "approved_terms_use": true,
  "email": "hebertmoraes2019@gmail.com",
  "customer_id": "cus_NkCyIHoGkINNYg",
  "subscription_payment_status": "free",
  "subscription_reference": {
    "id": "0Y6QyQqLCmYv2oWq2LCM"
  },
  "current_profile": {
    "product": {
      "id": "fbvZngcBbaFZeUK8h0il",
      "title": "Trakto",
      "type": "B2C"
    },
    "current_locale": "pt-BR",
    "subscription": {
      "renew_at": "2023-04-19T21:28:41.803Z",
      "product_subscribed": {
        "metadata": null,
        "app_reference": {
          "id": "oAYhKVHiqb3zNKF8dXZh"
        },
        "is_published": true,
        "active": true,
        "created_at": {
          "seconds": 1574650800,
          "nanoseconds": 0
        },
        "plan_reference": {
          "id": "rchSHdtyUNkwYLClDku8"
        },
        "rules": {
          "export_pdf_low": true,
          "image_upload": true,
          "create_document": true,
          "export_gif": true,
          "document_publish_online": true,
          "export_pdf_medium": true,
          "export_video": false,
          "remove_bg": true,
          "export_gif_count": 0,
          "export_pdf_count": 1000,
          "remove_bg_count": 5,
          "use_template_premium_count": 3,
          "icon_stock": true,
          "export_png_medium": true,
          "export_video_count": 1000,
          "image_stock": true,
          "export_png_high": true,
          "export_with_watermark": false,
          "export_png_low": true,
          "export_pdf_high": false,
          "font_premium": false,
          "use_template_premium": false,
          "shape_stock": true,
          "upload_font": false,
          "export_png_count": 1000,
          "create_document_count": 5
        },
        "hotmart_product_id": null,
        "descriptor": {
          "en-US": "Plano Free utilizado após o Trial finalizado ou assinatura cancelada",
          "pt-BR": "Plano Free utilizado após o Trial finalizado ou assinatura cancelada"
        },
        "titles": {
          "en-US": "Free",
          "pt-BR": "Free"
        },
        "is_default": false,
        "locale": [
          "pt-BR",
          "en-US"
        ],
        "gateway_product_id": null,
        "is_deleted": false,
        "payment_required": false,
        "updated_at": {
          "seconds": 1591153200,
          "nanoseconds": 0
        },
        "sortment_descriptor": {
          "en-US": "Plano Free utilizado após o Trial finalizado ou assinatura cancelada",
          "pt-BR": "Plano Free utilizado após o Trial finalizado ou assinatura cancelada"
        },
        "is_free": true,
        "team_members": 0,
        "id": "rchSHdtyUNkwYLClDku8",
        "from_hotmart": false,
        "gateway_name": null
      },
      "payment_status": "free",
      "active": true,
      "created_at": "2023-04-19T21:28:41.803Z",
      "id": "0Y6QyQqLCmYv2oWq2LCM",
      "is_trial": false,
      "gateway": {
        "product": {
          "amount": null,
          "usage_type": null,
          "product_id": null,
          "currency": null,
          "title": {
            "en-US": "Free",
            "pt-BR": "Free"
          }
        },
        "interval": null,
        "gateway_id": "stripe"
      },
      "limits": {
        "export_pdf_low": true,
        "image_upload": true,
        "create_document": true,
        "export_gif": true,
        "document_publish_online": true,
        "export_pdf_medium": true,
        "export_video": false,
        "remove_bg": true,
        "export_gif_count": 0,
        "export_pdf_count": 1000,
        "remove_bg_count": 5,
        "use_template_premium_count": 3,
        "icon_stock": true,
        "export_png_medium": true,
        "export_video_count": 1000,
        "image_stock": true,
        "export_png_high": true,
        "export_with_watermark": false,
        "export_png_low": true,
        "export_pdf_high": false,
        "font_premium": false,
        "use_template_premium": false,
        "shape_stock": true,
        "upload_font": false,
        "export_png_count": 1000,
        "create_document_count": 5
      }
    }
  },
  "subscription_status": "active",
  "profiles": [
    {
      "product": {
        "id": "fbvZngcBbaFZeUK8h0il",
        "title": "Trakto",
        "type": "B2C"
      },
      "current_locale": "pt-BR",
      "subscription": {
        "renew_at": "2023-04-19T21:28:41.803Z",
        "product_subscribed": {
          "metadata": null,
          "app_reference": {
            "id": "oAYhKVHiqb3zNKF8dXZh"
          },
          "is_published": true,
          "active": true,
          "created_at": {
            "seconds": 1574650800,
            "nanoseconds": 0
          },
          "rules": {
            "export_pdf_low": true,
            "image_upload": true,
            "create_document": true,
            "export_gif": true,
            "document_publish_online": true,
            "export_pdf_medium": true,
            "export_video": false,
            "remove_bg": true,
            "export_pdf_count": 1000,
            "export_gif_count": 0,
            "remove_bg_count": 5,
            "use_template_premium_count": 3,
            "icon_stock": true,
            "export_png_medium": true,
            "image_stock": true,
            "export_video_count": 1000,
            "export_with_watermark": false,
            "export_png_high": true,
            "export_png_low": true,
            "export_pdf_high": false,
            "font_premium": false,
            "use_template_premium": false,
            "shape_stock": true,
            "upload_font": false,
            "export_png_count": 1000,
            "create_document_count": 5
          },
          "plan_reference": {
            "id": "rchSHdtyUNkwYLClDku8"
          },
          "titles": {
            "en-US": "Free",
            "pt-BR": "Free"
          },
          "descriptor": {
            "en-US": "Plano Free utilizado após o Trial finalizado ou assinatura cancelada",
            "pt-BR": "Plano Free utilizado após o Trial finalizado ou assinatura cancelada"
          },
          "hotmart_product_id": null,
          "locale": [
            "pt-BR",
            "en-US"
          ],
          "is_default": false,
          "gateway_product_id": null,
          "is_deleted": false,
          "payment_required": false,
          "updated_at": {
            "seconds": 1591153200,
            "nanoseconds": 0
          },
          "sortment_descriptor": {
            "en-US": "Plano Free utilizado após o Trial finalizado ou assinatura cancelada",
            "pt-BR": "Plano Free utilizado após o Trial finalizado ou assinatura cancelada"
          },
          "is_free": true,
          "team_members": 0,
          "id": "rchSHdtyUNkwYLClDku8",
          "from_hotmart": false,
          "gateway_name": null
        },
        "payment_status": "free",
        "active": true,
        "created_at": "2023-04-19T21:28:41.803Z",
        "id": "0Y6QyQqLCmYv2oWq2LCM",
        "is_trial": false,
        "gateway": {
          "product": {
            "amount": null,
            "usage_type": null,
            "product_id": null,
            "currency": null,
            "title": {
              "en-US": "Free",
              "pt-BR": "Free"
            }
          },
          "interval": null,
          "gateway_id": "stripe"
        },
        "limits": {
          "export_pdf_low": true,
          "image_upload": true,
          "create_document": true,
          "export_gif": true,
          "document_publish_online": true,
          "export_pdf_medium": true,
          "export_video": false,
          "remove_bg": true,
          "export_pdf_count": 1000,
          "export_gif_count": 0,
          "remove_bg_count": 5,
          "use_template_premium_count": 3,
          "icon_stock": true,
          "export_png_medium": true,
          "image_stock": true,
          "export_video_count": 1000,
          "export_with_watermark": false,
          "export_png_high": true,
          "export_png_low": true,
          "export_pdf_high": false,
          "font_premium": false,
          "use_template_premium": false,
          "shape_stock": true,
          "upload_font": false,
          "export_png_count": 1000,
          "create_document_count": 5
        }
      }
    }
  ],
  "subscription_rules": {
    "export_pdf_low": true,
    "image_upload": true,
    "create_document": true,
    "export_gif": true,
    "document_publish_online": true,
    "export_pdf_medium": true,
    "export_video": false,
    "remove_bg": true,
    "export_gif_count": 0,
    "export_pdf_count": 1000,
    "remove_bg_count": 5,
    "use_template_premium_count": 3,
    "icon_stock": true,
    "export_png_medium": true,
    "export_video_count": 1000,
    "image_stock": true,
    "export_png_high": true,
    "export_with_watermark": false,
    "export_png_low": true,
    "export_pdf_high": false,
    "font_premium": false,
    "use_template_premium": false,
    "shape_stock": true,
    "upload_font": false,
    "export_png_count": 1000,
    "create_document_count": 5
  },
  "subscription_plan_name": "free",
  "current_locale": {
    "fbvZngcBbaFZeUK8h0il": "pt-BR"
  },
  "email_verified": true,
  "logo": {
    "folder": null,
    "is_deleted": false,
    "provider": "internal",
    "format": "jpeg",
    "isThumbnail": true,
    "created_at": {},
    "id": "1f8722ce-4907-4d01-97b5-9ee2dc521fe4",
    "uuid": "1f8722ce-4907-4d01-97b5-9ee2dc521fe4",
    "url": {
      "high": {
        "extension": "jpeg",
        "size": "105.788 Kb",
        "provider": "internal",
        "bytes": 105788,
        "dimensions": {
          "width": 1600,
          "height": 1200
        },
        "filename": "1f8722ce-4907-4d01-97b5-9ee2dc521fe4.jpeg",
        "secure_url": "https://assets.storage.trakto.io/6rBEeTLNd4dmJlk3fwg71R1SLid2/1f8722ce-4907-4d01-97b5-9ee2dc521fe4.jpeg",
        "directory": "assets-v3.trakto.io/6rBEeTLNd4dmJlk3fwg71R1SLid2/1f8722ce-4907-4d01-97b5-9ee2dc521fe4.jpeg",
        "uuid": "1f8722ce-4907-4d01-97b5-9ee2dc521fe4",
        "url": "https://assets.storage.trakto.io/6rBEeTLNd4dmJlk3fwg71R1SLid2/1f8722ce-4907-4d01-97b5-9ee2dc521fe4.jpeg"
      },
      "low": {
        "extension": "jpeg",
        "size": "105.788 Kb",
        "provider": "internal",
        "bytes": 105788,
        "dimensions": {
          "width": 1600,
          "height": 1200
        },
        "filename": "1f8722ce-4907-4d01-97b5-9ee2dc521fe4.jpeg",
        "secure_url": "https://assets.storage.trakto.io/6rBEeTLNd4dmJlk3fwg71R1SLid2/1f8722ce-4907-4d01-97b5-9ee2dc521fe4.jpeg",
        "directory": "assets-v3.trakto.io/6rBEeTLNd4dmJlk3fwg71R1SLid2/1f8722ce-4907-4d01-97b5-9ee2dc521fe4.jpeg",
        "uuid": "1f8722ce-4907-4d01-97b5-9ee2dc521fe4",
        "url": "https://assets.storage.trakto.io/6rBEeTLNd4dmJlk3fwg71R1SLid2/1f8722ce-4907-4d01-97b5-9ee2dc521fe4.jpeg"
      },
      "raw": {
        "extension": "jpeg",
        "size": "105.788 Kb",
        "provider": "internal",
        "bytes": 105788,
        "dimensions": {
          "width": 1600,
          "height": 1200
        },
        "filename": "1f8722ce-4907-4d01-97b5-9ee2dc521fe4.jpeg",
        "secure_url": "https://assets.storage.trakto.io/6rBEeTLNd4dmJlk3fwg71R1SLid2/1f8722ce-4907-4d01-97b5-9ee2dc521fe4.jpeg",
        "directory": "assets-v3.trakto.io/6rBEeTLNd4dmJlk3fwg71R1SLid2/1f8722ce-4907-4d01-97b5-9ee2dc521fe4.jpeg",
        "uuid": "1f8722ce-4907-4d01-97b5-9ee2dc521fe4",
        "url": "https://assets.storage.trakto.io/6rBEeTLNd4dmJlk3fwg71R1SLid2/1f8722ce-4907-4d01-97b5-9ee2dc521fe4.jpeg"
      },
      "medium": {
        "extension": "jpeg",
        "size": "105.788 Kb",
        "provider": "internal",
        "bytes": 105788,
        "dimensions": {
          "width": 1600,
          "height": 1200
        },
        "filename": "1f8722ce-4907-4d01-97b5-9ee2dc521fe4.jpeg",
        "secure_url": "https://assets.storage.trakto.io/6rBEeTLNd4dmJlk3fwg71R1SLid2/1f8722ce-4907-4d01-97b5-9ee2dc521fe4.jpeg",
        "directory": "assets-v3.trakto.io/6rBEeTLNd4dmJlk3fwg71R1SLid2/1f8722ce-4907-4d01-97b5-9ee2dc521fe4.jpeg",
        "uuid": "1f8722ce-4907-4d01-97b5-9ee2dc521fe4",
        "url": "https://assets.storage.trakto.io/6rBEeTLNd4dmJlk3fwg71R1SLid2/1f8722ce-4907-4d01-97b5-9ee2dc521fe4.jpeg"
      }
    }
  },
  "limits": {
    "export_pdf_low": true,
    "image_upload": true,
    "create_document": true,
    "export_gif": true,
    "document_publish_online": true,
    "export_pdf_medium": true,
    "export_video": false,
    "remove_bg": true,
    "export_pdf_count": 1000,
    "export_gif_count": 0,
    "remove_bg_count": 5,
    "use_template_premium_count": 3,
    "gif_stock": true,
    "icon_stock": true,
    "export_png_medium": true,
    "image_stock": true,
    "export_video_count": 1000,
    "export_with_watermark": false,
    "export_png_high": true,
    "export_png_low": true,
    "export_pdf_high": false,
    "font_premium": false,
    "use_template_premium": false,
    "shape_stock": true,
    "upload_font": false,
    "export_png_count": 1000,
    "create_document_count": 5
  },
  "firebase_token": "eyJhbGciOiJSUzI1NiIsImtpZCI6InRCME0yQSJ9.eyJpc3MiOiJodHRwczovL2lkZW50aXR5dG9vbGtpdC5nb29nbGUuY29tLyIsImF1ZCI6InRyYWt0by1wcm9kdWN0aW9uIiwiaWF0IjoxNjgyNTM5NjgxLCJleHAiOjE2ODM3NDkyODEsInVzZXJfaWQiOiI2ckJFZVRMTmQ0ZG1KbGszZndnNzFSMVNMaWQyIiwiZW1haWwiOiJoZWJlcnRtb3JhZXMyMDE5QGdtYWlsLmNvbSIsInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCIsInZlcmlmaWVkIjp0cnVlLCJkaXNwbGF5X25hbWUiOiJIZWJlcnQgTW9yYWVzIn0.h0TsR0sQ2Prbu1QoidJEKtQFjb0Db27UCocdEVSD1Rk5Oclr3LPFTc496WOrT30Szb5XdqKDmul_axxAxwihzRTau1QaT_6qMkE8osxSm7vkzEPlf6kB2EiSzfxte8lh6_gkWjUOVJJtak3z4ilqdnP3kk_ObOt8_N1iwA9imrOhne74Td46BlhgD2MmtnOga9ZtU975r2Nar2YFRJcsXIZn2UjkBTpicKwQBQ6oY47XQPTldTCLE5AQY75d6rRVOEIeYT9bAF9tp4-unHUHjgFFvjcKdybAk8alU4og8H6KkN5cdfbcBYuL1ZUdTqukTWO4gUAC-_mLgOVojKUnGg",
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjdXJyZW50X3Byb2ZpbGUiOnsicHJvZHVjdCI6eyJpZCI6ImZidlpuZ2NCYmFGWmVVSzhoMGlsIn0sImN1cnJlbnRfbG9jYWxlIjoicHQtQlIifSwicHJvZmlsZXMiOlt7InByb2R1Y3QiOnsiaWQiOiJmYnZabmdjQmJhRlplVUs4aDBpbCJ9fV0sInN1YiI6IjZyQkVlVExOZDRkbUpsazNmd2c3MVIxU0xpZDIiLCJyb2xlIjoidXNlciIsImNvbnRleHQiOiJ0cmFrdG8uaW8iLCJpYXQiOjE2ODI1Mzk2ODEsImV4cCI6MTY4MjcxMjQ4MX0.cCvP4gKWBr7KhLDG4go1xfrIjV0EGeK0qQEvwypC-_Q",
  "refresh_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjdXJyZW50X3Byb2ZpbGUiOnsicHJvZHVjdCI6eyJpZCI6ImZidlpuZ2NCYmFGWmVVSzhoMGlsIn0sImN1cnJlbnRfbG9jYWxlIjoicHQtQlIifSwicHJvZmlsZXMiOlt7InByb2R1Y3QiOnsiaWQiOiJmYnZabmdjQmJhRlplVUs4aDBpbCJ9fV0sInN1YiI6IjZyQkVlVExOZDRkbUpsazNmd2c3MVIxU0xpZDIiLCJyb2xlIjoidXNlciIsImNvbnRleHQiOiJ0cmFrdG8uaW8iLCJpYXQiOjE2ODI1Mzk2ODEsImV4cCI6MTY4Mzc0OTI4MX0.wGLskkVmiQB7tLtJRYoEmhzj-H_Shtr-fGv37rSXfg4"
}