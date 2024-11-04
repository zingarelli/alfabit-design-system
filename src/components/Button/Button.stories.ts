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