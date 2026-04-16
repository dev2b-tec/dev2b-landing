/**
 * URL de cadastro no Keycloak, montada a partir do issuer público.
 * Produção:  NEXT_PUBLIC_KEYCLOAK_ISSUER (mesma raiz do KEYCLOAK_ISSUER)
 * Local dev: http://localhost:8080/realms/dev2b
 */
const PROD_ISSUER = "https://auth.dev2b.tec.br/realms/dev2b"

// Se a variável de ambiente não estiver definida, usa sempre o issuer de produção.
// Para rodar localmente, defina NEXT_PUBLIC_KEYCLOAK_ISSUER=http://localhost:8080/realms/dev2b
const issuer =
  process.env.NEXT_PUBLIC_KEYCLOAK_ISSUER ?? PROD_ISSUER

const clientId =
  process.env.NEXT_PUBLIC_KEYCLOAK_CLIENT_ID ??
  process.env.KEYCLOAK_CLIENT_ID ??
  "dev2b-app"

// Após verificar e-mail o Keycloak redireciona para cá
const redirectUri =
  process.env.NEXT_PUBLIC_APP_URL ?? "https://app.dev2b.tec.br"

export const REGISTER_URL =
  `${issuer}/protocol/openid-connect/registrations?client_id=${clientId}&response_type=code&redirect_uri=${encodeURIComponent(redirectUri)}`
