import PersonInterface from "./PersonInterface";

export default interface UserInterface
{   
    id: number;
    email: string;
    createdAt: string;
    createdBy: string;
    updatedAt: string;
    updatedBy: string;
    person: PersonInterface;
    avatar: string;
}