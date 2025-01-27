![Screenshot 2025-01-27 at 03 55 25](https://github.com/user-attachments/assets/f9e4ef4f-7862-4b30-b40e-5b2063fadc61)
![Screenshot 2025-01-27 at 03 55 19](https://github.com/user-attachments/assets/83295013-8ccd-41d8-99d2-858ab9ba9e2f)
![Screenshot 2025-01-27 at 03 55 11](https://github.com/user-attachments/assets/d92a5e26-aca3-4b4a-b6f8-5c7264769cb5)
![Screenshot 2025-01-27 at 03 55 02](https://github.com/user-attachments/assets/39f63ea3-e95b-47f9-b291-aeb6c50255fc)
![Screenshot 2025-01-27 at 03 54 48](https://github.com/user-attachments/assets/0fc25735-4305-4683-b999-abc557a60dd8)
![Screenshot 2025-01-27 at 03 54 28](https://github.com/user-attachments/assets/0f0c3936-a7d6-4364-b123-77dc5df1a290)
![Screenshot 2025-01-27 at 03 54 16](https://github.com/user-attachments/assets/9dfed008-8134-411d-a663-d5fce5b992fa)
![Screenshot 2025-01-27 at 03 54 01](https://github.com/user-attachments/assets/55085f71-6da6-4eee-b217-a399ae5daf17)
![Screenshot 2025-01-27 at 03 53 38](https://github.com/user-attachments/assets/7530b546-4c27-4774-9146-a836bbd5da96)
![Screenshot 2025-01-27 at 03 53 24](https://github.com/user-attachments/assets/4c6964a2-c6cd-4dcc-8f6f-551a595228a2)
![Screenshot 2025-01-27 at 03 53 20](https://github.com/user-attachments/assets/9d54fbd5-13b0-421d-b4eb-c97029805cab)
![Screenshot 2025-01-27 at 03 53 11](https://github.com/user-attachments/assets/792fa27b-2762-4beb-ba43-4a57293a01ea)
# Medusa Store Implementation

A modern e-commerce solution built with Medusa, Next.js, and PostgreSQL.

## Prerequisites

- Node.js v20.x or higher
- PostgreSQL 9.6 or higher
- Redis 5.x or higher
- Git

## Project Structure

```
├── trade-enablers-medusa-app/        # Backend directory
│   ├── src/
│   │   ├── modules/
│   │   ├── types/
│   │   └── middleware.ts
│   └── medusa-config.js
└── trade-enablers-medusa-app-storefront/  # Frontend directory
    ├── src/
	|-- app/
    │   ├── modules/
    │   ├── components/
    │   └── pages/
    └── next.config.js
```

## Backend Setup

1. Install Medusa CLI:

```bash
npm install -g @medusajs/medusa-cli
```

2. Clone and setup backend:

```bash
git clone https://github.com/NazaAdimoha/medusa
cd trade-enablers-medusa-app
npm install
```

3. Configure environment variables:

```bash
cp .env.template .env
```

4. Set required environment variables in `.env`:

```
MEDUSA_ADMIN_ONBOARDING_TYPE=nextjs
STORE_CORS=http://localhost:8000,https://docs.medusajs.com
ADMIN_CORS=http://localhost:5173,http://localhost:9000
AUTH_CORS=http://localhost:5173,http://localhost:9000,http://localhost:8000
REDIS_URL=redis://localhost:6379
JWT_SECRET=supersecret
COOKIE_SECRET=supersecret
DATABASE_URL=postgres://postgres@localhost/medusa-trade-enablers-medusa-app
MEDUSA_ADMIN_ONBOARDING_NEXTJS_DIRECTORY=trade-enablers-medusa-app-storefront
```

5. Initialize the database:

```bash
medusa migrations run
```

6. Seed the database (optional):

```bash
medusa seed --seed-file=data/seed.json
```

7. Start the backend server:

```bash
medusa develop
```

The backend will be available at `http://localhost:9000`

## Storefront Setup

1. Navigate to the storefront directory:

```bash
cd trade-enablers-medusa-app-storefront
npm install
```

2. Configure environment variables:

```bash
cp .env.template .env
```

3. Set required environment variables in `.env`:

```
MEDUSA_BACKEND_URL=http://localhost:9000
NEXT_PUBLIC_MEDUSA_PUBLISHABLE_KEY=<your-publishable-key>
NEXT_PUBLIC_BASE_URL=http://localhost:8000
NEXT_PUBLIC_DEFAULT_REGION=us
NEXT_PUBLIC_STRIPE_KEY=<your-stripe-key>
REVALIDATE_SECRET=supersecret
```

4. Start the development server:

```bash
npm run dev
```

The storefront will be available at `http://localhost:8000`

## Additional Configuration

### PostgreSQL

Create the database:

```bash
createdb medusa-trade-enablers-medusa-app
```

## Development Workflow

1. Backend changes:

   - Make changes in `trade-enablers-medusa-app/src`
   - Server will automatically restart
   - Run `medusa migrations run` for database changes
2. Frontend changes:

   - Make changes in `trade-enablers-medusa-app-storefront/src`
   - Next.js hot reloading will apply changes

## Deployment

### Backend Deployment

1. Build the backend:

```bash
npm run build
```

2. Start production server:

```bash
npm run start
```

### Storefront Deployment

1. Build the frontend:

```bash
npm run build
```

2. Start production server:

```bash
npm run start
```

## Troubleshooting

- If database connections fail, ensure PostgreSQL is running and credentials are correct
- For CORS issues, verify the CORS settings in both backend and frontend configurations

## Resources

- [Medusa Documentation](https://docs.medusajs.com)
- [Next.js Documentation](https://nextjs.org/docs)
- [API Reference](https://docs.medusajs.com/api/admin)
