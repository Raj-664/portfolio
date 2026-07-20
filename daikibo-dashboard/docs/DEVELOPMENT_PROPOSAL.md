# DAIKIBO MACHINE HEALTH STATUS DASHBOARD
## Development Proposal

---

## OVERVIEW

This proposal outlines the development of a private intranet dashboard for Daikibo to monitor the real-time health status of manufacturing equipment across four (4) factories. The system will provide centralized visibility into 36 monitored machines (9 per factory) with comprehensive status tracking, historical data visualization, and integrated authentication via the company's internal authorization server.

The dashboard is designed for restricted internal access within the company intranet, enabling facility managers and operators to quickly assess equipment health, identify potential issues, and respond to system anomalies with minimal latency.

---

## SCOPE

### 1. Functional Requirements

#### 1.1 Dashboard Interface
- **Multi-Factory View**: Display health status for all 4 factories on a single page
- **Hierarchical Display**: Collapsible/expandable sections at both factory and individual device levels
- **Real-time Status Indicators**: Current operational status for each machine (Operational, Warning, Error, Offline)
- **Status History**: Expandable device cards showing historical status changes with timestamps
- **Responsive Design**: Functional on desktop and tablet devices within corporate environments

#### 1.2 Device Monitoring
- Track 9 machines per factory:
  - Assembly Robots (2 units)
  - CNC Machines (2 units)
  - Conveyor Systems (2 units)
  - Welding Units (2 units)
  - Quality Control Equipment (1 unit)
- Display key metrics:
  - Current status
  - Temperature readings
  - Uptime percentage
  - Last updated timestamp
  - Error messages (if applicable)

#### 1.3 Authentication & Access Control
- **SSO Integration**: Synchronized with internal company authentication server
- **User Roles**: Support for multiple roles (Admin, Operator, Viewer)
- **Session Management**: Automatic timeout after inactivity
- **Network Restriction**: Access limited to company intranet IP ranges
- **Audit Logging**: Track user login/logout events

#### 1.4 Data Management
- **Real-time Telemetry**: Live data from equipment sensors
- **Status History**: 30-day rolling history of status changes
- **Data Refresh**: Auto-refresh every 30 seconds with manual refresh option
- **Historical Analysis**: Query device status for specific date ranges

### 1.5 Technical Architecture

**Frontend:**
- React 18 with modern hooks
- Tailwind CSS for responsive styling
- Axios for API communication
- State management via React Context

**Backend:**
- Node.js with Express framework
- PostgreSQL for persistent data storage
- JWT-based authentication
- RESTful API architecture

**Infrastructure:**
- Docker containerization
- Docker Compose for local development
- Environment-based configuration
- Horizontal scalability ready

---

## ESTIMATE

### Development Breakdown

#### Phase 1: Setup & Infrastructure (40 hours)
- Project initialization and configuration: 8 hours
- Database design and schema creation: 12 hours
- Docker setup and containerization: 10 hours
- CI/CD pipeline configuration: 10 hours

#### Phase 2: Backend Development (80 hours)
- Authentication module (SSO integration): 15 hours
- Factory API endpoints: 12 hours
- Device API endpoints: 12 hours
- Telemetry data endpoints: 15 hours
- Error handling and logging: 10 hours
- API documentation: 8 hours
- Unit testing: 12 hours (60% coverage)

#### Phase 3: Frontend Development (100 hours)
- Dashboard layout and navigation: 15 hours
- Factory list component: 15 hours
- Device card component: 20 hours
- Status history component: 15 hours
- Login page and authentication flow: 12 hours
- Styling and responsive design: 15 hours
- State management setup: 8 hours

#### Phase 4: Integration & Testing (60 hours)
- End-to-end integration testing: 20 hours
- Performance testing and optimization: 15 hours
- Security testing and vulnerability assessment: 15 hours
- User acceptance testing (UAT) preparation: 10 hours

#### Phase 5: Deployment & Documentation (30 hours)
- Production environment setup: 10 hours
- Deployment automation: 8 hours
- User documentation and training materials: 10 hours
- System handoff and knowledge transfer: 2 hours

### Summary

| Phase | Hours | Percentage |
|-------|-------|------------|
| Setup & Infrastructure | 40 | 11% |
| Backend Development | 80 | 22% |
| Frontend Development | 100 | 28% |
| Integration & Testing | 60 | 17% |
| Deployment & Documentation | 30 | 8% |
| **Buffer (Contingency)** | **60** | **17%** |
| **TOTAL** | **370** | **100%** |

**Total Estimated Effort: 370 man-hours**

**Team Composition:**
- 1 Full-stack Developer (primary)
- 1 QA Engineer (starting Phase 3)
- 1 DevOps Engineer (Part-time, Phases 1 & 4)
- 1 Project Manager (oversight)

**Estimated Timeline: 8-10 weeks** (with 2-3 developers full-time)

---

## TIMELINE

### Milestone 1: Project Kickoff & Infrastructure (Week 1-2)
- Gather detailed requirements and finalize specifications
- Set up development environment and repositories
- Design database schema and API contracts
- Establish CI/CD pipelines
- **Deliverable**: Development environment ready, database initialized

### Milestone 2: Backend MVP (Week 3-4)
- Implement authentication module with SSO integration
- Create factory and device API endpoints
- Set up telemetry data collection pipeline
- Begin comprehensive testing
- **Deliverable**: Fully functional backend API

### Milestone 3: Frontend MVP (Week 5-6)
- Build login page and authentication flow
- Implement factory list and device cards
- Create collapsible/expandable UI components
- Integrate with backend APIs
- **Deliverable**: Working dashboard with all core features

### Milestone 4: Integration & Optimization (Week 7)
- End-to-end testing across all features
- Performance optimization and load testing
- Security audit and vulnerability fixes
- User acceptance testing with stakeholders
- **Deliverable**: Fully integrated and tested application

### Milestone 5: Deployment & Launch (Week 8-10)
- Production environment setup
- Data migration and initialization
- Staff training and documentation
- Go-live support and monitoring
- **Deliverable**: Live production system

---

## SUPPORT

Our commitment to your success extends beyond the initial deployment. Daikibo can rely on continuous, comprehensive product support including:

### 1. Bug Fixes & Maintenance
- **Priority Response**: Critical bugs addressed within 4 business hours
- **Maintenance Windows**: Regular updates deployed during scheduled maintenance periods
- **Proactive Monitoring**: System health monitoring and alerting
- **Performance Optimization**: Ongoing tuning to ensure responsiveness

### 2. Support Tickets
- **24/5 Support**: Monday-Friday, 8 AM to 6 PM (company hours)
- **Escalation Path**: Clear escalation procedures for urgent issues
- **Documentation**: Comprehensive knowledge base and FAQ
- **Training**: Ongoing training resources for new users

### 3. New Functionality & Enhancements
- **Feature Requests**: Evaluated and prioritized quarterly
- **Custom Development**: Additional features available as change orders
- **Integration Services**: Support for integrating new data sources or systems
- **API Extensions**: New endpoints developed to meet evolving business needs

### 4. System Administration
- **User Management**: Adding/removing users and managing roles
- **Network Integration**: Support for network and firewall configuration
- **Data Management**: Backup, retention, and archival support
- **Compliance**: Updates to maintain regulatory compliance

### 5. Ongoing Partnership
- **Quarterly Reviews**: Performance reviews and roadmap planning
- **Version Updates**: Regular updates with new features and security patches
- **Capacity Planning**: Monitoring and scaling recommendations
- **Industry Best Practices**: Recommendations for improving dashboard utilization

### Support SLA

| Issue Severity | Response Time | Resolution Target |
|---|---|---|
| Critical | 4 hours | 24 hours |
| High | 8 hours | 3 days |
| Medium | 24 hours | 7 days |
| Low | 48 hours | 14 days |

---

## CONCLUSION

This Machine Health Status Dashboard will provide Daikibo with real-time visibility into critical manufacturing assets across four factory locations. The proposed solution combines intuitive user interface design with robust backend infrastructure to deliver a reliable, scalable system that supports operational excellence.

With an estimated development effort of 370 man-hours and an 8-10 week timeline, the project is positioned for successful delivery with comprehensive ongoing support ensuring long-term system health and user satisfaction.

---

**Prepared by:** Development Team  
**Date:** July 20, 2026  
**Version:** 1.0
