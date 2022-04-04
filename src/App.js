export default function App() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <button className="btn btn-success btn-outline">Hello daisyUI</button>
      <div className="dropdown">
        <label tabIndex="0" className="btn m-1">
          Click
        </label>
        <ul
          tabIndex="0"
          className="dropdown-content menu p-4 shadow-sm bg-base-300 rounded-box w-60"
        >
          <li>
            <a href="#">Item 1</a>
          </li>
          <li>
            <a href="#">Item 2</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
