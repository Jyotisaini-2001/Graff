import React, { useState } from "react";

const CreateNewGraphPage = () => {
  const [graphTitle, setGraphTitle] = useState("");
  const [graphDescription, setGraphDescription] = useState("");
  const [selectedPapers, setSelectedPapers] = useState([]);
  const [layout, setLayout] = useState("default");
  const [colorScheme, setColorScheme] = useState("default");

  const handleGraphTitleChange = (e) => {
    setGraphTitle(e.target.value);
  };

  const handleGraphDescriptionChange = (e) => {
    setGraphDescription(e.target.value);
  };

  const handlePaperSelection = (e) => {
    // Handle paper selection logic
    const selectedPaperId = e.target.value;
    // Update selectedPapers state accordingly
  };

  const handleLayoutChange = (e) => {
    setLayout(e.target.value);
  };

  const handleColorSchemeChange = (e) => {
    setColorScheme(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
  };

  return (
    <div className="max-w-3xl mx-auto p-4 mt-8">
      <h2 className="text-2xl font-bold mb-4">Create New Graph</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col">
          <label htmlFor="graphTitle" className="text-sm font-semibold mb-1">
            Graph Title
          </label>
          <input
            type="text"
            id="graphTitle"
            value={graphTitle}
            onChange={handleGraphTitleChange}
            className="py-2 px-3 border border-gray-300 rounded"
            required
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="graphDescription" className="text-sm font-semibold mb-1">
            Graph Description
          </label>
          <textarea
            id="graphDescription"
            value={graphDescription}
            onChange={handleGraphDescriptionChange}
            className="py-2 px-3 border border-gray-300 rounded"
            rows="3"
          ></textarea>
        </div>

        {/* Paper Selection Section */}
        {/* Include logic for selecting papers */}

        {/* Graph Configuration Section */}
        <div className="flex flex-col">
          <label htmlFor="layout" className="text-sm font-semibold mb-1">
            Graph Layout
          </label>
          <select
            id="layout"
            value={layout}
            onChange={handleLayoutChange}
            className="py-2 px-3 border border-gray-300 rounded"
          >
            <option value="default">Default Layout</option>
            {/* Add other layout options */}
          </select>
        </div>

        <div className="flex flex-col">
          <label htmlFor="colorScheme" className="text-sm font-semibold mb-1">
            Color Scheme
          </label>
          <select
            id="colorScheme"
            value={colorScheme}
            onChange={handleColorSchemeChange}
            className="py-2 px-3 border border-gray-300 rounded"
          >
            <option value="default">Default Colors</option>
            {/* Add other color scheme options */}
          </select>
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Create Graph
        </button>
      </form>

      {/* Graph Preview Section */}
      {/* Include logic for displaying graph preview */}
    </div>
  );
};

export default CreateNewGraphPage;
