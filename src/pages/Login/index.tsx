export default function Login() {
  return (
    <div className="md:container mt-52 h-screen">
      <div className="bg-verde-insted grid gap-0 grid-cols-1 grid-rows-6 justify-center rounded-md h-1/2 ml-10 w-4/5">
        <div className="bg-logo-insted bg-contain bg-no-repeat h-24 w-full m-3.5"></div>
        <div className="h-10 mt-12 w-full justify-center flex items-center text-4xl text-white">
          <h1>LOGIN</h1>
        </div>
        <div className="mt-6 ml-5 block">
          <label className="text-white">Usuário:</label>
          <br />
          <input
            type="text"
            placeholder=" Informe seu RA"
            className="flex justify-center items-center mt-1 ml-5 w-64 h-7 rounded-md bg-slate-200 placeholder:text-slate-400 border-solid border-slate-400 border"
          />
        </div>
      </div>
    </div>
  );
}
