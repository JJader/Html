tag --> iniciar um bloco de c�digo
------------------------------------------------------------------------
<!DOCTYPE html> // explicitar que � html5
<html lang = "pt-br"> // linguagem do site

<head>// comportamental
<title>Curso de HTML5</title> // titulo da pagina
</head>

<body> // visual
<h1>TITULO</h1>
</body>
</html>

------------------------------------------------------------------------

<style> --> estilo css
h1 {
font-family: Arial;
font-size: 30pt;
color: blue;
text-shadow: 2px 2px 10px black;
}
------------------------------------------------------------------------
<div id = "nome">divis�o da interface</div>
------------------------------------------------------------------------
<hgroup>um grupo de titulos</hgroup>
------------------------------------------------------------------------

<img src = "caminho" width="200"> // inserindo imagem e tamanho da imagem 

<figure> tag para enquadrar figuras </figure>
border: 8px solid red --> borda de imagem 

figure.foto-legenda img{
	width: 100%;
	height: 100%;
} --> imagem atualiza tamanho de acordo com a pagina
box-shadow: 1px 1px 4px black; --> sombreando imagem
------------------------------------------------------------------------
<h1>t�tulo</h1>
<p>paragrafo</p>
<br/>//quebra de linha 
&nbsp;//espa�o em branco 
<wbr/> ou &shy; // quebra de palavra ou com hifen 
------------------------------------------------------------------------
<b>Negrito</b>
<i>it�lico</i>
<em>enfase</em>
<u>sublinhado</u>
<del>linha cortada</del>
<sup>texto menor em cima</sup>
<sub>texto menor em baixo</sub>

<span style= "text-decoration: underline;">editar pequanas partes e sublinhando</span>

<h2 style="text-align:center; text-indent: 50px"> para alinhamento e espa�o de paragrafo </h2>

<code>texto de c�digo</code>
<pre>os espa�os e enter s�o vistos</pre>
------------------------------------------------------------------------
<body style="background-color: red"> cor do plano de fundo
body bacground= <file> --> imagem
color: rgba(R,G,B, transpar�ncia)
------------------------------------------------------------------------
ESTILO CSS
copiar as linhas de estilo e colar em um arquivo css
<link rel = "stylesheet" type= "text/css" href= "<file>" \>

------------------------------------------------------------------------
Legenda
<figure class="foto-lefenda">// bloco de figuras com a classe F-L
<figcaption>
"Legenda"
</figcaption>
</figure>

no arquivo css para edi��o de legenda
________________________________________________________________________
edi��o da classe foto legenda

figure.foto-legenda{
	position: relative;
	border : 8px solid white;
	box-shadow: 1px 1px 4px black;
}
________________________________________________________________________
figure.foto-legenda figcaption{ --> tag figure, classe F-L figcapition
	opacity:0;
	position:absolute;
	top:0px;
	background-color: rgba(0,0,0,0.4);
	color: white;
	width:100%;
	height:100%;
	padding: 10px; --> dist�ncia do texto com a borda
	box-sizing: border-box; --> o texto n�o sai da imagem
}
________________________________________________________________________
figure.foto-legenda:hover figcaption{ --> caso o cursor passar na foto a opacidade � 1
	opacity: 1;
}
------------------------------------------------------------------------