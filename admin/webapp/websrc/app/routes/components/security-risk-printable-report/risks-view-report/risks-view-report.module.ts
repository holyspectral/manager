import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NvCommonModule } from '@common/nvCommon.module';
import { RisksViewReportComponent } from './risks-view-report.component';
import { RiskViewReportDescriptionColComponent } from './risk-view-report-description-col/risk-view-report-description-col.component';
import { RiskViewReportPackagesColComponent } from './risk-view-report-packages-col/risk-view-report-packages-col.component';
import { RiskViewReportImpactColComponent } from './risk-view-report-impact-col/risk-view-report-impact-col.component';
import { RiskViewReportTableComponent } from './risk-view-report-table/risk-view-report-table.component';
import { RiskViewReportAppendixPackagesComponent } from './risk-view-report-appendix-packages/risk-view-report-appendix-packages.component';



@NgModule({
  declarations: [
    RisksViewReportComponent,
    RiskViewReportDescriptionColComponent,
    RiskViewReportPackagesColComponent,
    RiskViewReportImpactColComponent,
    RiskViewReportTableComponent,
    RiskViewReportAppendixPackagesComponent
  ],
  imports: [
    CommonModule,
    NvCommonModule
  ],
  exports: [
    RisksViewReportComponent,
    RiskViewReportTableComponent,
    RiskViewReportAppendixPackagesComponent
  ]
})
export class RisksViewReportModule { }
