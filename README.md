# PushContainer for Naga - ENGLISH
## Index

1. Introduction
2. Requirements
3. Begin
4. Features
5. Example

### 1. Introduction

They're containers to insert content, it's generates dynamicly through Javascript.

### 2. Requirements

What's necessary to utilize the `PushContainer`

* Jquery 3.* (tested only on 3.*)

### 3. Begin

Call for `NagaPushContainer.js` and `NagaPushContainer.css` in your HTML.

	<!DOCTYPE html>
		<html xmlns="http://www.w3.org/1999/xhtml">
		<head>
			<title></title>
			<link href="/Contents/NagaPushContainer.css" rel="stylesheet" />
		</head>
		<body>
			<div class="naga-css container-push onDown example1">
				<div class="container">
					<!--Post the content you want here-->
				</div>
			</div>
				
			<script src="Scripts/Jquery/jquery-3.1.1.min.js"></script>
			<script src="/Scripts/NagaPushContainer.js"></script>
			<scrip>
				$(function () {
					PushContainer.Add({
						ClassPushContainer: "example1",
						HtmlUp: "Click Here",
					});
					PushContainer.Init();
					//PushContainer.Responsive(); //optional
				})
			</script>
		</body>
	</html>
	
Method necessary to include a container, also is necessary the tag in HTML. How the example the class "example1".

	PushContainer.Add({
						ClassPushContainer: "CLASSE",
						HtmlUp: "BUTTON MESSAGE",
					});

In `PushContainer.Init` it is necessary to start `PushContainer`.

	PushContainer.Init();
	
Ready!

### 4. Features

* Start the creation of containers
	PushContainer.Init();

* Add containers
	PushContainer.Add({
						ClassPushContainer: "CLASSE",
						HtmlUp: "BUTTON MESSAGE",
					});

property example that can be change, how button color, container color, if button close hide or show. In property "HtmlUp" can pass tags in HTML.
	var Model_Element = {
		ClassPushContainer: "example_class", //class father (required)
		ClassContainer: null, //class container
		ClassClose: null, //class button close
		DisplayClose: true, //true or false to show or hide
		ClassUp: null, //Class Button open
		HtmlUp: "texto ou tag", //text or tag to button open
		ColorUp: "#ff0000", //button color open
		ColorContainer: "#ff0000" //container color open
	};

* Picking up the elements that is containers, it's a array.
	var elements = PushContainer.Element;
	
* Close all the containers if not pass parameters, or close container for ID element
	PushContainer.Close();
	
* Open the container that pass the parameter
	PushContainer.Open(0);
	
* To leave responsive the containers
	BoxTip.Responsive();

### 5. Example	

In `\Example\PushContainer` contains a test template using `PushContainer`.



# PushContainer do Naga - PORTUGUES
## Indice

1. Introdução
2. Requisitos
3. Começando
4. Funcionalidades
5. Exemplo

### 1. Introdução

Eles são contêineres para inserir conteúdo, ele é gerado dinamicamente através de Javascript.

### 2. Requisitos

O que é necessário para utilizar o `PushContainer`

* Jquery 3.* (testado só na versao 3.*)

### 3. Começando

Chame para `NagaPushContainer.js` e` NagaPushContainer.css` em seu HTML.

	<!DOCTYPE html>
		<html xmlns="http://www.w3.org/1999/xhtml">
		<head>
			<title></title>
			<link href="/Contents/NagaPushContainer.css" rel="stylesheet" />
		</head>
		<body>
			<div class="naga-css container-push onDown example1">
				<div class="container">
					<!--Publique o conteúdo que deseja aqui-->
				</div>
			</div>
				
			<script src="Scripts/Jquery/jquery-3.1.1.min.js"></script>
			<script src="/Scripts/NagaPushContainer.js"></script>
			<scrip>
				$(function () {
					PushContainer.Add({
						ClassPushContainer: "example1",
						HtmlUp: "Click Here",
					});
					PushContainer.Init();
					//PushContainer.Responsive(); //opcional
				})
			</script>
		</body>
	</html>
	
Método necessário para incluir um recipiente, também é necessário a tag em HTML. Como o exemplo da classe "example1".

	PushContainer.Add({
						ClassPushContainer: "CLASSE",
						HtmlUp: "BUTTON MESSAGE",
					});

Em 'PushContainer.Init` é necessário iniciar o `PushContainer`.

	PushContainer.Init();
	
Pronto!

### 4. Funcionalidades

* omeçando a criação de containers
	PushContainer.Init();

* Adiciona um containers
	PushContainer.Add({
						ClassPushContainer: "CLASSE",
						HtmlUp: "BUTTON MESSAGE",
					});

Exemplo de propriedade que pode ser alterado, como a cor do botão, a cor do recipiente, se o botão fechar ocultar ou mostrar. Na propriedade "HtmlUp" pode passar tags em HTML.
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

* Pegando os elementos que são containers, é uma matriz.
	var elements = PushContainer.Element;
	
* Feche todos os containers se não passar parâmetros, ou fechar o recipiente para o elemento ID.
	PushContainer.Close();
	
* Abra o contêiner que passar o parâmetro.
	PushContainer.Open(0);
	
* Deixar responsivo os containers.
	BoxTip.Responsive();

### 5. Exemplo	

Em `\Example\PushContainer` contém um modelo de teste usando 'PushContainer`.