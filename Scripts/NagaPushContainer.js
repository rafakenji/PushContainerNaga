var PushContainer = {
    Element: [],
    Add: function (elements) {
        var element = (function (elements) {
            if (elements.ClassPushContainer === undefined || elements.ClassPushContainer === null)
                elements.ClassPushContainer = "";

            if (elements.ClassContainer === undefined || elements.ClassContainer === null)
                elements.ClassContainer = "container";

            if (elements.ClassClose === undefined || elements.ClassClose === null)
                elements.ClassClose = "btn-close-container";

            if (elements.DisplayClose === undefined || elements.DisplayClose === null)
                elements.DisplayClose = true;

            if (elements.ClassUp === undefined || elements.ClassUp === null)
                elements.ClassUp = "push-up";

            if (elements.ColorContainer === undefined || elements.ColorContainer === null)
                elements.ColorContainer = "#ff9800";

            if (elements.ColorUp === undefined || elements.ColorUp === null)
                elements.ColorUp = "#ff9800";

            return elements;
        })(elements); //valida os elementos

        PushContainer.Element.push(
            { //propriedades dos elementos
                PushContainer: {
                    Class: "container-push",
                    ClassPath: ".naga-css.container-push." + element.ClassPushContainer,
                    Opened: false
                },
                Container: {
                    Class: element.ClassContainer,
                    ClassPath: ".naga-css.container-push." + element.ClassPushContainer + " > ." + element.ClassContainer,
                    Color: element.ColorContainer
                },
                CloseContainer: {
                    Class: element.ClassClose,
                    ClassPath: ".naga-css.container-push." + element.ClassPushContainer + " > ." + element.ClassContainer + " > ." + element.ClassClose,
                    Display: element.DisplayClose
                },
                ButtonUp: {
                    Class: element.ClassUp,
                    ClassPath: ".naga-css.container-push." + element.ClassPushContainer + " > ." + element.ClassUp,
                    Color: element.ColorUp,
                    Html: element.HtmlUp
                }
            }
        );
    },
    Init: function () { //A inicializacao dos elementos do PushContainer
        var function_private = {
            Init: function () {
                var EventPushContainer = {
                    CloseContainer: function () {
                        $(PushContainer.Element[$(this).data("IndexElementPushContainer")].PushContainer.ClassPath).animate({ "top": "100%" }, { duration: "slow" });
                    },
                    OpenContainer: function () {
                        $(PushContainer.Element[$(this).data("IndexElementPushContainer")].PushContainer.ClassPath).animate({ "top": "0" }, { duration: "slow" });
                    }
                }

                PushContainer.Element.forEach(function (element, index) {
                    $(element.PushContainer.ClassPath).append(
                        $("<div>", { class: element.ButtonUp.Class })
                            .html(element.ButtonUp.Html)
                            .bind("click", EventPushContainer.OpenContainer)
                            .data("IndexElementPushContainer", index));

                    //quando clicar no botao do container para entrar no painel
                    $(element.Container.ClassPath)
                        .css({"background-color": element.Container.Color})
                        .append(
                            $("<div>", { class: element.CloseContainer.Class })
                                .data("IndexElementPushContainer", index)
                                .css({ display: element.CloseContainer.Display ? "block" : "none" })
                                .on("click", EventPushContainer.CloseContainer)
                                .append($("<div>", { class: "reta1" }))
                                .append($("<div>", { class: "reta2" })));
                });
            },
            AdjustPositionMenu: function () {
                PushContainer.Element.forEach(function (element, index) {
                    var calc = 0;
                    for (var i = index; i < PushContainer.Element.length; i++) {
                        calc += $(PushContainer.Element[i].ButtonUp.ClassPath).outerWidth() * 0.8;
                    }

                    $(element.ButtonUp.ClassPath).css({
                        "left": "calc(80% - " + calc + "px",
                        "background-color": element.ButtonUp.Color
                    });
                });
            }
        };

        function_private.Init();
        function_private.AdjustPositionMenu();
    },
    Close: function (index) {
        if (index === undefined || index === null)
            PushContainer.Element.forEach(function (element, index) {
                $(element.PushContainer.ClassPath)
                    .animate({ "top": "100%" }, { duration: "slow" });
                PushContainer.Element[index].PushContainer.Opened = false;
            });

        else {
            $(PushContainer.Element[index].PushContainer.ClassPath)
                .animate({ "top": "100%" }, { duration: "slow" });
            PushContainer.Element[index].PushContainer.Opened = false;
        }
    },
    Open: function(index){
        if (index !== undefined && index !== null) {
            $(PushContainer.Element[index].PushContainer.ClassPath)
                .animate({ "top": "0" }, { duration: "slow" });
            PushContainer.Element[index].PushContainer.Opened = true;
        }
    },
    Responsive: function () {
        (function () {
            $("body")
                .append(
                    $("<div>", { class: "push-container-responsive" })
                    .css({ "display": "none" })
                    .append(
                        $("<div>", { class: "aba-responsive" })
                            .append($("<div>", { class: "line1" }))
                            .append($("<div>", { class: "line2" }))
                            .append($("<div>", { class: "line3" }))
                            .append($("<div>", { class: "line4" }))
                            .on("click", function () {
                                if ($(this).parents(".push-container-responsive").hasClass("opened")) {
                                    $(this).parents(".push-container-responsive").removeClass("opened");
                                    $(this).find(".line1").removeClass("opened");
                                    $(this).find(".line2").removeClass("opened");
                                    $(this).find(".line3").removeClass("opened");
                                    $(this).find(".line4").removeClass("opened");
                                }
                                else {
                                    $(this).parents(".push-container-responsive").addClass("opened");
                                    $(this).find(".line1").addClass("opened");
                                    $(this).find(".line2").addClass("opened");
                                    $(this).find(".line3").addClass("opened");
                                    $(this).find(".line4").addClass("opened");
                            }
                        })
                    )
                    .append(
                        $("<div>", { class: "item-menu" })
                    )
                );
            PushContainer.Element.forEach(function (element, index) {
                $(".push-container-responsive .item-menu").append(
                    $("<div>", { class: "item" })
                        .html(element.ButtonUp.Html)
                        .data("IndexElementPushContainer", index)
                        .on("click", function () {
                            PushContainer.Element.forEach(function (element, index) {
                                if (element.PushContainer.Opened) {
                                    PushContainer.Close(index);
                                }
                            });
                            PushContainer.Open($(this).data("IndexElementPushContainer"));
                            $(this).parents(".push-container-responsive").removeClass("opened");
                            $(this).parents(".push-container-responsive").find(".line1").removeClass("opened");
                            $(this).parents(".push-container-responsive").find(".line2").removeClass("opened");
                            $(this).parents(".push-container-responsive").find(".line3").removeClass("opened");
                            $(this).parents(".push-container-responsive").find(".line4").removeClass("opened");
                        })
                    );
            });
        })();

        $(window).resize(function () {
            var width = $(window).width();
            var widthMenu = 0;
            var classButtonUp = "";

            PushContainer.Element.forEach(function (element, index) {
                classButtonUp += element.ButtonUp.ClassPath + ", "; //para ele nao ficar dando foreach a todo momento, ele junta todas as classes que vao ser alteradas
                widthMenu += $(element.ButtonUp.ClassPath).outerWidth();
            });
            classButtonUp = classButtonUp.replace(/,([^,]*)$/,'$1')
            
            if (width < widthMenu) {
                $("body").addClass("body-responsive");
                $(classButtonUp).css({ "display": "none" });
                $(".push-container-responsive").css({ "display": "block" });
            }
            else {
                $("body").removeClass("body-responsive");
                $(classButtonUp).css({ "display": "block" });
                $(".push-container-responsive").css({ "display": "none" });
            }
        });
        $(window).resize();
    }
}

var Model_Element = {
    ClassPushContainer: "example_class", //classe pai que do push container (obrigatorio)
    ClassContainer: null, //classe do container
    ClassClose: null, //classe do botao que vai fechar o container
    DisplayClose: true, //true ou false se vai exibir o botao de fechar
    ClassUp: null, //Classe do botao superior que puxa o container
    HtmlUp: "texto ou tag", //texto ou tags em html do botao que puxa
    ColorUp: "#ff0000", //cor do botao que puxa
    ColorContainer: "#ff0000" //cor do container
};