export interface Todo  {
    id:string;
    title: string;
    description: string;
    userId: string;
    status: boolean;
    category: string;
}
export type Todos = Todo[];