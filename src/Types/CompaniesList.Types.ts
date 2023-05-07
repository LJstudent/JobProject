import { Currency } from "./enums/Currency.Enum";

export interface CompaniesList {
    id: number;
    titleText: string;
    createdDate: Date;
    companyName: string;
    jobTitle: string;
    currencyCode: Currency;
    minEmployees: number;
    maxEmployees: number;
    country: string;
    city: string;
    typeProject: string;
    minSalaryPerMonth: number;
    maxSalaryPerMonth: number;
}