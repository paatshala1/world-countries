export default function ButtonComponent(props) {
  return (
    <button
      type={props.type}
      className='w-full rounded-md bg-indigo-600 px-4 py-2 text-lg font-semibold text-white shadow transition-colors duration-300 hover:bg-indigo-500 focus:outline-none focus:ring-4 focus:ring-blue-200'
    >
      {props.label}
    </button>
  )
}
