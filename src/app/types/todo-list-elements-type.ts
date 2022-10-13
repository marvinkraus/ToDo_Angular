import { todoListElements } from "app/models/todo-list-elements.model";
import { singletask } from "app/models/todo-list-singletask-model";

export type ElementsType = {
    parentID: string;
    elements: singletask[]
}

