# file-share-api

> API minimalista para compartilhamento de arquivos pequenos — fotos, scripts, snippets de código — via pacotes (`FilePackage`).

Cada usuário pode criar pacotes contendo um ou mais arquivos e compartilhar via link. Pensada como utilitário pessoal para troca rápida de arquivos, sem a fricção de serviços tradicionais de cloud storage.

## Domínio

- **User** — dono dos pacotes.
- **FilePackage** — agrupamento de arquivos compartilhável, com tema customizável (`PageThemeEnum`).

## Stack

- **NestJS 10** + **TypeScript**
- **PostgreSQL** + **Prisma ORM**
- **Swagger** (`@nestjs/swagger`) para documentação
- **class-validator** / **class-transformer** para DTOs
- **Docker Compose** para o banco local

## Estrutura

```
src/
├── main.ts
├── app.module.ts
├── database/             # configuração do Prisma
├── shared/               # utilitários
└── modules/
    └── file-package/     # endpoints CRUD do FilePackage
prisma/
├── schema.prisma         # User, FilePackage, PageThemeEnum
└── migrations/
```

## Rodando localmente

### Pré-requisitos

- Node.js 18+
- pnpm (lockfile é `pnpm-lock.yaml`)
- Docker + Docker Compose

### Setup

```bash
git clone https://github.com/Rafael-Dagostim/file-share-api.git
cd file-share-api
pnpm install
docker compose up -d        # sobe o Postgres
```

Configure a `DATABASE_URL` no `.env` apontando para o Postgres do compose, então:

```bash
pnpm prisma migrate dev      # cria as tabelas
pnpm start:dev               # API com hot-reload
```

Swagger em `http://localhost:3000/api`.

## Scripts

| Script | Descrição |
|---|---|
| `pnpm start:dev` | API com watch |
| `pnpm build` | Build de produção |
| `pnpm start:prod` | Roda `dist/main` |
| `pnpm test` | Testes unitários (Jest) |
| `pnpm test:e2e` | Testes end-to-end |
| `pnpm test:cov` | Cobertura |
| `pnpm lint` | ESLint `--fix` |
| `pnpm format` | Prettier |

## Licença

Veja [LICENSE](./LICENSE).
