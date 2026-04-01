# dev2b-landing

Site institucional da DEV2B. Next.js 16 com App Router, autenticação via Keycloak (next-auth v5) e deploy automatizado via Docker + Traefik.

---

## Estrutura do repositório

```
dev2b-landing/
├── app/                  # Código-fonte Next.js
│   ├── app/              # Rotas (App Router)
│   ├── components/       # Componentes React
│   ├── lib/auth.ts       # Configuração next-auth + Keycloak
│   └── ...
├── Dockerfile            # Build multi-stage (deps → builder → runner)
├── docker-compose.yml    # Compose de produção (Traefik)
└── .github/
    └── workflows/
        └── build.yml     # CI/CD: build Docker Hub → deploy VPS
```

---

## Desenvolvimento local

### Pré-requisitos

- Node.js 22+
- pnpm (`npm i -g pnpm`)

### Instalação

```bash
cd app
pnpm install
```

### Variáveis de ambiente

Crie o arquivo `app/.env.local` com o seguinte conteúdo:

```env
AUTH_SECRET=              # gere com: openssl rand -base64 32
KEYCLOAK_CLIENT_ID=dev2b-app
KEYCLOAK_CLIENT_SECRET=   # Client Secret do Keycloak
KEYCLOAK_ISSUER=https://keycloak.dev2b.tec.br/realms/dev2b
NEXTAUTH_URL=http://localhost:3000
```

### Rodar

```bash
cd app
pnpm dev
```

Acesse: http://localhost:3000

---

## Autenticação (Keycloak)

O botão **"Já sou cliente"** no navbar aciona o login via Keycloak usando o fluxo Authorization Code (PKCE). Após o login, o `accessToken` fica disponível na sessão para chamadas ao backend.

### Configuração necessária no Keycloak

1. Acesse `https://keycloak.dev2b.tec.br` → Admin Console
2. Crie o realm **`dev2b`**
3. Dentro do realm, crie um Client:
   - **Client ID:** `dev2b-app`
   - **Client authentication:** ON
   - **Valid redirect URIs:** `https://dev2b.tec.br/api/auth/callback/keycloak`
   - **Valid post logout redirect URIs:** `https://dev2b.tec.br`
   - **Web origins:** `https://dev2b.tec.br`
4. Copie o **Client Secret** em Clients → dev2b-app → Credentials

### Usar o accessToken no backend

```ts
import { auth } from "@/lib/auth"

const session = await auth()

fetch("https://sua-api.dev2b.tec.br/endpoint", {
  headers: { Authorization: `Bearer ${session?.accessToken}` }
})
```

---

## CI/CD

O pipeline roda automaticamente a cada push na branch `main`.

```
push main → build Docker Hub → deploy VPS via SSH
```

### Workflow: `.github/workflows/build.yml`

| Job | Template | O que faz |
|-----|----------|-----------|
| `build` | `docker-build.yml` | Build da imagem e push para Docker Hub |
| `deploy` | `docker-deploy.yml` | Copia `docker-compose.yml` para a VPS, injeta `.env.app` e sobe o container |

### Secrets necessários no GitHub

Vá em **Settings → Secrets and variables → Actions** e crie:

| Secret | Descrição |
|--------|-----------|
| `DOCKER_USERNAME` | Usuário do Docker Hub |
| `DOCKER_TOKEN` | Token de acesso do Docker Hub |
| `VPS_HOST` | IP da VPS |
| `VPS_USER` | Usuário SSH da VPS |
| `VPS_PASSWORD` | Senha SSH da VPS |
| `VPS_PORT` | Porta SSH da VPS |
| `APP_ENV` | Conteúdo completo do `.env` de produção (ver abaixo) |

### Conteúdo do secret `APP_ENV`

```env
AUTH_SECRET=<openssl rand -base64 32>
KEYCLOAK_CLIENT_ID=dev2b-app
KEYCLOAK_CLIENT_SECRET=<client secret do Keycloak>
KEYCLOAK_ISSUER=https://auth.dev2b.tec.br/realms/dev2b
```

---

## Infraestrutura de produção

### Requisitos na VPS

- Docker + Docker Compose
- Network Docker `proxy` criada: `docker network create proxy`
- Traefik rodando na network `proxy` (ver `modulo-web/traefik`)

### DNS

| Registro | Tipo | Valor |
|----------|------|-------|
| `dev2b.tec.br` | A | IP da VPS |

### Deploy manual (emergência)

```bash
# Na VPS, dentro de /opt/apps/dev2b-landing
echo "IMAGE_TAG=main" > .env
echo "DOCKER_USERNAME=<seu_usuario>" >> .env

# Cole o conteúdo das vars de ambiente
cat > .env.app << 'EOF'
AUTH_SECRET=...
KEYCLOAK_CLIENT_ID=dev2b-app
KEYCLOAK_CLIENT_SECRET=...
KEYCLOAK_ISSUER=https://keycloak.dev2b.tec.br/realms/dev2b
NEXTAUTH_URL=https://dev2b.tec.br
EOF

docker compose pull dev2b-landing
docker compose up -d --no-deps dev2b-landing
```
