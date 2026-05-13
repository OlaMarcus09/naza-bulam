import { neon } from '@neondatabase/serverless';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize Resend with your API key
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { firstName, lastName, email, phone, preferredDate, message } = body;

    // 1. Connect securely to your Neon Database
    const sql = neon(process.env.DATABASE_URL!);

    // 2. Insert the data into the table
    await sql`
      INSERT INTO appointment_requests (first_name, last_name, email, phone, preferred_date, message)
      VALUES (${firstName}, ${lastName}, ${email}, ${phone}, ${preferredDate}, ${message})
    `;

    // 3. Generate a Google Calendar Link (All-day event for the preferred date)
    // Converts "2026-05-15" to "20260515"
    const startDate = preferredDate.replace(/-/g, ""); 
    const nextDay = new Date(preferredDate);
    nextDay.setDate(nextDay.getDate() + 1);
    const endDate = nextDay.toISOString().split("T")[0].replace(/-/g, "");
    
    const calLink = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=Naza+Bulam+Consultation&dates=${startDate}/${endDate}&details=Your+appointment+request+is+currently+being+reviewed.+The+Atelier+will+contact+you+to+confirm+the+exact+time.&location=Abuja,+Nigeria`;

    // 4. Send the Luxury HTML Email via Resend
    const { data, error } = await resend.emails.send({
      from: 'Naza Bulam <info@nazabulam.com>', 
      to: email, // Sends to the customer
      bcc: 'your-personal-email@gmail.com', // ADD YOUR ACTUAL EMAIL HERE TO GET COPIES!
      subject: 'Consultation Request Received - Naza Bulam',
      html: `
        <div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #F8F7F4; padding: 40px; border: 1px solid #eaeaea;">
          
          <h1 style="color: #1a1a1a; text-transform: uppercase; letter-spacing: 3px; font-size: 20px; font-weight: normal; text-align: center; margin-bottom: 5px;">Naza Bulam</h1>
          <p style="color: #8c8c8c; font-size: 10px; text-transform: uppercase; letter-spacing: 2px; text-align: center; margin-top: 0;">Couture · Ready-to-Wear · Bespoke</p>
          
          <hr style="border: 0; border-top: 1px solid #e5e5e5; margin: 40px 0;" />
          
          <p style="color: #1a1a1a; font-size: 16px;">Dear ${firstName},</p>
          <p style="color: #1a1a1a; font-size: 15px; line-height: 1.8; font-weight: 300;">
            Thank you for requesting a private consultation. Our atelier has received your details and will review them shortly to confirm your appointment.
          </p>
          
          <div style="background-color: #ffffff; padding: 30px; border: 1px solid #eaeaea; margin: 40px 0;">
            <p style="margin: 0 0 15px 0; color: #C5A059; font-size: 11px; text-transform: uppercase; letter-spacing: 2px; font-weight: bold;">Request Summary</p>
            <p style="margin: 0 0 8px 0; color: #1a1a1a; font-size: 14px;"><strong>Preferred Date:</strong> ${preferredDate}</p>
            <p style="margin: 0 0 8px 0; color: #1a1a1a; font-size: 14px;"><strong>Location:</strong> Abuja, Nigeria (In-Person)</p>
          </div>

          <div style="text-align: center; margin-top: 40px;">
            <a href="${calLink}" style="background-color: #1a1a1a; color: #F8F7F4; padding: 16px 32px; text-decoration: none; font-size: 11px; text-transform: uppercase; letter-spacing: 2px; display: inline-block;">
              Save to Calendar
            </a>
          </div>

          <hr style="border: 0; border-top: 1px solid #e5e5e5; margin: 40px 0;" />
          
          <p style="color: #8c8c8c; font-size: 11px; text-align: center; line-height: 1.6;">
            If you have any immediate questions, please reply to this email or contact us via WhatsApp.<br/>
            © Naza Bulam. All rights reserved.
          </p>

        </div>
      `
    });

    // If Resend throws a specific error, this will catch it!
    if (error) {
      console.error("Resend API Error:", error);
      return NextResponse.json({ success: false, error: error.message }, { status: 400 });
    }

    return NextResponse.json({ success: true });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Server error:", error);
    return NextResponse.json(
      { success: false, error: 'Failed to process request' }, 
      { status: 500 }
    );
  }
}