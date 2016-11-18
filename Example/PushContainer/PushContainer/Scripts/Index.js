$(function () {
    PushContainer.Add({
        ClassPushContainer: "example1",
        HtmlUp: "Clique aqui",
    });

    PushContainer.Add({
        ClassPushContainer: "example2",
        DisplayClose: true,
        HtmlUp: "Salve",
        ColorUp: "#ff0000",
        ColorContainer: "#ff0000",
    });

    PushContainer.Add({
        ClassPushContainer: "example3",
        DisplayClose: true,
        HtmlUp: "<div style='width: 100px;margin: auto;position: relative;height: 100%;'><div style='background: url(&quot;/Images/play.png&quot;);width: 25px;background-size: cover;position: absolute;top: -4px;left: 0px;bottom: 0px;height: 25px;'></div><div style='padding-left: 24px;'>Relatório</div></div>",
        ColorUp: "#945ba7",
        ColorContainer: "#945ba7"
    });

    PushContainer.Init();
    PushContainer.Responsive(); //para deixar responsivo
});