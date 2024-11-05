# AlfaBit - Design System 

Criação de um Design System utilizando NextJS, TypeScript, Tailwind CSS e Storybook.

Baseado no curso da Alura [React: criando um Design System com TailwindCSS](https://cursos.alura.com.br/course/react-criando-design-system-tailwind), ministrado por [Vinicius Cardozo](https://linkedin.com/in/vcardozo).

👉 [Arquivo Figma](https://www.figma.com/community/file/1419101090788013502)

👉 [Código base inicial](https://github.com/alura-cursos/alfabit-design-system)

## Instalação

    npm i
    npm run storybook

O Storybook poderá ser acessado no link http://localhost:6006/.

## Design atômico

- Design System: é o conjunto de componentes visuais que compõem um produto (no caso, a aplicação). Isso inclui as cores, tipografia, espaçamentos, contornos, mas vai além, podendo incluir também componentes, layout, comportamento, responsividade, etc. Por meio dele, temos uma padronização de como as telas serão compostas, garantindo consistência e coesão no tema e acelerando a criação. Ele serve como ponto de referência e uma ferramenta de comunicação entre designers e devs.

- Design atômico (atomic design): é uma metodologia para criação de design systems, focado na construção de interfaces de forma granular. Ela é organizada em cinco níveis: átomos, moléculas, organismos, templates e páginas.

    - Átomos: os elementos mais básicos de design, como fontes, cores, tags HTML;

    - Moléculas: combinação de átomos para formar elementos mais complexos. Por exemplo, juntar uma label, um input e um botão para obter um formulário;

        - algumas abordagens podem definir tags HTML estilizadas como sendo moléculas, por serem uma combinação da tag padrão e elementos de cores, bordas, fontes, etc. que a customizam. Por exemplo, um botão ativo e um botão desativado podem ser considerados duas moléculas diferentes por terem estilos diferentes (uma cor diferente, por exemplo). Essa é uma escolha de design.

    - Organismos: combinação de moléculas que juntas representam partes independentes de uma interface. Por exemplo, um cabeçalho, um footer.

    - Templates: combinação de organismos. Formam uma página de forma abstrata, posicionando seus componentes sem se preocupar com o conteúdo, como se fosse o esqueleto da página.

    - Página: é uma instância concreta de um template, incluindo o conteúdo final, imagens, aquilo que a pessoa irá de fato ver ao acessar uma tela.

> [Post do Brad Fost](https://bradfrost.com/blog/post/atomic-web-design/) (em inglês), criador da metodologia do Design Atômico.

- Design tokens: ou apenas "tokens" é um nome que costuma-se usar para uma variável reutilizável, que armazena um valor relacionado a um estilo de um elemento. Na prática, podemos considerar uma variável CSS como sendo um token. Quando falar em token, pensa que é um valor abstrato para definir um estilo, que podemos atribuir a uma variável CSS, que por sua vez pode estar sendo representado em algum átomo do design system. Por exemplo, ao estilizar um botão, podemos aplicar a ele um token da cor de fundo (`--color-primary`), um token do tamanho da fonte (`--font-size-large`), um token do border-radius (`--border-radius-small`), etc. No seu arquivo CSS esses tokens são atribuídos a variáveis, e os valores correspondentes vêm do seu design system.

## Storybook

> Os códigos e explicações valem para a **versão 8** e podem não ser válidos para versões anteriores.

👉 [Documentação e tutoriais](https://storybook.js.org/docs)

O Storybook é uma ferramenta que auxilia na criação de um **catálogo de componentes**. Ele provê uma interface visual em que é possível **visualizar e testar os componentes de modo isolado**, sem interferência de outros componentes. Ele também serve como **forma de documentação**, sendo possível dar detalhes de cada componente e suas props. Existe uma documentação gerada automaticamente pela ferramenta, mas também é possível criar sua própria documentação, customizada e detalhada, utilizando [MDX](https://storybook.js.org/docs/writing-docs/mdx) (que seria o formato MarkDown misturado com JSX). Essa "documentação interativa" também pode ser exportada.

Por meio de extensões (addons), é possível adicionar ainda mais funcionalidades ao Storybook. Há addons criados pela comunidade, como também mantidos pelo próprio Storybook.

### Instalação

Em um projeto Next (a partir da versão 13.5) que não possui o Storybook, rode o seguinte comando para instalar a versão mais recente:

    npx storybook@latest init

Após a instalação, o Storybook automaticamente irá fazer um run e abrir uma página de Setup Wizard, que serve como um guia para conhecer a ferramenta. Ele também cria uma pasta `stories` no seu projeto - essa parte é opcional; se desejar, pode até apagar a pasta `stories` e decidir por outra abordagem para organizar seus arquivos. No curso, o instrutor opta por criar cada arquivo `.story` dentro da pasta de cada componente correspondente. 

Para rodar a ferramenta manualmente, use o `npm run storybook`. Ela poderá ser acessada em `http://localhost:6006`.

A [documentação](https://storybook.js.org/docs/get-started/frameworks/nextjs?renderer=react) dá mais detalhes sobre a instalação, incluindo como fazer upgrade em um projeto que já roda o Storybook.

[Esse post](https://storybook.js.org/blog/get-started-with-storybook-and-next-js/) explica outro jeito de instalar o Storybook em versões do Next mais antiga. É o procedimento feito pelo instrutor, mas que eu não segui.

### Escrevendo stories

Por meio das chamadas "stories" a ferramenta renderiza seu componente. Na tela criada pelo Storybook, há um painel de controle que permite visualizar e alterar as props, modificando dinamicamente a aparência e comportamento do componente. Há também outras opções para ver o código, alterar a viewport (para ver como fica em mobile e tablet), etc.

As stories são criadas por meio de um arquivo `<nome_do_componente>.stories.tsx` (`jsx` | `.js` | `.ts`, etc; é agnóstico), salvo na mesma pasta do componente relacionado a ela. Nela configuramos como o componente deve ser exibido, podendo passar diferentes props (no Storybook são chamado de `args`) e dados mockados para renderizá-lo de modos diferentes (diferentes estados). A cada um é dado o nome de *"story"*.

> Caso seu componente utilize arquivos CSS para estilização, eles devem ser importados no arquivo `./.storybook/preview.ts`, para que o Storybook consiga aplicá-los.

#### Exemplo de arquivo `.stories` 

Exemplo (em TypeScript) para um componente de botão com diversas stories, baseadas em variantes de tema (primário, secundário e terciário) e no estado do botão (habilitado ou desabilitado). 

```jsx
import { Meta, StoryObj } from "@storybook/react"
import { Button, ButtonProps } from "."

/* 
    O objeto meta tem as configurações do componente.
    É como ele irá aparecer na barra lateral da ferramenta.
    Use o export default para ele.
*/
const meta: Meta<ButtonProps> = {
    // título na barra lateral. As / indicam subníveis
    // na barra lateral
    title: 'Molecules/Button', 

    // tags: ['autodocs'] é uma documentação gerada 
    // automaticamente. Apague caso tenha um arquivo .mdx
    // tags: ['autodocs'], 

    component: Button, // componente primário
    
    // props disponíveis no Storybook que podem ser manipuladas
    argTypes: {
        children: {
            type: 'string'
        },
        variant: {
            options: ['primary', 'secondary', 'tertiary'],
            description: 'primary | secondary | tertiary',
        },
        disabled: {
            type: 'boolean'
        },
        className: {
            type: 'string'
        }
    }
};

export default meta;

/*
    Os outros export que não sejam default serão as "stories".
    São variantes do componente, ou seja, o componente com 
    propriedades alteradas. Na barra lateral, irão aparecer 
    como filhos de meta, usando o nome definido para a const.
*/

// Primeira story será a padrão. Por convenção, é chamada Primary.
// É o mesmo nome do bloco usado no arquivo MDX
export const Primary: StoryObj<ButtonProps> = {
    // são as props do componente, de acordo
    // com o tipo definido acima
    args: {
        children: 'Click me'
    }
}

// paleta de cores do tema violeta
export const Violet: StoryObj<ButtonProps> = {
    args: {
        children: 'Click me',
        // utilizando uma classe customizada do 
        // Tailwind, criada no globals.css
        className: 'theme-violet'
    }
}

// outras stories com variantes
export const PrimaryDisabled: StoryObj<ButtonProps> = {
    args: {
        children: 'Click me',
        disabled: true,
    }
}

export const Secondary: StoryObj<ButtonProps> = {
    args: {
        children: 'Click me',
        variant: 'secondary',
    }
}

export const SecondaryDisabled: StoryObj<ButtonProps> = {
    args: {
        children: 'Click me',
        variant: 'secondary',
        disabled: true,
    }
}

export const Tertiary: StoryObj<ButtonProps> = {
    args: {
        children: 'Click me',
        variant: 'tertiary',
    }
}

export const TertiaryDisabled: StoryObj<ButtonProps> = {
    args: {
        children: 'Click me',
        variant: 'tertiary',
        disabled: true,
    }
}

export const VioletDisabled: StoryObj<ButtonProps> = {
    args: {
        children: 'Click me',
        className: 'theme-violet',
        disabled: true
    }
}

export const VioletSecondary: StoryObj<ButtonProps> = {
    args: {
        children: 'Click me',
        className: 'theme-violet',
        variant: 'secondary'
    }
}

export const VioletSecondaryDisabled: StoryObj<ButtonProps> = {
    args: {
        children: 'Click me',
        className: 'theme-violet',
        variant: 'secondary',   
        disabled: true
    }
}

export const VioletTertiary: StoryObj<ButtonProps> = {
    args: {
        children: 'Click me',
        className: 'theme-violet',
        variant: 'tertiary'
    }
}

export const VioletTertiaryDisabled: StoryObj<ButtonProps> = {
    args: {
        children: 'Click me',
        className: 'theme-violet',
        variant: 'tertiary',   
        disabled: true
    }
}
```

### Escrevendo documentação

O Storybook pode gerar uma documentação automática para os componentes quando se adiciona a propriedade `tags: ['autodocs']` ao objeto meta no arquivo de stories. Mas você também pode criar uma documentação customizada utilizando um arquivo com extensão `.mdx`, salvo na mesma pasta do componente relacionado a essa documentação.

Esse arquivo é uma mistura de Markdown com JSX, ou seja, podemos escrever nossa documentação utilizando a formatação Markdown e também adicionar JSX. 

Precisamos importar o arquivo `.stories` do componente para fazer a associação com a documentação. Veja no código exemplo mais abaixo.

> A documentação é acessada na barra lateral, junto com as stories de cada componente, e terá o mesmo nome dado ao arquivo `.mdx`. Caso o arquivo seja `<nome_do_componente>.mdx`, a documentação terá o nome "Docs".

#### Exemplo de arquivo `.mdx`

Esse é o exemplo para a story criada anteriormente. Demos o nome de `Button.mdx`, então ela irá aparecer como "Docs" na barra lateral. 

```md
import { Meta, Primary, Controls, Canvas } from "@storybook/blocks";
import * as Story from "./Button.stories.ts";

{/* Associação da documentação às stories do componente */}
<Meta of={Story} /> 

# Button docs

This a button. Shocking.

## Default button 

{/* Bloco Canvas para exibir variantes do componente */}
<Canvas of={Story.Primary} />

### Default disabled

<Canvas of={Story.PrimaryDisabled} />

### Default button secondary

<Canvas of={Story.Secondary} />

### Default secondary disabled

<Canvas of={Story.SecondaryDisabled} />

### Default button tertiary

<Canvas of={Story.Tertiary} />

### Default tertiary disabled

<Canvas of={Story.TertiaryDisabled} />

## Violet theme

This is how button will look when the violet theme is applied.

<Canvas of={Story.Violet} />

### Violet disabled

<Canvas of={Story.VioletDisabled} />

### Violet secondary

<Canvas of={Story.VioletSecondary} />

### Violet secondary disabled

<Canvas of={Story.VioletSecondaryDisabled} />

### Violet tertiary

<Canvas of={Story.VioletTertiary} />

### Violet tertiary disabled

<Canvas of={Story.VioletTertiaryDisabled} />

## Interactive Doc

{/* Bloco Primary exibe a story padrão do componente  */}
<Primary />

{/* Exibe as props disponíveis para o componente Primary */}
<Controls />
```