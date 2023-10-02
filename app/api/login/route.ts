import { NextResponse } from "next/server";
import { Client, fql } from "fauna";

export async function POST(req: Request) {
  const fauna = new Client();

  const body = await req.json();

  const { username, password }: any = body;

  const loginMember = fql`
    let member = Members.username(${username}).first() { id }
    let doc = Members.byId(member!.id)
    Credentials.byDocument(doc)!.login(${password})
  `;

  const memberRes: any = await fauna.query(loginMember);

  return NextResponse.json(memberRes.data, { status: 200 });
}
