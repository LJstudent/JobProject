import { Currency } from '../../Types/enums/Currency.Enum';

export function CurrencySalaryPerMonth(currency: Currency) {

    let result: string;

    switch (currency) {
        case Currency.NONE:
            result = ""
            break;
        case Currency.USD:
            result = "$"
            break;
        case Currency.EUR:
            result = "€"
            break;
        case Currency.GBP:
            result = "£"
            break;
    }

    return result;
} 