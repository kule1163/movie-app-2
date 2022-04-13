import {v4 as uuidv4} from "uuid"

interface SortByItem {
    id: string;
    label: string;
    value: string;
}

export const sortByItems:SortByItem[] = [
    {id: uuidv4(), label: "Original Sort", value: "o"},
    {id: uuidv4(), label: "Vote", value: "v"},
    {id: uuidv4(), label: "Relase Date", value: "r"},
    {id: uuidv4(), label: "Title", value: "t"},
]