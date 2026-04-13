/**
 * URL de cadastro no Keycloak, montada a partir do issuer público.
 * Produção:  NEXT_PUBLIC_KEYCLOAK_ISSUER (mesma raiz do KEYCLOAK_ISSUER)
 * Local dev: http://localhost:8080/realms/dev2b
 */
const issuer =
  process.env.NEXT_PUBLIC_KEYCLOAK_ISSUER ??
  "http://localhost:8080/realms/dev2b"

const clientId =
  process.env.NEXT_PUBLIC_KEYCLOAK_CLIENT_ID ??
  process.env.KEYCLOAK_CLIENT_ID ??
  "dev2b-app"

export const REGISTER_URL =
  `${issuer}/protocol/openid-connect/registrations?client_id=${clientId}&response_type=code`
