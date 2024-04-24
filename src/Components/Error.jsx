/* eslint-disable react/prop-types */
const Error = ({ errorCode, errorMessage }) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-200">
      <h1 className="text-4xl font-bold mb-4">Oops!</h1>
      <p className="text-lg mb-2">Error {errorCode}</p>
      <p className="text-lg mb-8">{errorMessage}</p>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        onClick={() => window.location.reload()}
      >
        Refresh
      </button>
    </div>
  );
};

export default Error;
