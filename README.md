# Import Package.json in index.js

Esse projeto é só um passo a passo de como fazer um import de arquivos com extenção `.json` usando módulos JavaScript.

> [!NOTE]
> Vale lembrar que **JavaScript modules** não é amplamente suportado pelos navegadores. Confira a compatibilidade do navegador [documentação da mozilla](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Modules#suporte_do_navegador).

Então vamos ao que importa:

### packge.json

Adicione a propriedade `type`.

```json
"type": "module",
```

### index.html

Vamos usar uma tag script com `type`.

```html
<script type="module" src="index.js"></script>
```

### index.js

Por último vamos usar import com a sintaxe `with`.

```js
import packagejson from "./package.json" with { type: "json" };
```

## Exemplo de uso

para esse exemplo adicionei uma linha no js para pegar um elemento do html e colocar um innerText com o valor da versão do meu `package.json`.

```js
import packagejson from "./package.json" with { type: "json" };

document.getElementById("version").innerText = packagejson.version;
```

Ficando assim:

![visualização do projeto](/assets/image.png)
