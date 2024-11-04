import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    // customização fora da propriedade "extend" vai substituir as configurações 
    // padrão de tema do Tailwind, ou seja, apagar o que o Tailwind estiliza por 
    // padrão e utilizar somente aquilo que você configurar aqui.

    // valores de breakpoint para cada tamanho de tela. As variáveis CSS NÃO
    // funcionam nesse caso, então adicionamos o valor numérico.
    screens: {
      'mobile': '360px',
      'tablet': '640px',
      'desktop': '1024px',
      'tv': '1440px',
    },

    // medidas para padding, margin, width, etc.
    spacing: {
      // as chamadas "T-shirt" sizes
      'none': 'var(--spacing-none) /* 0px */',
      '4xs': 'var(--spacing-4xs) /* 8px */',
      '2xs': 'var(--spacing-2xs) /* 12px */',
      'xs': 'var(--spacing-xs) /* 16px */',
      'sm': 'var(--spacing-sm) /* 20px */',
      'md': 'var(--spacing-md) /* 24px */',
      'lg': 'var(--spacing-lg) /* 32px */',
      'xl': 'var(--spacing-xl) /* 40px */',
      '2xl': 'var(--spacing-2xl) /* 48px */',
      '4xl': 'var(--spacing-4xl) /* 56px */',

      // valores numéricos (semelhantes aos acima, você escolhe qual utilizar)
      0: 'var(--spacing-none) /* 0px */',
      1: 'var(--spacing-4xs) /* 8px */',
      2: 'var(--spacing-2xs) /* 12px */',
      3: 'var(--spacing-xs) /* 16px */',
      4: 'var(--spacing-sm) /* 20px */',
      5: 'var(--spacing-md) /* 24px */',
      6: 'var(--spacing-lg) /* 32px */',
      7: 'var(--spacing-xl) /* 40px */',
      8: 'var(--spacing-2xl) /* 48px */',
      9: 'var(--spacing-4xl) /* 56px */',
    },

    fontSize: {
      xs: 'var(--text-xs)',
      sm: 'var(--text-sm)',
      md: 'var(--text-md)',
      lg: 'var(--text-lg)',
      xl: 'var(--text-xl)',
    },

    extend: {
      colors: {
        // a função rgb() permite que usemos a sintaxe do Tailwind para 
        // adicionar o modificador de opacidade quando usadas no componente
        primary: 'rgb(var(--primary))',
        secondary: 'rgb(var(--secondary))',
        tertiary: 'rgb(var(--tertiary))',
        quaternary: 'rgb(var(--quaternary))',
        hover: 'rgb(var(--hover))',
        click: 'rgb(var(--click))',
        icon: 'rgb(var(--icon))',
        outline: 'rgb(var(--outline))',
        divider: 'rgb(var(--divider))',
      },
      // cores adicionais disponíveis somente para background (bg-*)
      backgroundColor: {
        light: 'rgb(var(--bg-light))',
        dark: 'rgb(var(--bg-dark))',
        disabled: 'rgb(var(--bg-disabled))',
      },
      // cores adicionais disponíveis somente para text (text-*)
      textColor: {
        // subconjunto de cores cinza, para não sobrescrever os valores
        //  primary, secondary e tertiary já definidos na propriedade 
        // "colors" acima. Para usar: text-gray-*
        gray: {
          primary: 'rgb(var(--text-primary))',
          secondary: 'rgb(var(--text-secondary))',
          tertiary: 'rgb(var(--text-tertiary))',
        },
        disabled: 'rgb(var(--text-disabled))',
      },
      boxShadow: {
        sm: 'var(--shadow-sm)',
        md: 'var(--shadow-md)',
        lg: 'var(--shadow-lg)',
        focus: 'var(--shadow-focus)',
        outline: 'var(--shadow-outline)',
        'button-focus': 'var(--shadow-button-focus)',
      },
      blur: {
        default: 'var(--blur)'
      },
      borderRadius: {
        none: 'var(--border-radius-none)',
        sm: 'var(--border-radius-sm)',
        md: 'var(--border-radius-md)',
        lg: 'var(--border-radius-lg)',
      },
    },
  },
  plugins: [],
};
export default config;
