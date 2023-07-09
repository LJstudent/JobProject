import { Graduation } from "./Graduation.Types";
import { Undertake } from "./Undertake.Types";

export interface CompanyInfoJobOffer {
    id: number;
    companyInfo: string;
    jobInfo: string;
    role: string;
    teamEffort: string;
    target: string;
    like: string;
    teamSize: number;
    officeInfo: string;
    graduation: Graduation;
    undertake: Undertake[];
  }