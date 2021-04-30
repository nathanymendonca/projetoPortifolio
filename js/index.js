function ativaScrollSuave(selector){ // efeito de transição suave.
    $(selector).click(function(event){
        event.preventDefault();
        //event.preventDefault()
        // cancelar o evento padrão das nossas âncoras, 
        //que é seguir o valor do atributo href. Queremos 
        //que transição seja feita por JavaScript.

        var target = $(this).attr('href');
        // o this é passado como JQuery como objeto href
        //Para a âncora que foi clicada, precisamos 
        //extrair o valor do seu href. Esse valor guarda o
        // ID do elemento no qual queremos fazer o scroll suave.

        $('html, body').animate({ 
        // animação através da função animate do jQuery. 
        //Ela será responsável em fazer nosso scroll suave:
            scrollTop: $(target).offset().top
        }, 1000); 

        //target é o valor do href do elemento que clicamos. 
        //Fizemos $(this) para promovermos o this, que é um 
        //elemento do DOM para um jQuery Object para então 
        //extrairmos o valor do atributo href através de $(this).attr('href').

    });

}

ativaScrollSuave('a[href*=panel-about]');
ativaScrollSuave('a[href*=panel-speakers]');
ativaScrollSuave('a[href*=panel-form]');

// passa como parâmetro para a função ativaScrollSuave o 
//seletor CSS de cada âncora que desejamos fazer o scroll suave