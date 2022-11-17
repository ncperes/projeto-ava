export default function Login() {
  return (
    <div className="md:container mt-40 mb-40 h-screen">
      <div className="bg-verde-insted grid gap-0 grid-cols-1 grid-rows-6 justify-center rounded-md h-2/3 ml-10 w-4/5">
        <div className="bg-logo-insted bg-contain bg-no-repeat h-24 w-full m-3.5"></div>
        <div className="h-10 mt-8 p-14 w-full justify-center flex items-center text-2xl text-white border-t">
          <h1>Login - Área Insted</h1>
        </div>
        <div className="grid gap-0 grid-cols-1 grid-rows-2 mt-5 w-full justify-center">
          <div className="mt-5 ml-6 w-full justify-left">
            <label className="text-white">Usuário:</label>
          </div>
          <div className="w-full justify-center flex mt-2">
            <input
              type="text"
              placeholder=" Informe seu RA"
              className="flex
              justify-center
              items-center
              w-72
              h-8
              rounded-md
              bg-slate-200
              hover:bg-white
              placeholder:text-slate-400
              border-slate-400
              border-solid
              border"
            />
          </div>
        </div>
        <div className="grid gap-0 grid-cols-1 grid-rows-2 w-full justify-center">
          <div className="mt-6 ml-6 w-full justify-left">
            <label className="text-white">Senha:</label>
          </div>
          <div className="w-full justify-center flex">
            <input
              type="text"
              placeholder=" Informe sua senha"
              className="flex
              justify-center
              items-center
              w-72
              h-8
              rounded-md
              bg-slate-200
              hover:bg-white
              placeholder:text-slate-400
              border-slate-400
              border-solid
              border"
            />
          </div>
        </div>
        <div className="grid gap-0 grid-cols-1 grid-rows-2 mt-3">
          <div className="w-full flex justify-center h-8">
            <button className="bg-black text-white text-xl h-10 w-36 rounded">ENTRAR</button>
          </div>
          <div className="flex justify-center w-full mt-2.5">
            <input type="checkbox" className="mb-4 mr-1.5" />
            <label className="text-sm mb-2 text-slate-700">Continuar conectado</label>
          </div>
        </div>
        <div className="w-full flex justify-center mt-16">
          <h4 className="text-slate-700 hover:underline text-sm">Esqueci minha senha</h4>
        </div>
      </div>
    </div>
  );
}
