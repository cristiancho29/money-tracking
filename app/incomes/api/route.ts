import { sql } from "@vercel/postgres";

export interface Income {
  amount: number;
  description: string;
  category: string;
}

function incomeToSQLValues(income: Income) {
  return `(${income.amount}, ${income.description}, ${income.category})`;
}

export async function GET() {
  try {
    const { rows } = await sql`SELECT * FROM incomes;`;
    return Response.json({ rows }, { status: 200 });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}

export async function POST(request: Request) {
  const data: Income = await request.json();
  try {
    const result =
      await sql`INSERT INTO incomes (amount, description, category) VALUES ${incomeToSQLValues(
        data
      )};`;
    return Response.json({ result }, { status: 200 });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
