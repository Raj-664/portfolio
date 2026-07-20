# Daikibo Machine Health Status Dashboard

A private intranet dashboard for monitoring the health status of 9 machines across Daikibo's 4 factories with real-time telemetry data.

## Features

- **Multi-Factory Monitoring**: Track 36 machines (9 per factory) across 4 locations
- **Real-time Health Status**: Live status updates for each device
- **Collapsible Interface**: Expandable/collapsible views at factory and device levels
- **Status History**: View historical status changes for each machine
- **Intranet-Only Access**: Private dashboard restricted to company network
- **SSO Integration**: Authentication synced to internal company auth server
- **Responsive Design**: Works on desktop and tablet devices

## Tech Stack

### Frontend
- React 18
- Tailwind CSS
- Axios for API calls
- React Context for state management

### Backend
- Node.js with Express
- PostgreSQL for data storage
- JWT for authentication
- RESTful API architecture

### DevOps
- Docker & Docker Compose
- Environment-based configuration

## Project Structure

```
daikibo-dashboard/
├── frontend/                 # React application
│   ├── src/
│   │   ├── components/      # Reusable components
│   │   ├── pages/           # Page components
│   │   ├── services/        # API services
│   │   ├── context/         # React Context
│   │   ├── styles/          # CSS files
│   │   └── App.jsx
│   ├── package.json
│   └── Dockerfile
├── backend/                  # Express server
│   ├── src/
│   │   ├── routes/          # API routes
│   │   ├── controllers/     # Business logic
│   │   ├── middleware/      # Auth & logging
│   │   ├── models/          # Database models
│   │   ├── config/          # Configuration
│   │   └── server.js
│   ├── package.json
│   └── Dockerfile
├── docs/
│   ├── DEVELOPMENT_PROPOSAL.md
│   └── API_DOCUMENTATION.md
├── docker-compose.yml
└── .env.example
```

## Installation

### Prerequisites
- Node.js 16+
- Docker & Docker Compose (optional)
- PostgreSQL 12+

### Local Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/Raj-664/portfolio.git
   cd daikibo-dashboard
   ```

2. **Setup Backend**
   ```bash
   cd backend
   npm install
   cp .env.example .env
   npm run dev
   ```

3. **Setup Frontend** (in new terminal)
   ```bash
   cd frontend
   npm install
   npm start
   ```

### Docker Setup
```bash
docker-compose up -d
```

## API Endpoints

### Authentication
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout
- `GET /api/auth/verify` - Verify token

### Factories
- `GET /api/factories` - List all factories
- `GET /api/factories/:id` - Get factory details

### Devices
- `GET /api/devices` - List all devices
- `GET /api/devices/:id` - Get device details
- `GET /api/devices/:id/history` - Get device status history

### Telemetry
- `GET /api/telemetry/:deviceId` - Get latest telemetry data
- `GET /api/telemetry/:deviceId/range` - Get telemetry in date range

## Environment Variables

See `.env.example` for required environment variables.

## Development

### Running Tests
```bash
npm test
```

### Building for Production
```bash
npm run build
```

## Support

For issues or questions, please create an issue in the repository or contact the development team.

## License

Private Project - Daikibo Internal Use Only
