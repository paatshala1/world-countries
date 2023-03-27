export default function InputComponent({ config }) {
  return (
    <div className='flex flex-col space-y-1'>
      <label
        htmlFor={config.id}
        className='text-sm font-semibold text-gray-500'
      >
        {config.label}
      </label>
      <input
        type={config.type}
        id={config.id}
        autoFocus
        className='rounded border border-gray-300 px-4 py-2 transition duration-300 focus:border-transparent focus:bg-indigo-400 focus:outline-none focus:ring-4 focus:ring-blue-200'
      />
    </div>
  )
}
