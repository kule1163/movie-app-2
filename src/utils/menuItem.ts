import {v4 as uuidv4} from "uuid"

interface MenuProps {
    id: string;
    name: string;
    path: string;
}

export const menuList:MenuProps[] = [
    {id: uuidv4(), name: "HOME", path: "/"},
    {id: uuidv4(), name: "MY LIST", path: "/list"},
]