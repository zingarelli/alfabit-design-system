// Usando o pipe (|) para estender de dois tipos diferentes (Input e TextArea).
// Definimos o tipo a ser usado no retorno do componente, usando o "as".
export type InputProps = {
  label?: string,
  multiline?: boolean
} & (
    React.InputHTMLAttributes<HTMLInputElement> |
    React.TextareaHTMLAttributes<HTMLTextAreaElement>
  );

// Isolando a complexidade lógica em um componente intermediário.
// Assim, podemos nos preocupar somente com estilização no componente principal.
const InputOrTextArea = (props: InputProps) => {
  if (props.multiline) return <textarea {...props as React.TextareaHTMLAttributes<HTMLTextAreaElement>} />
  return <input {...props as React.InputHTMLAttributes<HTMLInputElement>} />
}

const Input = ({ label, className, disabled, ...rest }: InputProps) => {
  return <div className="relative">
    {label && <label
      className={`
        absolute pt-1 pl-3 text-xs font-semibold 
        ${disabled ? 'text-disabled' : 'text-gray-secondary'}
      `}
    >
      {label}
    </label>}
    <InputOrTextArea
      className={`
        bg-dark text-gray-secondary text-sm rounded-md p-3
        disabled:text-disabled disabled:bg-disabled disabled:border-2 disabled:border-disabled
        ${label && 'pt-5 pb-1 text-gray-primary'}
        ${className}
      `}
      disabled={disabled}
      {...rest}
    />
  </div>
}

export default Input;