import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'tijo-web';
  isMobile = false;

  constructor(@Inject(DOCUMENT) private document: Document, private route: ActivatedRoute, router: Router) {
    this.isMobile = (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));

    this.route.queryParams.subscribe(params => {

      if (params['sub']) {
        switch (params['sub']) {
          case "login":
            if (this.isMobile) {
              this.document.location.href = 'https://www.tijo.com.br/mobile';
            } else {
              this.document.location.href = 'https://www.tijo.com.br/admin';
            }
            break;
          case "cadastro":
            if (this.isMobile) {
              let urlRedirect = ('https://www.tijo.com.br/mobile/auth/register');
              this.document.location.href = urlRedirect;
            } else {
              let urlRedirect = ('https://www.tijo.com.br/admin/login');
              this.document.location.href = urlRedirect;
            }
            break;
        }
      }
    });

  }


  ngOnInit(): void {

  }

}
