type MovementType = "income" | "expense";

export interface MovementI {
  id?: number;
  type: MovementType;
  amount: number;
  category: string;
  description: string;
  created_at?: string;
  updated_at?: string;
}
