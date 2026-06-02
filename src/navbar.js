document.body.insertAdjacentHTML("afterbegin", `
            
            <head>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css">
            </head>


            <nav>
                <a href="../hero/index.html"><img src="../src/orbitalogo.svg" alt="Logo da Órbita" class="logo"></a>

                <ul class="navbar">
            <li class="nav-item" data-page="/hero/index.html">
                <a href="/hero/index.html">
                    <i class="fa-solid fa-house"></i> Início
                </a>
            </li>
            <li class="nav-item" data-page="/oportunidades/oportunities.html">
                <a href="/oportunidades/oportunities.html">
                    <i class="fa-solid fa-briefcase"></i> Oportunidades
                </a>
            </li>
            <li class="nav-item" data-page="credits.html">
                <a href="https://github.com/Raposix" target="_blank">
                    <i class="fa-solid fa-heart"></i> Créditos
                </a>
            </li>
        </ul>

        <style>
        @import url('https://fonts.googleapis.com/css2?family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&family=Urbanist:ital,wght@0,100..900;1,100..900&display=swap');


            nav {
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding: 16px 32px 16px 32px;
                }

            .logo {
                margin-right: auto;
                height: 50px;
            }

            .navbar {
            background: #1a1a2e; /* ou o dark da sua paleta */
            border-radius: 50px;
            border: 1px solid rgba(255, 255, 255, 0.08);
            list-style: none;
            display: flex;
            justify-content: center;
            gap: 4px;
            padding: 6px;
            width: fit-content;
            margin: 0;

            width: fit-content;
            margin: 0;
            padding: 12px 32px;
            margin-top: 20px;
            margin-left: auto;
        }

        .navbar li a {
            font-family: 'Urbanist', sans-serif;
            display: flex;
            align-items: center;
            gap: 8px;
            padding: 10px 20px;
            border-radius: 50px;
            text-decoration: none;
            color: rgba(255, 255, 255, 0.6);
            font-size: 14px;
            font-weight: 500;
            transition: all 0.2s ease;
        }

        .navbar li a:hover {
            background: rgba(255, 255, 255, 0.07);
            color: rgba(255, 255, 255, 0.9);
        }

        .navbar li a.active {
            background: #3d3a6b; /* roxo escuro como na imagem */
            color: #fff;
        }

        .navbar a {
            text-decoration: none;
            color: inherit;
        }

        .nav-item i {

        }

        .nav-item.active i {
            display: inline;
            color: var(--blue);
            margin-right: 6px;
        }

        .nav-item.active a {
            color: var(--blue);
            font-weight: 600;
        }

            @media (max-width: 768px) {
    nav {
        padding: 12px 16px;  /* menos padding, mas mesma linha */
        margin-bottom: 12px; /* mais espaço abaixo do nav */
    }

    .navbar {
        margin-left: 0;
        margin-top: 0;
        padding: 8px 12px;
        gap: 0;
    }

    /* esconde o texto de todos */
    .navbar li a {
        font-size: 0;
        gap: 0;
        padding: 10px 14px;
    }

    /* mantém só o ícone */
    .navbar li a i {
        font-size: 16px;
    }

    /* ativo mostra o texto */
    .nav-item.active a {
        font-size: 13px;
        gap: 6px;
        padding: 10px 16px;
    }

    .nav-item.active a i {
        font-size: 13px;
    }
}

        </style>
    </nav>
`);

const currentPage = location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-item').forEach(item => {
    if (item.dataset.page === currentPage) {
        item.classList.add('active');
    }
});

document.body.insertAdjacentHTML ("beforeend", `
<footer class="footer">

    <div class="footer-esquerda">
      <img src="../src/orbitalogo_footer.svg" class="logo-footer">
      <p class="copyright">a indie project. 2026</p>
    </div>

    <div class="footer-direita">
      <p class="credit1">Feito com <i class="fa-solid fa-heart"></i> por <a href="https://github.com/Raposix" target="_blank">Raposix</a></p>
      <p class="credit2">Oportunidades fornecidas por <a href="https://discord.com/users/1193668420756054168" target="_blank">Minolet</a> dos <a href="https://discord.com/invite/cVCSKmgCrS" target="_blank">Cavaleiros do Estudalipse</a></p>
    </div>

  </footer>

  <style>
    @import url('https://fonts.googleapis.com/css2?family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&family=Urbanist:ital,wght@0,100..900;1,100..900&display=swap');
    
    .footer {
      margin-top: 40px;
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      padding: 32px 20px;
      background-color: #000;
    }

    .footer p, a {
      font-family: 'Urbanist', sans-serif;
    }

    .footer-esquerda {
      display: flex;
      flex-direction: column;
      gap: 15px;
    }

    .logo-footer {
        opacity: 50%;
      height: 100px;  /* 250px tava enorme */
      margin-bottom: 0px; /* ajusta o espaçamento entre o logo e o texto */
    }

    .logo-footer:hover {
        opacity: 100%;
    }

    .copyright {
      color: rgba(255,255,255,0.4);
      font-size: 12px;
      margin: 0;
    }

    .footer-direita {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      gap: 4px;
    }

    .credit1, .credit2 {
      color: rgba(255,255,255,0.4);
      font-size: 12px;
      margin: 0;
    }

    .credit1 a, .credit2 a {
      color: white;
      text-decoration: none;
    }

    .credit1 a:hover, .credit2 a:hover {
      text-decoration: underline;
    }

    //RESPONSIVIDADE



    .footer {
        flex-direction: column;
        align-items: flex-start;
        gap: 24px;
        padding: 24px 16px;
    }

    .footer-direita {
        align-items: flex-start;  /* créditos vão pra esquerda */
    }
  </style>
`);