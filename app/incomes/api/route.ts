export async function GET() {
  return {
    status: 200,
    body: JSON.stringify({ message: "Hello World" }),
  };
}

export async function POST() {
  return {
    status: 200,
    body: JSON.stringify({ message: "Hello World" }),
  };
}
