# Daikibo Machine Health Dashboard - API Documentation

## Base URL
```
http://localhost:5000/api
```

## Authentication
All requests (except login) require a JWT token in the Authorization header:
```
Authorization: Bearer <JWT_TOKEN>
```

---

## Authentication Endpoints

### POST /auth/login
User login and token generation.

**Request:**
```json
{
  "username": "admin",
  "password": "password"
}
```

**Response (200):**
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": 1,
    "username": "admin",
    "name": "Admin User",
    "role": "admin"
  }
}
```

### POST /auth/logout
User logout.

**Response (200):**
```json
{
  "message": "Logged out successfully"
}
```

### GET /auth/verify
Verify JWT token validity.

**Response (200):**
```json
{
  "valid": true,
  "user": {
    "id": 1,
    "username": "admin",
    "role": "admin"
  }
}
```

---

## Factories Endpoints

### GET /factories
Retrieve all factories and their devices.

**Response (200):**
```json
[
  {
    "id": 1,
    "name": "Factory Tokyo",
    "location": "Tokyo, Japan",
    "status": "Operational",
    "devices": [
      {
        "id": 1,
        "deviceId": "DEV-001",
        "name": "Assembly Robot A1",
        "model": "ABB IRB 6700",
        "status": "Operational",
        "temperature": 45,
        "uptime": 99.8,
        "lastUpdated": "2026-07-20T10:30:00Z"
      }
    ]
  }
]
```

### GET /factories/:id
Retrieve a specific factory.

**Parameters:**
- `id` (integer): Factory ID

**Response (200):**
```json
{
  "id": 1,
  "name": "Factory Tokyo",
  "location": "Tokyo, Japan",
  "status": "Operational",
  "devices": [...]
}
```

---

## Devices Endpoints

### GET /devices
Retrieve all devices.

**Response (200):**
```json
[
  {
    "id": 1,
    "deviceId": "DEV-001",
    "name": "Assembly Robot A1",
    "status": "Operational",
    "temperature": 45,
    "uptime": 99.8
  }
]
```

### GET /devices/:id
Retrieve a specific device.

**Parameters:**
- `id` (integer): Device ID

**Response (200):**
```json
{
  "id": 1,
  "deviceId": "DEV-001",
  "name": "Assembly Robot A1",
  "status": "Operational",
  "temperature": 45,
  "uptime": 99.8
}
```

### GET /devices/:id/history
Retrieve device status history.

**Parameters:**
- `id` (integer): Device ID
- `limit` (integer, optional): Number of records to return (default: 10)
- `offset` (integer, optional): Pagination offset (default: 0)

**Response (200):**
```json
[
  {
    "timestamp": "2026-07-20T10:30:00Z",
    "status": "Operational",
    "details": "Normal operation"
  },
  {
    "timestamp": "2026-07-20T09:30:00Z",
    "status": "Warning",
    "details": "Temperature spike detected"
  }
]
```

---

## Telemetry Endpoints

### GET /telemetry/:deviceId
Retrieve latest telemetry data for a device.

**Parameters:**
- `deviceId` (string): Device ID

**Response (200):**
```json
{
  "deviceId": "DEV-001",
  "temperature": 45,
  "humidity": 55,
  "pressure": 1013,
  "timestamp": "2026-07-20T10:30:00Z"
}
```

### GET /telemetry/:deviceId/range
Retrieve telemetry data for a date range.

**Parameters:**
- `deviceId` (string): Device ID
- `start` (string, required): Start datetime (ISO 8601 format)
- `end` (string, required): End datetime (ISO 8601 format)

**Query Example:**
```
GET /telemetry/DEV-001/range?start=2026-07-20T00:00:00Z&end=2026-07-20T23:59:59Z
```

**Response (200):**
```json
[
  {
    "timestamp": "2026-07-20T00:00:00Z",
    "temperature": 45,
    "humidity": 55,
    "pressure": 1013
  },
  {
    "timestamp": "2026-07-20T23:59:59Z",
    "temperature": 48,
    "humidity": 58,
    "pressure": 1015
  }
]
```

---

## Error Responses

### 400 Bad Request
```json
{
  "error": "Invalid request parameters"
}
```

### 401 Unauthorized
```json
{
  "error": "Invalid credentials"
}
```

### 404 Not Found
```json
{
  "error": "Resource not found"
}
```

### 500 Internal Server Error
```json
{
  "error": "Internal server error"
}
```

---

## Health Check

### GET /health
System health check (no authentication required).

**Response (200):**
```json
{
  "status": "ok",
  "timestamp": "2026-07-20T10:30:00Z"
}
```

---

## Rate Limiting
- **Default:** 100 requests per minute per IP
- **Dashboard:** 1000 requests per minute per authenticated user

---

## Version History
- **v1.0** (2026-07-20): Initial release
