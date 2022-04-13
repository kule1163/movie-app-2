import {v4 as uuidv4} from "uuid"

interface YearOption {
    id: string;
    option: string;
    value: number;
}

export const yearOptions:YearOption[] = [
    {id: uuidv4(), option: "'50s", value: 50},
    {id: uuidv4(), option: "'60s", value: 60},
    {id: uuidv4(), option: "'70s", value: 70},
    {id: uuidv4(), option: "'80s", value: 80},
    {id: uuidv4(), option: "'90s", value: 90},
    {id: uuidv4(), option: "2000-10", value: 2000},
    {id: uuidv4(), option: "2010-20", value: 2010},
    {id: uuidv4(), option: "2020-", value: 2020},
]