
export default function Home() {
  return (
    <div className="flex flex-row justify-center h-screen bg-off-white">

      {/*Left Container*/}
      <div className="flex flex-col h-full w-2/5 items-center bg-blue-700">

        {/*Logo Container*/}
        <div className="flex w-full h-1/5 bg-red-500"></div>

        {/*Form Container*/}
        <div className="flex w-full h-4/5 items-center justify-center bg-green-500">
          <form className="flex flex-col justify-center h-1/5 w-2/5 p-6 rounded-lg py-40 bg-custom-green">
            <label>Email</label>
            <input type="email" id="email" name="email" placeholder="Enter your Email"/> <br />
            <label>Password</label>
            <input type="password" id="password" name="password" placeholder="Enter your Password"/> <br />
            <button type="submit">Login</button>
          </form>
        </div>
      </div>

      {/*Right Container*/}
      <div className="flex h-full w-3/5 bg-violet-500"></div>


    </div>
  );
}
