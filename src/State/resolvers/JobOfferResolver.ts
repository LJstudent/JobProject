import { CompaniesList } from "Types/CompaniesList.Types";
import { CompanyJobOfferRequest } from "Types/CompanyJobOfferRequest.Types";

export function JobOfferResolver(response: CompanyJobOfferRequest[]): CompaniesList[] {
    const result: CompaniesList[] = [];

    for (let i = 0; i < response.length; i++) {
        const companyJobOffer: CompaniesList = {
           id: response[i].id,
           titleText: response[i].titleText,
           createdDate: response[i].createdDate,
           companyName: response[i].company.companyName,
           jobTitle: response[i].jobFunction.jobTitle,
           currencyCode: response[i].currency.id,
           minEmployees: response[i].employees.minEmployees,
           maxEmployees: response[i].employees.maxEmployees,
           country: response[i].location.country.name,
           city: response[i].location.city.name,
           typeProject: response[i].project.typeProject,
           minSalaryPerMonth: response[i].salaryPerMonth.minAmount,
           maxSalaryPerMonth: response[i].salaryPerMonth.maxAmount,
           codeStack: response[i].codeStack,
        }

        result.push(companyJobOffer)
    }


    return result
}