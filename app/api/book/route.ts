import { neon } from '@neondatabase/serverless';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { firstName, lastName, email, phone, preferredDate, message } = body;

    // Connect securely to your Neon Database
    const sql = neon(process.env.DATABASE_URL!);

    // Insert the data into the table we just created
    await sql`
      INSERT INTO appointment_requests (first_name, last_name, email, phone, preferred_date, message)
      VALUES (${firstName}, ${lastName}, ${email}, ${phone}, ${preferredDate}, ${message})
    `;

    // (Later: We will add the Resend email code right here to notify Naza)

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Database error:", error);
    return NextResponse.json(
      { success: false, error: 'Failed to process request' }, 
      { status: 500 }
    );
  }
}