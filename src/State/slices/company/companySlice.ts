import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CompaniesList } from "../../../Types/CompaniesList.Types";
import { Currency } from "../../../Types/enums/Currency.Enum";


const initialState: CompaniesList = {
        id: 0,
        titleText: '',
        createdDate: new Date(),
        companyName: '',
        jobTitle: '',
        currencyCode: Currency.NONE,
        minEmployees: 0,
        maxEmployees: 0,
        country: '',
        city: '',
        typeProject: '',
        minSalaryPerMonth: 0,
        maxSalaryPerMonth: 0,
        codeStack: [],
        jobPerk: [],
};

export const companySlice = createSlice({
    name: 'company',
    initialState,
    reducers: {
        selectCompany: (_state, action: PayloadAction<CompaniesList>) => {
            return action.payload
        },
    },
});


export const { selectCompany } = companySlice.actions;

export default companySlice.reducer;