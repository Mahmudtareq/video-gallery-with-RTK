/* eslint-disable react/prop-types */

const TextInput = ({ title, ...attributes }) => {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700">{title}</label>
      <input
        type="text"
        className="mt-1 py-3 bg-gray-200 px-2 focus:ring-indigo-500 focus:border-indigo-500 block text-black w-full text-[13px] shadow-sm sm:text-sm border-gray-300 rounded-md"
        {...attributes}
      />
    </div>
  );
};

export default TextInput;