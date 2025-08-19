import type { modalDatas } from "../types/globalTypes";
import api from "./api"

export const createExpense = async(data:modalDatas)=>{
    const response = await api.post('/expense/create_expense',data)
    return response;
}