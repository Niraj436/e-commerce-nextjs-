import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { IProducts } from "../../../../type";

export const POST = async (req: NextRequest) => {
  // @ts-ignore
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
  try {
    const reqBody = await req.json();
    const { items, email } = await reqBody;

    const extractingItems = await items.map((item: IProducts) => ({
        quantity: item.quantity,
        price_data: {
          currency: "usd",
          unit_amount: item.price * 100,
          product_data: {
            name: item.title,
            description: item.description,
            images: [item.image],
          },
        },
      }));
  
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items: extractingItems,
        mode: "payment",
        success_url: `${process.env.NEXTAUTH_URL}/success`,
        cancel_url: `${process.env.NEXTAUTH_URL}/checkout`,
        metadata: {
          email,
        },
      });
  
      return NextResponse.json({
        message: "Connection is Active!",
        success: true,
        id: session.id,
      });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
};
