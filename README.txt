tag --> iniciar um bloco de código
------------------------------------------------------------------------
<!DOCTYPE html> // explicitar que é html5
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
<div id = "nome">divisão da interface</div>
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
<h1>título</h1>
<p>paragrafo</p>
<br/>//quebra de linha 
&nbsp;//espaço em branco 
<wbr/> ou &shy; // quebra de palavra ou com hifen 
------------------------------------------------------------------------
<b>Negrito</b>
<i>itálico</i>
<em>enfase</em>
<u>sublinhado</u>
<del>linha cortada</del>
<sup>texto menor em cima</sup>
<sub>texto menor em baixo</sub>

<span style= "text-decoration: underline;">editar pequanas partes e sublinhando</span>

<h2 style="text-align:center; text-indent: 50px"> para alinhamento e espaço de paragrafo </h2>

<code>texto de código</code>
<pre>os espaços e enter são vistos</pre>
------------------------------------------------------------------------
<body style="background-color: red"> cor do plano de fundo
body bacground= <file> --> imagem
color: rgba(R,G,B, transparência)
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

no arquivo css para edição de legenda
________________________________________________________________________
edição da classe foto legenda

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
	padding: 10px; --> distância do texto com a borda
	box-sizing: border-box; --> o texto não sai da imagem
}
________________________________________________________________________
figure.foto-legenda:hover figcaption{ --> caso o cursor passar na foto a opacidade é 1
	opacity: 1;
}
------------------------------------------------------------------------