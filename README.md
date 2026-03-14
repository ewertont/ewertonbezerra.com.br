# Portfolio — Next.js

Portfólio moderno e minimalista para Senior Fullstack Developer.  
Construído com **Next.js 15**, **TypeScript** e **Tailwind CSS**.

---

## 🚀 Setup Local

### 1. Instalar dependências

```bash
npm install
```

### 2. Rodar em desenvolvimento

```bash
npm run dev
```

Acesse: [http://localhost:3000](http://localhost:3000)

### 3. Build de produção

```bash
npm run build
npm start
```

---

## 🎨 Personalizar

Edite **apenas** o arquivo `src/lib/data.ts` para atualizar:

- Nome, cargo, e-mail, redes sociais
- Bio e highlights da seção About
- Projetos (título, descrição, tecnologias, links)
- Experiência profissional (empresas, períodos, realizações)
- Repositórios open source
- Depoimentos

---

## ☁️ Deploy na Vercel

### Opção 1 — Via GitHub (recomendado)

1. Faça push do projeto para um repositório no GitHub
2. Acesse [vercel.com](https://vercel.com) e clique em **"Add New Project"**
3. Importe o repositório
4. Deixe as configurações padrão — a Vercel detecta Next.js automaticamente
5. Clique em **"Deploy"**

### Opção 2 — Via Vercel CLI

```bash
npm install -g vercel
vercel
```

Siga o assistente interativo. Na primeira execução ele pedirá login e configuração do projeto.

### Opção 3 — Drag & drop

1. Execute `npm run build` localmente
2. Acesse [vercel.com/new](https://vercel.com/new)
3. Arraste a pasta `.next` gerada

---

## 📁 Estrutura do Projeto

```
src/
├── app/
│   ├── globals.css       # Estilos globais + variáveis CSS
│   ├── layout.tsx        # Root layout (fontes, metadata SEO)
│   └── page.tsx          # Página principal
├── components/
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Stack.tsx
│   │   ├── Projects.tsx
│   │   ├── Experience.tsx
│   │   ├── OpenSource.tsx
│   │   ├── Testimonials.tsx
│   │   └── Contact.tsx
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   └── ScrollRevealProvider.tsx
└── lib/
    └── data.ts           # ← EDITE AQUI para personalizar o conteúdo
```

---

## 🛠 Stack

| Tecnologia | Versão | Uso |
|---|---|---|
| Next.js | 15.2 | Framework (App Router) |
| React | 19 | UI |
| TypeScript | 5 | Type safety |
| Tailwind CSS | 3.4 | Estilização |
| DM Sans / DM Mono | — | Tipografia (Google Fonts) |

---

## ✅ Checklist pós-deploy

- [ ] Atualizar `siteConfig` em `src/lib/data.ts` com seus dados reais
- [ ] Substituir links `#` nos projetos pelos URLs reais (demo + GitHub)
- [ ] Adicionar um `public/og-image.png` (1200×630px) para Open Graph
- [ ] Configurar domínio customizado na Vercel (opcional)
