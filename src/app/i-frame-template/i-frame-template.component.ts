import { Component, OnDestroy } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-i-frame-template',
  templateUrl: './i-frame-template.component.html',
  styleUrls: ['./i-frame-template.component.scss']
})
export class IFrameTemplateComponent{
  
  numero!: number;

  iframeUrl = [
  /*0  */ '',//0 para limpiar dememoria 
  /*1  */ 'https://bit.inteliens.com/login',//PRICING Y COBERTURAS
  /*2  */ 'https://dkvseguros.inteliens.com/',//ARGUMENTARIOS
  /*3  */ 'https://www.plimsoll.es/',//INFORME SECTORIAL CORREDURIAS
  /*4  */ 'https://dkvseguros.sharepoint.com/:f:/r/sites/InvestigacinComercial83/Repositorio%20de%20estudios/2024?csf=1&web=1&e=vMyzfe',//NOTICIAS SECTORIALES
  /*5  */ 'https://app.powerbi.com/reportEmbed?reportId=2d57a24a-909e-4dd9-b58c-096ce37f5a3b&autoAuth=true&ctid=38fd77bb-cf74-4d5c-9b52-df4f93ca63db',//por que llega
  // /*5  */ 'https://app.powerbi.com/reportEmbed?reportId=20dc1440-3f1c-47ec-981a-dd9616b4a895&autoAuth=true&ctid=38fd77bb-cf74-4d5c-9b52-df4f93ca63db',//por que llega
  /*6  */ 'https://app.powerbi.com/reportEmbed?reportId=d28436d4-212c-4916-9964-e1cf520fb33e&autoAuth=true&ctid=38fd77bb-cf74-4d5c-9b52-df4f93ca63db',//como es
  // /*6  */ 'https://app.powerbi.com/reportEmbed?reportId=3095f76b-afd3-4d08-a814-ede2b8d16354&autoAuth=true&ctid=38fd77bb-cf74-4d5c-9b52-df4f93ca63db',//como es
  /*7  */ 'https://app.powerbi.com/reportEmbed?reportId=25fcb441-563f-4f78-823a-299eba813a36&autoAuth=true&ctid=38fd77bb-cf74-4d5c-9b52-df4f93ca63db',//como actua
  // /*7  */ 'https://app.powerbi.com/reportEmbed?reportId=9ea29361-7a11-4181-afda-452e2e20ad12&autoAuth=true&ctid=38fd77bb-cf74-4d5c-9b52-df4f93ca63db',//como actua
  /*8  */ 'https://app.powerbi.com/reportEmbed?reportId=172c2c90-fc04-4262-8614-8fcb1a0cbcb5&autoAuth=true&ctid=38fd77bb-cf74-4d5c-9b52-df4f93ca63db',//donde vive
  //  /*8  */ 'https://app.powerbi.com/reportEmbed?reportId=33d7d81a-11d2-4f96-85ff-d01a1cf9c7c2&autoAuth=true&ctid=38fd77bb-cf74-4d5c-9b52-df4f93ca63db',//donde vive
  /*9  */ 'https://app.powerbi.com/reportEmbed?reportId=bd997999-8d9c-4b2f-b7d2-9429170cefe2&autoAuth=true&ctid=38fd77bb-cf74-4d5c-9b52-df4f93ca63db',//que le motiva
  // /*9  */ 'https://app.powerbi.com/reportEmbed?reportId=66f27431-df4d-40f5-a980-61a308d11be5&autoAuth=true&ctid=38fd77bb-cf74-4d5c-9b52-df4f93ca63db',//que le motiva
  /*10 */ 'https://app.powerbi.com/reportEmbed?reportId=e45d0368-b883-4a2c-8f38-88ff27d0c05b&autoAuth=true&ctid=38fd77bb-cf74-4d5c-9b52-df4f93ca63db',//por que se va
  // /*10 */ 'https://app.powerbi.com/reportEmbed?reportId=53de98bf-2d16-45d1-85e1-d9de0f8929fb&autoAuth=true&ctid=38fd77bb-cf74-4d5c-9b52-df4f93ca63db',//por que se va
  /*11 */ 'https://app.powerbi.com/reportEmbed?reportId=fbac25a9-c800-4887-9091-2248ca03d2c1&autoAuth=true&ctid=38fd77bb-cf74-4d5c-9b52-df4f93ca63db',//cuadro de mando
  // /*11 */ 'https://app.powerbi.com/reportEmbed?reportId=6fe1b085-f679-4f69-a887-903a2ecbef11&autoAuth=true&ctid=38fd77bb-cf74-4d5c-9b52-df4f93ca63db',//cuadro de mando
  /*12 */ 'https://app.powerbi.com/reportEmbed?reportId=d3f496c2-9db7-4f53-b688-bc79b913d9bb&autoAuth=true&ctid=38fd77bb-cf74-4d5c-9b52-df4f93ca63db',//estudio de bajas
  /*13 */ 'https://app.powerbi.com/reportEmbed?reportId=d3f496c2-9db7-4f53-b688-bc79b913d9bb&autoAuth=true&ctid=38fd77bb-cf74-4d5c-9b52-df4f93ca63db',//campanias de marketing
  /*14 */ 'https://app.powerbi.com/reportEmbed?reportId=ddf27c1b-6730-4d28-8310-ea0b9665efe4&autoAuth=true&ctid=38fd77bb-cf74-4d5c-9b52-df4f93ca63db',//dimensionamiento acciones 
  // /*14 */ 'https://app.powerbi.com/reportEmbed?reportId=c7e6206d-1ceb-47ed-b0a4-f7af7db3fa30&autoAuth=true&ctid=38fd77bb-cf74-4d5c-9b52-df4f93ca63db',//dimensionamiento acciones 
  /*15 */ 'https://informa.inatlas.com/#/home',//geomarketing empresas
  /*16 */ 'https://dkvseguros.sharepoint.com/sites/InvestigacinComercial83/Repositorio%20de%20estudios/Forms/AllItems.aspx',//REPOSITORIO DE ESTUDIOS    
  /*17 */ 'https://app.powerbi.com/reportEmbed?reportId=6ef3e4f9-3803-4302-9afc-6b8d93c94bff&autoAuth=true&ctid=38fd77bb-cf74-4d5c-9b52-df4f93ca63db',//Impacto acciones marketing
  // /*17 */ 'https://app.powerbi.com/reportEmbed?reportId=a75940f0-bf56-4aba-819c-44690bf323d8&autoAuth=true&ctid=38fd77bb-cf74-4d5c-9b52-df4f93ca63db',//Impacto acciones marketing
  // /*18 */ 'https://app.powerbi.com/reportEmbed?reportId=dc9f2d98-9a48-42ef-9f22-4181a9514ba1&autoAuth=true&ctid=38fd77bb-cf74-4d5c-9b52-df4f93ca63db',//Cifras de mercado
  /*18 */ 'https://app.powerbi.com/reportEmbed?reportId=dac1238d-f6bb-4951-bec7-9fc3240f4486&autoAuth=true&ctid=38fd77bb-cf74-4d5c-9b52-df4f93ca63db',//Cifras de mercado
  /*19 */ 'https://app.powerbi.com/reportEmbed?reportId=ed9dfd2b-010e-4ed1-9836-bb235898577c&autoAuth=true&ctid=38fd77bb-cf74-4d5c-9b52-df4f93ca63db',//Perfil cliente colectivo
  // /*19 */ 'https://app.powerbi.com/reportEmbed?reportId=78c244a0-f0c2-4a1a-ad09-00a36427c819&autoAuth=true&ctid=38fd77bb-cf74-4d5c-9b52-df4f93ca63db',//Perfil cliente colectivo
  /*20 */ 'https://dkvseguros.sharepoint.com/sites/InvestigacinComercial83/Repositorio%20de%20estudios/Forms/AllItems.aspxhttps://dkvseguros.sharepoint.com/:f:/r/sites/InvestigacinComercial83/Repositorio de estudios/2024/4. BOLET%C3%8DN NOVEDADES MENSUAL?csf=1&web=1&e=YehEsR',//Noticias Sectoriales
  /*21 */ 'https://app.powerbi.com/reportEmbed?reportId=b9e072c5-17a3-47b6-b0bf-aa41287a3298&autoAuth=true&ctid=38fd77bb-cf74-4d5c-9b52-df4f93ca63db'//Cuadro de Mando Campañas
  // /*21 */ 'https://app.powerbi.com/reportEmbed?reportId=5823f32e-a07f-4d69-8c6d-f581164cd4df&autoAuth=true&ctid=38fd77bb-cf74-4d5c-9b52-df4f93ca63db'//Cuadro de Mando Campañas
];

  iframeTitulo = [
    '',//0 para limpiar dememoria 
    'PRICING Y COBERTURAS',
    'ARGUMENTARIOS',
    'INFORME SECTORIAL CORREDURIAS',
    'NOTICIAS SECTORIALES',
    'Por qué llega',
    'Cómo es',
    'Cómo actúa',
    'Dónde vive',
    'Qué le motiva',
    'Por qué se va',
    'Cuadro de mando',
    'Estudio de bajas',
    'Campañas de marketing',
    'Dimensionamiento acciones comerciales',
    'Geomarketing empresas',
    'REPOSITORIO DE ESTUDIOS',
    'Impacto acciones marketing',
    'Cifras de mercado',
    'Perfil cliente colectivo',
    'Noticias Sectoriales',
    'Cuadro de Mando Campañas'
  ];

  ngOnInit() {
    // this.numero = this.route.snapshot.paramMap.get('numero');
    if (this.route) {
      const num = this.route.snapshot.paramMap.get('numero');
      if (num !== null) {
        this.numero = +num;
      }
    }    
  }
  
  constructor(
    private sanitizer: DomSanitizer, 
    private route: ActivatedRoute,
    private location: Location
  ) { }


  getIframeUrl() {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.iframeUrl[this.numero]);
  }

  goBack() {
      this.location.back();
 }

  ngOnDestroy() {
    this.numero = 0;
  }

  restoreMaximizar() {
    const siblings = document.querySelectorAll(`#iframeUno`);

    siblings.forEach((sibling) => {
        const element = sibling as HTMLElement;
        if (element.classList.contains('maximizar-iframe')) {
            element.classList.remove('maximizar-iframe');
            element.classList.add('restore-iframe');
        } else {
            element.classList.remove('restore-iframe');
            element.classList.add('maximizar-iframe');
        }
    });

     const titleSiblings = document.querySelectorAll(`#title`);

     titleSiblings.forEach((titleSibling) => {
         const element = titleSibling as HTMLElement;
         if (element.classList.contains('none')) {
             element.classList.remove('none');
         } else {
             element.classList.add('none');
         }
     });
     
     const imgSiblings = document.querySelectorAll(`#imgRestoreMaximizar`);

     imgSiblings.forEach((imgSibling) => {
         const element = imgSibling as HTMLElement;
         if (element.classList.contains('Maximizar')) {
             element.classList.remove('Maximizar');
         } else {
             element.classList.add('Maximizar');
         }
     });
 }

}
