import {v4 as uuidv4} from "uuid"

interface ButtonItem {
    id: string;
    name: string;
}

export const buttonItems:ButtonItem[] = [
    {id: uuidv4(), name:"Popular"},
    {id: uuidv4(), name:"Top Rated"},
    {id: uuidv4(), name:"Upcoming"},
    {id: uuidv4(), name:"Now Playing"},
]