import "./style.css"
import logo from "data-base64:~assets/icon.png"
function IndexPopup() {
  const handleClick = () => {
    const urlVal = (document.getElementById("URL") as HTMLInputElement).value
    chrome.runtime.sendMessage(urlVal, (res) => {
      console.log(res.status)
    })
  }

  return (
    <div className="w-[300px] h-[300px] overflow-y-hidden p-1 bg-red-800">
      <main className="w-full h-full flex flex-col gap-3 justify-center items-center bg-slate-900">
        <button className="w-10 h-10 bg-red-800 hover:bg-red-500 absolute rounded-md top-1.5 right-2">S</button>

        <img src={logo} className="w-12 h-12"/>
        <div>
          <label className="block mb-2 text-sm font-medium text-white">
            🔴 URL:
          </label>
          <input
            type="text"
            id="URL"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="gitlab.example.com"
            required
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-white">
            🟣 Replace:
          </label>
          <input
            type="text"
            id="URL"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="192.168.1.1"
            required
          />
        </div>
        <button
          id="setURL"
          onClick={handleClick}
          className="font-mono rounded-md text-lg w-28 h-10 bg-red-800 text-slate-200 font-semibold hover:bg-red-600 hover:text-white">
          ADD
        </button>
      </main>
    </div>
  )
}

export default IndexPopup
