# Ethicure Backend MVP

## Architecture
- Next.js App Router route handlers under `app/api/*`
- Prisma ORM with PostgreSQL
- Supabase for database + Phone OTP auth (through Supabase Auth)

## API Endpoints
- `GET/POST /api/users`
- `GET/POST /api/doctors`
- `GET/POST /api/advisors` (advisors are doctors with `isAdvisor=true`)
- `GET/POST /api/consultations`
- `GET/POST /api/reviews`

## Example frontend calls

### Search doctors
```ts
const res = await fetch(`/api/doctors?specialization=Cardiology&location=New%20York&q=heart`);
if (!res.ok) throw new Error("Failed to fetch doctors");
const { data } = await res.json();
```

### Create consultation and log contact event
```ts
const res = await fetch("/api/consultations", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    patientId,
    doctorId,
    symptoms,
    preferredChannel: "WHATSAPP_MESSAGE",
    notifyEmail: "patient@example.com",
    notifyWhatsapp: "+15551234567",
    contactEvent: {
      channel: "WHATSAPP_MESSAGE",
      metadata: { source: "doctor-profile" }
    }
  })
});

const payload = await res.json();
if (!res.ok) {
  throw new Error(payload?.error?.message ?? "Something went wrong");
}
```

### Submit review (non-anonymous)
```ts
const res = await fetch("/api/reviews", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    userId,
    doctorId,
    consultationId,
    rating: 5,
    text: "Very clear and practical advice",
  }),
});
```

## Deployment
1. Create a Supabase project.
2. Copy the pooled Postgres connection into `DATABASE_URL`.
3. Run `npm run prisma:generate`.
4. Run `npm run prisma:migrate -- --name init`.
5. Run `npm run prisma:seed`.
6. In Vercel project settings, set `DATABASE_URL`.
7. Deploy.
