# Tech Commerce Solutions

Portal institucional fictício desenvolvido para a **Atividade Prática 10 — Desenvolvimento Front End**.

## Tecnologias
- HTML5
- CSS3
- Bootstrap 5
- JavaScript
- API pública DummyJSON para demonstração do catálogo

## Funcionalidades
- Layout responsivo para celular, tablet e desktop
- Menu mobile com Bootstrap
- Modo claro/escuro com preferência salva no navegador
- Seções de serviços, produtos, sobre a empresa e contato
- Carrossel horizontal de produtos com controles
- Catálogo carregado por API, com produtos locais como alternativa caso a API esteja indisponível
- Feedback visual ao clicar em "Tenho interesse"

## Estrutura
```text
projeto/
├── index.html
├── README.md
├── css/
│   └── style.css
├── js/
│   └── script.js
└── img/
```

## Como executar
1. Baixe ou clone este repositório.
2. Abra `index.html` no navegador.
3. Para uma experiência melhor, use a extensão **Live Server** do VS Code.

## Integração com CMS
O projeto está organizado para permitir integração futura com um CMS. No arquivo `js/script.js`, a constante `API_URL` indica a origem dos produtos. Quando o WordPress estiver configurado, ela poderá ser substituída por um endpoint da REST API do WordPress (`/wp-json/wp/v2/`) e os dados deverão ser adaptados ao formato retornado pelo CMS.

## Publicar no GitHub
1. Entre em https://github.com e faça login.
2. Clique em **New repository**.
3. Dê o nome `tech-commerce-solutions`.
4. Escolha **Public** e clique em **Create repository**.
5. No repositório, clique em **Add file → Upload files**.
6. Envie os arquivos e pastas deste projeto (não envie apenas o ZIP).
7. Clique em **Commit changes**.
8. Para colocar o site no ar: abra **Settings → Pages**, em **Build and deployment** selecione **Deploy from a branch**, escolha `main` e `/ (root)`, e salve.
9. Aguarde a publicação. O endereço ficará parecido com `https://SEU-USUARIO.github.io/tech-commerce-solutions/`.

## Observação acadêmica
Empresa, contatos e catálogo são fictícios/de demonstração. A API pública pode retornar produtos diferentes e seus preços foram convertidos apenas para fins ilustrativos.
