import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

// List All Toppings
export async function GET() {
  try {
    const toppings = await sql`SELECT * FROM Toppings;`;
    return NextResponse.json({ toppings: toppings.rows }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}

// Add Topping
export async function POST(request: Request) {
  const { topping } = await request.json();

  try {
    if (!topping) throw new Error("Topping name required");

    // Check if the topping already exists
    const existingTopping =
      await sql`SELECT * FROM Toppings WHERE name = ${topping};`;
    if (existingTopping.rowCount > 0) {
      throw new Error("Topping already exists");
    }

    await sql`INSERT INTO Toppings (name) VALUES (${topping});`;
    return NextResponse.json(
      { message: "Topping added successfully" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}

// Delete Topping
export async function DELETE(request: Request) {
  const { toppingId } = await request.json();

  try {
    if (!toppingId) throw new Error("Topping ID required");

    await sql`DELETE FROM Toppings WHERE id = ${toppingId};`;
    return NextResponse.json(
      { message: "Topping deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}

// Update Topping
export async function PUT(request: Request) {
  const { toppingId, newName } = await request.json();

  try {
    if (!toppingId || !newName)
      throw new Error("Topping ID and new name required");

    // Check if the new name already exists
    const existingTopping =
      await sql`SELECT * FROM Toppings WHERE name = ${newName};`;
    if (existingTopping.rowCount > 0) {
      throw new Error("Topping with this name already exists");
    }

    await sql`UPDATE Toppings SET name = ${newName} WHERE id = ${toppingId};`;
    return NextResponse.json(
      { message: "Topping updated successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
