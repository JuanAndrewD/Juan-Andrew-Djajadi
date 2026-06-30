# Juan Andrew Djajadi

**Computer Science Student | AWS Cloud & AI Enthusiast**

Building intelligent, scalable systems at the intersection of AI, Cloud Architecture, and Systems Programming.

📍 Kuala Lumpur, Malaysia

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-blue?logo=linkedin)](https://linkedin.com/in/juan-andrew-djajadi)
[![GitHub](https://img.shields.io/badge/GitHub-Follow-181717?logo=github)](https://github.com/JuanAndrewD)
[![Email](https://img.shields.io/badge/Email-Contact-D14836?logo=gmail)](mailto:notjuan2106@gmail.com)

---

## About Me

I am a Computer Science student driven by a passion for building intelligent, scalable systems at the intersection of **AI**, **Cloud Architecture**, and **Systems Programming**. My approach combines rigorous academic research with hands-on technical execution, whether I am optimizing machine learning models or designing event-driven serverless backends.

My current technical focus:

- **Machine Learning & AI** — Developing predictive engines, neural network architectures (LSTMs, CNNs), and leveraging multimodal generative AI for intelligent document parsing and identity verification.
- **Cloud Architecture** — Designing robust serverless solutions on the AWS ecosystem (S3, Lambda, API Gateway, DynamoDB) to power high-availability applications.
- **Systems Programming & Performance** — Working at the low level with computer architecture, CPU registers, and assembly to understand and optimize software performance from the hardware up.

Beyond writing code, I'm committed to community building. As **Head of Event Coordinator** for the AWS Student Builder Group at Asia Pacific University, I coordinate cross-functional teams and organize large-scale technical events to empower the next generation of cloud enthusiasts.

---

## 🏆 Highlights

- 🥇 **Top 10 Finalist** — AI Marathon 2026 (solo project)
- 🥈 **Track Top 5 Finalist** — AWS CendekiAwan 2026 Showcase Event
- 🎓 **GPA 3.71** — BASc Computer Science, Asia Pacific University

---

## 🚀 Projects

### LIFEMAXX — Gamified AI Self-Improvement Platform
*Jun 2026 · Asia Pacific University · [Live Demo](https://lifemaxx-five.vercel.app/)*

An end-to-end, full-stack, AI-driven personal growth platform built for the "H0: Hack the Zero Stack with Vercel v0 and AWS Databases" hackathon. Built on a serverless, zero-ops philosophy, it converts user onboarding profiles into parallelized 5-stage health and career roadmaps with daily task logs, gamified habit tracking, and a RAG-powered AI accountability coach.

**Key Engineering:**
- **Single-Table DynamoDB Design** — Composite keys (PK/SK) consolidate profiles, stages, daily logs, and chat histories for single-digit-millisecond retrieval with no relational joins.
- **Hybrid "Pointer Pattern"** — Offloads large AI-generated roadmap JSON blobs to S3 while keeping queryable metadata in DynamoDB, circumventing the 400KB item-size limit.
- **RAG AI Coaching Pipeline** — BGE-M3 semantic embeddings via DeepInfra + a metadata-filtered Pinecone vector DB to eliminate hallucinations.
- **Transactional Integrity** — `TransactWriteItems` for atomic updates plus DynamoDB TTL auto-expiry for ephemeral chat logs.
- **Stateless Security** — HMAC-SHA256 signed auth payloads with `httpOnly` cookie sessions to minimize cold-start latency.

`TypeScript` · `Next.js` · `DynamoDB` · `S3` · `Pinecone` · `RAG` · `DeepSeek`

---

### AWS Cloud Architect & Sales Engineer AI
*Apr–May 2026 · AI Marathon 2026 (Top 10 Finalist) · [Repository](https://github.com/JuanAndrewD/Ambatuwin-AI-Marathon-2026-as-Pria-Solo)*

An autonomous AI-driven Technical Sales Consultant that automates the end-to-end workflow of a solutions architect — transforming natural language workload briefs into complete, production-ready, cost-optimized AWS deployments. Built solo and selected as a global top 10 finalist.

**Key Engineering:**
- **Three-Layer Autonomous Agent Framework** — Coordinates LLM semantic understanding, state persistence, and deterministic software guardrails.
- **Deterministic Bill Engineering** — A localized pricing pipeline where the LLM handles component generation while a deterministic engine produces 100% reproducible cost calculations, eliminating pricing hallucinations.
- **Multi-Tier Context Memory** — Integrates project metadata, parsed multi-format uploads (PDF, DOCX, PPTX), client history, and region/compliance snapshots.
- **Regional Fallbacks & Compliance Audits** — Cross-references data-residency laws (PDPA, GDPR, HIPAA) and reroutes components to the nearest compliant low-latency region.
- **Zero-Git Remote Sync** — Pushes architectures and binary files to active branches via the GitHub Git User API.

`Application Programming Interfaces` · `Generative AI` · `React.js` · `Express.js` · `Node.js` · `PostgreSQL` · `REST APIs`

---

### AI-Powered Food Vendor Event Matching System
*Apr 2026 · AWS CendekiAwan 2026 (Track Top 5 Finalist) · [Repository](https://github.com/IRIDIUM86/AmbatuwinCendikiawan)*

A production-ready backend orchestration platform that helps SME food vendors find real-time event matches. It uses generative AI to translate unstructured natural language vendor constraints into accurate matches for bazaars, festivals, and market spaces.

**Key Engineering:**
- **Intelligent Query Parsing** — A Flask execution layer parses unstructured vendor queries (location, budget, menu alignment) into strongly typed, validated JSON.
- **5-Layer Hallucination Prevention Pipeline:**
  1. Structured input mapping to validated JSON parameters
  2. SQL pre-filtering to constrain the search space
  3. Context grounding with verified real-time database rows
  4. Output entity validation against the primary storage layer
  5. Data enrichment with immutable DB records as the source of truth
- **AWS GenAI Orchestration** — A low-latency loop on AWS Bedrock (Claude 3 Sonnet) for semantic understanding and intelligent ranking.
- **Hybrid Cloud Persistence** — Postgres-backed Supabase relational layer.

`Python` · `AWS Bedrock` · `boto3 SDK` · `Supabase` · `PostgreSQL` · `Git`

---

## 💼 Experience

### AWS Student Builder Group — Asia Pacific University
*Contract · Kuala Lumpur, Malaysia*

**Head of Event Coordinator** · May 2026 – Present · *Hybrid*
Lead the strategic planning, financial oversight, and execution of campus-wide cloud initiatives, technical workshops, and tech talks.
- Mentor a team of student coordinators across logistics, registration, and technical operations.
- Partner with university administration and industry professionals to align event objectives.
- Oversee the end-to-end event lifecycle, managing timelines, milestones, and operational pipelines.

**Event Coordinator** · Dec 2025 – May 2026 · *On-site*
Coordinated logistics and operational frameworks for major milestone events and career panels.
- Managed operational workflows for flagship initiatives including the AWS CendekiAwan 2026 Showcase.
- Handled venue bookings, transportation logistics, and on-site registration.
- Streamlined task assignments and post-event documentation with committee members.

### Asia Pacific Analytics Club (APAC) — Technical Department
*Contract · Mar 2025 – Feb 2026 · On-site*

Contributed to the technical infrastructure supporting data analytics workshops, hackathons, and club initiatives.
- Architected and deployed reliable, isolated environments for hands-on technical sessions.
- Maintained event-specific code repositories and version control.
- Provided live troubleshooting and technical guidance during hackathons and workshops.

---

## 🎓 Education

**Asia Pacific University of Technology and Innovation (APU / APIIT)**
Bachelor of Applied Science — Computer Science · Sep 2024 – Sep 2027 · **GPA: 3.71**

Focus on Machine Learning engineering, Event-Driven Cloud Systems, and Low-Level Computer Architecture.

*Activities:* Head of Event Coordinator at AWS Student Builder Group · Technical Department Core Committee Member at APAC

---

## 🛠️ Skills

**Languages**
`Python` · `TypeScript` · `Java` · `C` · `SQL`

**AI & Machine Learning**
`Machine Learning` · `Neural Networks` · `CNNs` · `Retrieval-Augmented Generation (RAG)` · `Vector Databases` · `Prompt Engineering` · `Generative AI` · `AI Inferencing` · `Hyperparameter Tuning`

**Cloud & AWS**
`AWS` · `Amazon DynamoDB` · `Amazon S3` · `Amazon EC2` · `AWS Bedrock` · `AWS SageMaker` · `AWS Kiro` · `Serverless Computing` · `boto3 SDK`

**Web & Backend**
`Next.js` · `React.js` · `Node.js` · `Express.js` · `REST APIs` · `PostgreSQL` · `Supabase` · `Vercel v0`

**Tools & Concepts**
`Git` · `GitHub` · `Data Modeling` · `Database Design` · `HMAC Cryptography` · `Embedded Systems` · `Pinecone` · `DeepSeek` · `Anthropic Claude`

**Quantitative & Data**
`Quantitative Finance` · `Quantitative Research` · `Quantitative Analytics` · `Data Science` · `Data Analysis` · `Data Preparation`

**Leadership & Soft Skills**
`Project Management` · `Project Coordination` · `Presentation Skills` · `Communication` · `Marketing`

---

## 📫 Get in Touch

- **LinkedIn:** [linkedin.com/in/juan-andrew-djajadi](https://linkedin.com/in/juan-andrew-djajadi)
- **GitHub:** [github.com/JuanAndrewD](https://github.com/JuanAndrewD)
- **Email:** notjuan2106@gmail.com
