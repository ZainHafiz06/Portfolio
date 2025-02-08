document.addEventListener('DOMContentLoaded', () => {
    /* Navigation Bar: Scroll Effect */
    var nav = document.querySelector('nav');
    var navContents = document.querySelector('.navContents');

    var navLogo = document.querySelector('.navLogo img');

    var inSelection = document.querySelector('.inSelection');

    window.addEventListener('scroll', () => {
        if (window.scrollY >= 10) {
            if (window.innerWidth <= 1000) /* Mobile */ {
                nav.setAttribute("style", "padding: 20px 15px;");
                navContents.setAttribute("style", 
                    "background: rgba(0, 0, 0, 0.25);",
                    "backdrop-filter: blur(9px);",
                    "box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);",
                );

                navLogo.setAttribute("style", "filter: brightness(1)");
    
                inSelection.setAttribute("style", "background-color: #DEE2E6");
            } else /* Desktop */ {
                nav.setAttribute("style", "padding: 20px 40px;");
                navContents.setAttribute("style", 
                    "background: rgba(0, 0, 0, 0.25);",
                    "backdrop-filter: blur(9px);",
                    "box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);",
                );
    
                inSelection.setAttribute("style", "background-color: #DEE2E6");
            }
        } else if (scrollY < 10) {
            if (window.innerWidth <= 1000) /* Mobile */ {
                nav.setAttribute("style", "padding: 0;");
                navContents.setAttribute("style", 
                    "background: none",
                    "backdrop-filter: none;",
                    "box-shadow: none;"
                );

                navLogo.setAttribute("style", "filter: brightness(2);");
    
                inSelection.setAttribute("style", "opacity: ");
            } else /* Desktop */ {
                nav.setAttribute("style", "padding: 0;");
                navContents.setAttribute("style", 
                    "background: none",
                    "backdrop-filter: none;",
                    "box-shadow: none;"
                );
    
                inSelection.setAttribute("style", "opacity: ");
            }
        }
    });
});