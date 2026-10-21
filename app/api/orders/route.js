


export async function POST(request) {
  const body = await request.json();

  const { dish, quantity } = body;

  if (!dish || !quantity || quantity < 1) {
    return Response.json(
      { message: "Enter a dish and valid quantity." },
      { status: 400 }
    );
  }

  return Response.json(
    {
      message: "Order received successfully!",
      order: { dish, quantity }
    },
    { status: 201 }
  );
}

