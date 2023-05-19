export interface CompanyJobOfferRequest {
    id: number;
    titleText: string;
    createdDate: Date;
    deletedDate: Date | null;
    company: {
      id: number;
      companyName: string;
      createdDate: Date;
      deletedDate: Date | null;
    };
    jobFunction: {
      id: number;
      jobTitle: string;
    };
    currency: {
      id: number;
      code: string;
      name: string;
    };
    employees: {
      id: number;
      minEmployees: number;
      maxEmployees: number;
    };
    location: {
      id: number;
      country: {
        id: number;
        name: string;
      };
      city: {
        id: number;
        name: string;
      };
    };
    project: {
      id: number;
      typeProject: string;
    };
    salaryPerMonth: {
      id: number;
      minAmount: number;
      maxAmount: number;
    };
      codeStack: {
        id: number;
        codeName: string;
      }[];
      jobPerk: {
        id: number;
        perkName: string;
      }[];
  }