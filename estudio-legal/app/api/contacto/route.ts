import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const datos = await request.json();
  const { nombre, email, telefono, materia, mensaje } = datos ?? {};

  if (!nombre || !email || !telefono || !materia || !mensaje) {
    return NextResponse.json({ error: 'Faltan datos en el formulario' }, { status: 400 });
  }

  // Sin RESEND_API_KEY el formulario funciona igual: la consulta queda en los logs de Vercel.
  if (process.env.RESEND_API_KEY && process.env.CORREO_DESTINO) {
    const r = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${process.env.RESEND_API_KEY}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from: 'Sitio web <onboarding@resend.dev>',
        to: [process.env.CORREO_DESTINO],
        reply_to: email,
        subject: `Nueva consulta — ${materia} — ${nombre}`,
        text: `Nombre: ${nombre}\nTeléfono: ${telefono}\nCorreo: ${email}\nMateria: ${materia}\n\n${mensaje}`
      })
    });
    if (!r.ok) return NextResponse.json({ error: 'El correo no se pudo enviar' }, { status: 502 });
  } else {
    console.log('Consulta recibida:', { nombre, email, telefono, materia, mensaje });
  }

  return NextResponse.json({ ok: true });
}
