export type TextBlockProps = {
  title: string,
  content: string,
  className?: string,
}

const TextBlock = ({ title, content, className }: TextBlockProps) => {
  return <section className={`py-6 px-8 bg-dark rounded-md ${className}`}>
    <h2 className="text-xl font-extrabold text-gray-primary">{title}</h2>
    <p className="text-md text-gray-primary mt-1">{content}</p>
  </section>
}

export default TextBlock;