import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import { sendAmplitudeEvent } from '@/app/libs/amplitude-server';


const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(req: NextRequest) {
  const body = await req.text(); // <-- use .text() to get raw string payload
  const sig = req.headers.get('stripe-signature')!;
  const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET!;

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(Buffer.from(body), sig, endpointSecret);
  } catch (err) {
    console.error('❌ Stripe webhook verification failed:', err);
    return new NextResponse(`Webhook error: ${(err as Error).message}`, { status: 400 });
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object as Stripe.Checkout.Session;

    await sendAmplitudeEvent({
      event_type: 'Purchase Completed',
      user_id: session.customer_email ?? 'unknown_user',
      event_properties: {
        "total amount": session.amount_total,
        session_id: session.id,
      },
    });
  }

  return NextResponse.json({ received: true });
}
