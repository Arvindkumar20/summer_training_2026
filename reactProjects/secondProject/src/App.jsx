export default function App() {
  return (
    <div className="flex flex-col items-center justify-center shadow-2xl rounded-2xl w-1/2 py-10 px-7 mx-auto border">
      <h1 className="text-3xl font-bold text-gray-700 my-5">
        {" "}
        Enter your Prompt to Generate Image
      </h1>
      <form className="space-y-5">
        <input
          type="text"
          name="name"
          placeholder="Enter Auther Name"
          className="outline-none border py-2 px-3 rounded w-full"
        />
        <textarea
          type="text"
          className="outline-none border py-2 px-3 rounded w-full"
          name="prompt"
          placeholder="enter your prompt here"
        />

        <div className="flex items-center justify-center mx-auto">
          <button
            type="submit"
            className="outline-none border py-2 px-3 rounded w-2/3 cursor-pointer bg-blue-600 text-white "
          >
            Generate Image
          </button>
        </div>
      </form>
    </div>
  );
}
