import { CodeStack } from "./CodeStack.Types";
import { JobPerk } from "./JobPerk.Types";
import { Currency } from "./enums/Currency.Enum";

export interface CompaniesList {
    id: number;
    titleText: string;
    createdDate: Date;
    companyName: string;
    companyId: number;
    jobTitle: string;
    currencyCode: Currency;
    minEmployees: number;
    maxEmployees: number;
    country: string;
    city: string;
    typeProject: string;
    minSalaryPerMonth: number;
    maxSalaryPerMonth: number;
    codeStack: CodeStack[];
    jobPerk: JobPerk[];
}