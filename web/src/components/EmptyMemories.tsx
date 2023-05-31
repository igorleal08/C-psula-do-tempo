export function EmptyMemories() {
  return (
    <div className="flex flex-1 items-center justify-center">
      <p className="w-[360px] text-center leading-relaxed">
        Você ainda não registrou nenhuma lembrança!{' '}
        <a href="" className="underline transition-colors hover:text-gray-50">
          Criar agora
        </a>
        !
      </p>
    </div>
  )
}
